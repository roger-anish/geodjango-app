from django.db import models
from django.contrib.gis.db import models
# Create your models here.

class UsaStates(models.Model):
    state_fips = models.AutoField(db_column='STATE_FIPS', primary_key=True)  # Field name made lowercase.
    geom = models.MultiPolygonField(blank=True, null=True)
    state_name = models.CharField(max_length=25, blank=True, null=True)
    state_fips_0 = models.CharField(db_column='state_fips', max_length=2, blank=True, null=True)  # Field renamed because of name conflict.
    state_abbr = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'USA_States'

    # def __str__(self):
    #     return self.state_name