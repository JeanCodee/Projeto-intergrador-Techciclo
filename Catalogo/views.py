from django.shortcuts import render, redirect
from django.contrib import messages
from django.utils import timezone
from .models import Produto
from Servicos.models import Servico, ServicoHasUsuario

def catalogo(request):
    # 1. Se o usuário submeteu o formulário (Clicou no botão cadastrar)
    if request.method == 'POST':
        tipo = request.POST.get('tipo')
        nome = request.POST.get('nome')
        descricao = request.POST.get('descricao')
        categoria = request.POST.get('categoria')
        
        try:
            if tipo == 'produto':
                condicao = request.POST.get('condicao')
                novo_produto = Produto.objects.create(
                    nome_produto=nome[:45],
                    descricao=descricao[:45],
                    categoria=categoria[:20],
                    estado_conservacao=condicao[:10],
                    troca=None,
                    servico=None
                )
                messages.success(request, f"Produto '{novo_produto.nome_produto}' cadastrado com sucesso!")
                
            elif tipo == 'servico':
                valor = request.POST.get('valor')
                novo_servico = Servico.objects.create(
                    nome_servico=nome[:15],
                    desc_servico=descricao[:45],
                    valor_servico=str(valor)[:10]
                )
                messages.success(request, f"Serviço '{novo_servico.nome_servico}' cadastrado com sucesso!")
                
            return redirect('catalogo')
            
        except Exception as e:
            messages.error(request, f"Erro ao cadastrar {tipo}: {str(e)}")
            return redirect('catalogo')

    # 2. Se o usuário está apenas ACESSANDO a página (Requisição GET normal)
    return render(request, 'cadastro_produtos-servicos.html')