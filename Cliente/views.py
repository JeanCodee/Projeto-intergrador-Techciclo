from django.shortcuts import render


def perfil(request):
    return render(request, 'tela_perfil.html')

def administrador(request):
    return render(request, 'tela_admin.html')
