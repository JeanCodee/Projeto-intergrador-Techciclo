from django.shortcuts import render

def produto1_view(request):
    return render(request, 'produto1.html'),

def produto2_view(request):
    return render(request, 'produto2.html'),

