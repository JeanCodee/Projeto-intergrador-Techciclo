from django.db import models

class Perfil(models.Model):
    id_perfil = models.AutoField(primary_key=True, db_column='idperfil')
    descricao = models.CharField( max_length=45, db_column='descricao_perfil', blank=True, null=True)
    
    class Meta:
        db_table = 'perfil'
        
    def __str__(self):
        return self.descricao if self.descricao else f"Perfil {self.id_perfil}"

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True, db_column='idUsuario')
    nome = models.CharField(max_length=45, db_column='Nome')
    email = models.CharField(max_length=45, db_column='Email')
    senha = models.IntegerField(db_column='Senha')
    telefone = models.IntegerField(db_column='Telefone', blank=True, null=True)
    saldo_ecopoints = models.CharField(max_length=45, db_column='SaldoEcoPoins', blank=True, null=True)
    reputcao = models.CharField(max_length=45, db_column='Reputcao', blank=True, null=True)
    
    perfil = models.ForeignKey(
        'Perfil',
        on_delete=models.CASCADE,
        db_column='Perfil_idPerfil'
    )
    
    class Meta:
        db_table = 'usuario'
        
    def __str__(self):
        return self.nome