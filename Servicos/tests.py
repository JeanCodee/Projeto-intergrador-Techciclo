from django.test import TestCase
from Servicos.models import Servico, ServicoHasUsuario
from Cliente.models import Perfil, Usuario

class ServicosAppTestCase(TestCase):
    def setUp(self):
        # 1. Cria um Perfil e um Usuário base (necessários para a tabela associativa)
        self.perfil = Perfil.objects.create(descricao="Cliente Comum")
        self.usuario = Usuario.objects.create(
            nome="Carlos Silva",
            email="carlos@email.com",
            senha=123456,
            perfil=self.perfil
        )
        
        # 2. Cria um Serviço base para os testes
        self.servico = Servico.objects.create(
            nome_servico="Limpeza",
            desc_servico="Serviço de higienização ecológica",
            valor_servico="35.00"
        )

    def test_criacao_servico_sucesso(self):
        """Garante que um serviço é criado corretamente com os seus atributos"""
        self.assertEqual(Servico.objects.count(), 1)
        self.assertEqual(str(self.servico), "Limpeza")
        self.assertEqual(self.servico.valor_servico, "35.00")

    def test_criacao_associacao_servico_usuario(self):
        """Testa o relacionamento N:N na tabela ServicoHasUsuario"""
        associacao = ServicoHasUsuario.objects.create(
            usuario=self.usuario,
            servico=self.servico
        )

        # Verifica se a associação foi guardada
        self.assertEqual(ServicoHasUsuario.objects.count(), 1)
        
        # Verifica se o __str__ customizado monta a string corretamente
        string_esperada = f"Associação: Carlos Silva - Limpeza"
        self.assertEqual(str(associacao), string_esperada)

    def test_integridade_cascade_on_delete_servico(self):
        """Garante que se um serviço for eliminado, a associação também é excluída (CASCADE)"""
        ServicoHasUsuario.objects.create(
            usuario=self.usuario,
            servico=self.servico
        )
        
        # Apaga o serviço do banco de dados
        self.servico.delete()
        
        # A associação deve sumir automaticamente por causa do on_delete=models.CASCADE
        self.assertEqual(ServicoHasUsuario.objects.count(), 0)