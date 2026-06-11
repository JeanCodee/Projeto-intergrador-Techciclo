from django.shortcuts import render

def perfil(request):
    return render(request, 'tela_perfil.html')

def chat(request):
    return render(request, 'chat.html')

def trocas(request):
    return render(request, 'trocas.html')

def servicos(request):
    return render(request, 'servicos.html')

def cadastro(request):
    return render(request, 'cadastro_produtos-servicos.html')

def inicio(request):
    return render(request, 'inicio.html')
    return render(request, 'tela_perfil.html')