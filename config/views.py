from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout
from django.contrib import messages
from Catalogo.models import Produto
from Servicos.models import Servico

def login_cadastro_view(request):
    if request.method == 'POST':
        pass
    
    return render(request, 'login_cadastro.html')

def cadastrar_usuario(request):
    if request.method == 'POST':
        nome = request.POST.get('cadName')
        email = request.POST.get('cadEmail')
        telefone = request.POST.get('cadPhone')
        senha = request.POST.get('cadPassword')

        if User.objects.filter(username=email).exists():
            messages.error(request, 'Este e-mail já está cadastrado.')
            return redirect('login_cadastro')

        # cria usuário do Django
        user = User.objects.create_user(
            username=email,
            email=email,
            password=senha
        )
        user.first_name = nome
        user.save()

        messages.success(request, 'Conta criada com sucesso!')
        return redirect('login_cadastro')

    return redirect('login_cadastro')
    
def logar_usuario(request):
    if request.method == 'POST':
        email = request.POST.get('loginEmail')
        senha = request.POST.get('loginPassword')

        user = authenticate(request, username=email, password=senha)

        if user is not None:
            auth_login(request, user)
            messages.success(request, 'Bem-vindo de volta!')
            return redirect('index')
        else:
            messages.error(request, 'Email ou senha incorretos.')
            return redirect('login_cadastro')

    return redirect('login_cadastro')

def index(request):
    produtos_cadastrados = Produto.objects.all()
    servicos_cadastrados = Servico.objects.all()

    context = {
        'produtos': produtos_cadastrados,
        'servicos': servicos_cadastrados
    }
    return render(request, 'inicio.html', context)

def logout_view(request):
    logout(request)
    return redirect('index')