from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse
from .models import UsaStates  #class import form models.py file

# Create your views here. 

def index(request):
    return render(request,'index.html')

def states(request):
    StatesData = serialize('geojson',UsaStates.objects.all())  #conversion of data to geojson format
    return HttpResponse(StatesData,content_type='geojson')