from django.test import TestCase
from django.utils import timezone
from Cliente.models import Perfil, Usuario
from Servicos.models import Servico
from Trocas.models import Troca
from Catalogo.models import Produto

class ProdutoModelTestCase(TestCase):
    def setUp(self):
        # 1. Configura as dependências de Usuário e Perfil
        self.perfil = Perfil.objects.create(descricao="Cliente Comum")
        self.usuario = Usuario.objects.create(
            nome="Bruno Rocha",
            email="bruno@email.com",
            senha=789,
            perfil=self.perfil
        )

        # 2. Configura o Serviço obrigatório para o Produto
        self.servico = Servico.objects.create(
            nome_servico="Manutenção",
            desc_servico="Reparo geral",
            valor_servico="40.00"
        )

        # 3. Configura a Troca obrigatória para o Produto
        self.troca = Troca.objects.create(
            data_troca=timezone.now(),
            status_troca="Em andamento",
            usuario_proponente=self.usuario,
            usuario_receptor=self.usuario
        )

    def test_criacao_produto_sucesso(self):
        """Garante que um produto é cadastrado com sucesso respeitando os relacionamentos"""
        produto = Produto.objects.create(
            nome_produto="Monitor LED",
            categoria="Eletrônicos",
            descricao="Monitor 24 polegadas funcionando perfeitamente",
            estado_conservacao="Excelente",
            troca=self.troca,
            servico=self.servico
        )

        # Validações básicas
        self.assertEqual(Produto.objects.count(), 1)
        self.assertEqual(str(produto), "Monitor LED")
        
        # Valida se os dados vindos dos outros apps estão acessíveis pela FK
        self.assertEqual(produto.servico.nome_servico, "Manutenção")
        self.assertEqual(produto.troca.status_troca, "Em andamento")

    def test_cascade_delete_servico_no_produto(self):
        """Garante que se o serviço associado for excluído, o produto também será apagado"""
        Produto.objects.create(
            nome_produto="Teclado Mecânico",
            categoria="Periféricos",
            descricao="Teclado RGB",
            estado_conservacao="Bom",
            troca=self.troca,
            servico=self.servico
        )

        # Deleta o serviço pai
        self.servico.delete()

        # O produto deve sumir devido ao on_delete=models.CASCADE
        self.assertEqual(Produto.objects.count(), 0)