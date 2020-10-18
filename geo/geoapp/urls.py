from django.urls import path
from .views import index, states   #import states function from views.py, not UsaStates

urlpatterns = [
    path('',index, name='index'),
    path('StatesData',states, name='StatesData')
]