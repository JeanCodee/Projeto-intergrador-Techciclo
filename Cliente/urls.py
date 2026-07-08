from django.urls import path
from . import views

urlpatterns = [
     path('', views.perfil_view, name='perfil' ),
     path('administrador/',views.administrador, name='administrador')
]