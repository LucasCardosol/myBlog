from django.db import models

# Create your models here.
class Tag (models.Model):
    name = models.CharField(max_length=50, null=False, blank=False ,default='*name folder')
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self) :
        return str(self.name)

class Document(models.Model):
    title = models.CharField(max_length=50, null=False, blank=False ,default='title')
    text = models.TextField(null=False, blank=False, default='0000-00-00')
    date = models.DateField(null=False, blank=False ,default='2022-01-01')
    tag = models.ForeignKey(Tag, on_delete=models.SET_NULL, null=True)
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self) :
        return str(self.title)

class Image(models.Model):
    image = models.ImageField(null=True, blank=True)
    document = models.ForeignKey(Document, on_delete=models.SET_NULL, null=True)
    order = models.IntegerField(null=False, blank=False, default=1)
    _id = models.AutoField(primary_key=True, editable=False)
    
    def __str__(self) :
        return str(self.image)