from django.shortcuts import render

def catalogo(request):
    return render(request, 'cadastro_produtos-servicos.html')
