"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from config.views import index, logout_view
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),

     path('', index, name='index'),
     path('login/', views.login_cadastro_view, name='login_cadastro'),
     path('cadastro/', views.cadastrar_usuario, name='cadastro'),
     path('logar/', views.logar_usuario, name='logar'),
     path('logout/', logout_view, name='logout'),
    
    path('catalogo/', include('Catalogo.urls')),
    path('chat/', include('Chat.urls')),
    path('cliente/', include('Cliente.urls')),
    path('servicos/', include('Servicos.urls')),
    path('trocas/', include('Trocas.urls')),       
]