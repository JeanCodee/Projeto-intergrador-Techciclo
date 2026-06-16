from django.shortcuts import render

def trocas(request):
    return render(request, 'trocas.html')

# 🔑 ADICIONE ESTA FUNÇÃO:
def produto1_view(request):
    return render(request, 'produto1.html')

def produto2_view(request):
    return render(request, 'produto2.html')
