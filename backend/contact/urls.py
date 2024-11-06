from django.urls import path
from .views import contact_view

urlpatterns = [
    path('', contact_view, name='contact'),  # Matches the empty path after 'contact/'
]
