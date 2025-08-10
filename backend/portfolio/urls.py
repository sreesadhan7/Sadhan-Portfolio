from django.urls import path
from . import views

app_name = 'portfolio'

urlpatterns = [
    path('api/contact/', views.contact_form, name='contact_form'),
] 