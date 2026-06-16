from django.shortcuts import render, redirect

def index(request):
    # Como 'inicio.html' está na pasta templates geral, o Django vai achá-lo direto
    return render(request, 'inicio.html')

def autenticacao_view(request):
    return render(request, 'login_cadastro.html') # Substitua pelo seu template de login global

def logout_view(request):
    # Sua lógica de logout aqui
    return redirect(request,'inicio.html')