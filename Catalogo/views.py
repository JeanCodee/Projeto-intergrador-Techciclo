from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils import timezone
from .models import Produto
from Servicos.models import Servico, ServicoHasUsuario

def cadastro_produtos_servicos(request):
    if request.method == 'POST':
        tipo = request.POST.get('tipo')
        nome = request.POST.get('nome')
        descricao = request.POST.get('descricao')
        categoria = request.POST.get('categoria')
        
        try:
            if tipo == 'produto':
                condicao = request.POST.get('condicao')
                novo_produto = Produto.objects.create(
                    nome_produto=nome,
                    descricao=descricao,
                    categoria=categoria,
                    estado_conservacao=condicao,
                    troca=None,
                    servico=None
                )
                messages.success(request, f"Produto '{novo_produto.nome_produto}' cadastrado com sucesso!")
                
            elif tipo == 'servico':
                valor = request.POST.get('valor')
                servico = Servico.objects.create(
                    nome_servico=nome[:15],
                    desc_servico=descricao[:45],
                    valor_servico=str(valor)
                )
                messages.success(request, f"Serviço '{servico.nome_servico}' cadastrado com sucesso!")
                
            return redirect('cadastro_produtos_servicos')
        except Exception as e:
            messages.error(request, f"Erro ao cadastrar {tipo}: {str(e)}")
            return redirect('cadastro_produtos_servicos')

def catalogo(request):
    return render(request, 'cadastro_produtos-servicos.html')
