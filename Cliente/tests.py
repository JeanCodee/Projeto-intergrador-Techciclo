from django.test import TestCase
from Cliente.models import Perfil, Usuario

class UsuarioModelTestCase(TestCase):
    def setUp(self):
        # Como o usuário obrigatoriamente depende de um Perfil, criamos um primeiro
        self.perfil_teste = Perfil.objects.create(
            descricao="Usuário Comum"
        )

    def test_criacao_usuario_sucesso(self):
        """Garante que o usuário é criado com sucesso e respeita os tipos de campos"""
        usuario = Usuario.objects.create(
            nome="Mariana Souza",
            email="mariana@techciclo.com",
            senha=987654,  # IntegerField conforme sua migração
            telefone=11999999999,  # IntegerField e aceita null/blank
            saldo_ecopoints="150",
            reputcao="Excelente",
            perfil=self.perfil_teste
        )

        # 1. Testar se o registro realmente foi parar no banco de dados de teste
        self.assertEqual(Usuario.objects.count(), 1)

        # 2. Testar se a função __str__ que ajustamos está devolvendo o nome correto
        self.assertEqual(str(usuario), "Mariana Souza")

        # 3. Testar se a relação com a tabela Perfil está funcionando de forma íntegra
        self.assertEqual(usuario.perfil.descricao, "Usuário Comum")