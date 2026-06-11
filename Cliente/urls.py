from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),

    path('perfil/', views.perfil, name='perfil'),
    path('chat/', views.chat, name='chat'),

    path('trocas/', views.trocas, name='trocas'),
    path('servicos/', views.servicos, name='servicos'),

    path('cadastro/', views.cadastro, name='cadastro'),
]