from django.shortcuts import render

def servicos(request):
    return render(request, 'servicos.html')

# 🔑 ADICIONE ESTA FUNÇÃO:
def servico1_view(request):
    return render(request, 'servico1.html')

def servico2_view(request):
    return render(request, 'servico2.html')