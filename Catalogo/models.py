from django.db import models
from django.contrib.auth.models import User

class Produto(models.Model):
    id_produto = models.AutoField(primary_key=True, db_column='id_produto')
    nome_produto = models.CharField(max_length=45, db_column='nome_produto')
    categoria = models.CharField(max_length=20, db_column='categoria')
    descricao = models.CharField(max_length=45, db_column='descricao')
    estado_conservacao = models.CharField(max_length=10, db_column='estado_conservacao')
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, db_column='usuario_id', null=True, blank=True)
    
    troca = models.ForeignKey('Trocas.Troca', on_delete=models.CASCADE, db_column='troca_idtroca', null=True, blank=True)
    servico = models.ForeignKey('Servicos.Servico', on_delete=models.CASCADE, db_column='servico_idservico', null=True, blank=True)

    class Meta:
        db_table = 'produto'

    def __str__(self):
        return self.nome_produto