from django.urls import path,include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('', views.ImagemViewSet, basename="image-register")

urlpatterns = [
    path('api/images/', views.getImages, name="images"),
    path('api/images/<int:id>/', views.getImage, name="image"),
    path('api/images/register/', include(router.urls)),
    path('api/documents/filtered/<int:interval>/<int:limit>/', views.getDocumentsFiltered, name="documents-filtered"),
    path('api/documents/filtered/<int:interval>/<int:limit>/<str:tag>/', views.getDocumentsFiltered, name="documents-filtered-tag"),
    path('api/documents/filtered/<int:interval>/<int:limit>/<str:tag>/<str:title>/', views.getDocumentsFiltered, name="documents-filtered-tag-title"),
    path('api/documents/<int:id>/', views.getDocument, name="document"),
    path('api/documents/<int:id>/delete/', views.deleteDocument, name="delete-document"),
    path('api/documents/register/', views.postDocuments, name="register-document"),
    path('api/documents/<int:id>/update/', views.updateDocument, name="update-document"),
    path('api/tags/', views.getTags, name="tags"),
    path('api/tags/register/', views.postTag, name="register-tag"),
    path('api/tags/<int:id>/update/', views.updateTag, name="update-tag"),
    path('api/tags/<int:id>/delete/', views.deleteTag, name="delete-tag"),
    path('api/codes/<int:id>', views.getCodes, name="codes"),
    path('api/codes/register/', views.postCode, name="code_register"),
]