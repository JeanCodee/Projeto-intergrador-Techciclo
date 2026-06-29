from django.urls import path
from . import views

urlpatterns = [
     path('', views.perfil, name='perfil' ),
     path('administrador/',views.administrador, name='administrador')
]