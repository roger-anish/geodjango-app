from django.contrib import admin
from .models import UsaStates
from leaflet.admin import LeafletGeoAdmin

# Register your models here.

class StatesAdmin(LeafletGeoAdmin):
    list_display=['state_name','state_abbr','state_fips',]
    list_filter=['state_name']
    list_editable=['state_abbr']

admin.site.register(UsaStates,StatesAdmin)