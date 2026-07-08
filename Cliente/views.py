from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from Catalogo.models import Produto
from Servicos.models import Servico

@login_required
def perfil_view(request):
    meus_produtos = Produto.objects.filter(usuario=request.user).order_by('-id_produto')
    
    meus_servicos = Servico.objects.filter(usuario=request.user).order_by('-id_servico')
    
    context = {
        'meus_produtos': meus_produtos,
        'meus_servicos': meus_servicos,
    }
    return render(request, 'tela_perfil.html', context)

def perfil(request):
    return render(request, 'tela_perfil.html')

def administrador(request):
    return render(request, 'tela_admin.html')
