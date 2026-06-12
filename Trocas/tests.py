from django.test import TestCase
from django.utils import timezone
from Cliente.models import Perfil, Usuario
from Catalogo.models import Produto
from Servicos.models import Servico
from Trocas.models import Troca, SolicitacaoTroca

class TrocasAppTestCase(TestCase):
    def setUp(self):
        # 1. Criar a estrutura base do Cliente (Necessário para os usuários)
        self.perfil = Perfil.objects.create(descricao="Cliente Padrão")
        
        # Criamos dois usuários diferentes para testar o proponente e o receptor
        self.usuario_prop = Usuario.objects.create(
            nome="Thiago Proponente", email="thiago@email.com", senha=123, perfil=self.perfil
        )
        self.usuario_recep = Usuario.objects.create(
            nome="Aline Receptora", email="aline@email.com", senha=456, perfil=self.perfil
        )

        # 2. Criar um Serviço e uma Troca base para que o Produto possa existir
        self.servico = Servico.objects.create(
            nome_servico="Frete", valor_servico="10.00"
        )
        self.troca_base = Troca.objects.create(
            data_troca=timezone.now(),
            status_troca="Pendente",
            usuario_proponente=self.usuario_prop,
            usuario_receptor=self.usuario_recep
        )

        # 3. Criar o Produto (Necessário para a SolicitacaoTroca)
        self.produto = Produto.objects.create(
            nome_produto="Livro de Django",
            categoria="Educação",
            descricao="Livro físico em perfeito estado",
            estado_conservacao="Novo",
            troca=self.troca_base,
            servico=self.servico
        )

    def test_criacao_troca_sucesso(self):
        """Garante que uma troca é registrada corretamente com proponente e receptor distintos"""
        # Como já criamos uma troca no setUp, o contador deve ser 1
        self.assertEqual(Troca.objects.count(), 1)
        
        # Testar se o __str__ customizado monta a string corretamente
        self.assertEqual(str(self.troca_base), f"Troca {self.troca_base.id_troca} - Status: Pendente")
        
        # Validar se os relacionamentos reversos (related_name) estão funcionando
        self.assertEqual(self.usuario_prop.trocas_propostas.count(), 1)
        self.assertEqual(self.usuario_recep.trocas_recebidas.count(), 1)

    def test_criacao_solicitacao_troca_sucesso(self):
        """Testa o registro completo de uma solicitação de troca de um produto por um usuário"""
        solicitacao = SolicitacaoTroca.objects.create(
            data_solicitacao=timezone.now(),
            status_solicitacao="Enviada",
            usuario=self.usuario_prop,
            produto=self.produto
        )

        self.assertEqual(SolicitacaoTroca.objects.count(), 1)
        
        # Testar se o __str__ da solicitação funciona
        string_esperada = f"Solicitação {solicitacao.id_solicitacao} - Status: Enviada"
        self.assertEqual(str(solicitacao), string_esperada)
        
        # Garantir que a solicitação encontre o produto correto do catálogo
        self.assertEqual(solicitacao.produto.nome_produto, "Livro de Django")

    def test_cascade_delete_usuario_na_solicitacao(self):
        """Garante que se um usuário for deletado, suas solicitações também somem"""
        SolicitacaoTroca.objects.create(
            data_solicitacao=timezone.now(),
            status_solicitacao="Enviada",
            usuario=self.usuario_prop,
            produto=self.produto
        )

        # Deletar o usuário proponente
        self.usuario_prop.delete()

        # A solicitação deve ter sido excluída em cascata
        self.assertEqual(SolicitacaoTroca.objects.count(), 0)