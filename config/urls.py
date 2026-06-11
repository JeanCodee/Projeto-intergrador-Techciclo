from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Cliente.urls')),  # Diz para o Django olhar as urls do app Cliente
]