from django.urls import path
from . import views

urlpatterns = [
    path('', views.trocas, name='trocas'), # Página principal de trocas
    
    # 🔑 ROTA PARA O PRODUTO 1:
    path('produto1/', views.produto1_view, name='produto1'),
    path('produto2/', views.produto2_view, name='produto2')
]