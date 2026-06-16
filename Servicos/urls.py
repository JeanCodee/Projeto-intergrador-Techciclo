from django.urls import path
from . import views

urlpatterns = [
    path('', views.servicos, name='servicos'),
    
    path('servico1/', views.servico1_view, name='servico1' ),
    path('servico2/', views.servico2_view, name='servico2')
]