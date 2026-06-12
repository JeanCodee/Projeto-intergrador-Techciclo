from django.db import models

class Troca(models.Model):
    id_troca = models.AutoField(primary_key=True, db_column='idtroca')
    data_troca = models.DateTimeField(db_column='Data_troca')
    status_troca = models.CharField(max_length=45, db_column='status_troca')
    
    usuario_proponente = models.ForeignKey(
        'Cliente.Usuario',
        on_delete=models.CASCADE,
        db_column='usuario_idUsuario',
        related_name='trocas_propostas'
    )
    
    usuario_receptor = models.ForeignKey(
        'Cliente.Usuario',
        on_delete=models.CASCADE,
        db_column = 'usuario_idUsuario1',
        related_name='trocas_recebidas'
    )
    
    class Meta:
        db_table = 'troca'
        
    def __str__(self):
        return f"Troca {self.id_troca} - Status: {self.status_troca}"
    
class SolicitacaoTroca(models.Model):
    id_solicitacao = models.AutoField(primary_key=True, db_column='idSolicitacao')
    data_solicitacao = models.DateTimeField(db_column='Data_solicitacao')
    status_solicitacao = models.CharField(max_length=45, db_column='Status_solicitacao')
    
    usuario = models.ForeignKey(
        'Cliente.Usuario',
        on_delete=models.CASCADE,
        db_column='usuario_idUsuario'
    )
    
    produto = models.ForeignKey(
        'Catalogo.Produto',
        on_delete=models.CASCADE,
        db_column='produto_idProduto'
    )
    
    class Meta:
        db_table = 'solicitacao_troca'
        
    def __str__(self):
        return f"Solicitação {self.id_solicitacao} - Status: {self.status_solicitacao}"