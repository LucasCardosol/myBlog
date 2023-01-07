from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', views.ImagemViewSet, basename="imagepost")

urlpatterns = [
    path('api/register_images', include(router.urls)),
    path('api/images/', views.getImages, name="images"),
    path('api/images/<int:id>/', views.getImage, name="image"),
    path('api/documents/', views.getDocuments, name="documents"),
    path('api/register_document', views.postDocuments, name="register")
]