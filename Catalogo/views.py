from django.shortcuts import render, redirect, get_object_or_404 # <-- Adicionado get_object_or_404 aqui
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
                    usuario=request.user,
                    troca=None,
                    servico=None
                )
                messages.success(request, f"Produto '{novo_produto.nome_produto}' cadastrado com sucesso!")
                
            elif tipo == 'servico':
                valor = request.POST.get('valor')
                novo_servico = Servico.objects.create(
                    nome_servico=nome[:15],
                    desc_servico=descricao[:45],
                    valor_servico=str(valor)[:10],
                    usuario=request.user.id # Usando o .id numérico conforme configuramos na model de Serviços
                )
                messages.success(request, f"Serviço '{novo_servico.nome_servico}' cadastrado com sucesso!")
                
            return redirect('catalogo')
            
        except Exception as e:
            messages.error(request, f"Erro ao cadastrar {tipo}: {str(e)}")
            return redirect('catalogo')

    # 2. Se o usuário está apenas ACESSANDO a página (Requisição GET normal)
    return render(request, 'cadastro_produtos-servicos.html')


# === NOVA VIEW DINÂMICA DE DETALHES ===
def detalhes_produto(request, id_produto):
    # 1. Puxa o produto específico clicado
    produto = get_object_or_404(Produto, id_produto=id_produto)
    
    # 2. Busca os produtos do usuário LOGADO atual para ele escolher na hora da troca
    produtos_usuario = []
    if request.user.is_authenticated:
        produtos_usuario = Produto.objects.filter(usuario=request.user).order_by('-id_produto')
        
    context = {
        'produto': produto,
        'produtos_usuario': produtos_usuario,
    }
    return render(request, 'detalhes_produto.html', context)

def detalhes_servico(request, servico_id):
    # Busca o serviço pelo ID ou retorna erro 404 se não existir
    servico = get_object_or_404(Servico, id_servico=servico_id)
    
    # Passa o objeto 'servico' dentro do contexto para o template
    return render(request, 'detalhes_servico.html', {'servico': servico})
