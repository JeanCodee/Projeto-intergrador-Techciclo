from django.urls import path
from . import views  # O ponto (.) significa "desta mesma pasta Cliente"

urlpatterns = [
    path('', views.home_view, name='home'),
]