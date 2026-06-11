from django.db import models

class Servico(models.Model):
    id_servico = models.AutoField(primary_key=True, db_column='idservico')
    desc_servico = models.CharField(max_length=45, db_column='Desc_servico', blank=True, null=True)
    nome_servico = models.CharField(max_length=15, db_column='nome_servico')
    valor_servico = models.CharField(max_length=10, db_column='valor_servico')
    
    class Meta:
        db_table = 'servico'
        
    def __str__(self):
        return self.nome_servico

class ServicoHasUsuario(models.Model):
    usuario = models.ForeignKey(
        'cliente.Usuario',
        on_delete=models.CASCADE,
        db_column='Usuario_idUsuario'
    )
    
    servico = models.ForeignKey(
        'Servico',
        on_delete=models.CASCADE,
        db_column='servico_idservico'
    )
    
    class Meta:
        db_table = 'servico_has_usuario'
        unique_together = (('usuario','servico'),)
        
    def __str__(self):
        return f"Associação: {self.usuario.nome} - {self.servico.nome_servico}"