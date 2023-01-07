from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status, viewsets
from .models import Document, Image
from .serializers import DocumentSerializer, ImageSerializer

# Create your views here.

@api_view(['GET'])
def getDocuments(request):
    documents = Document.objects.all()
    serializer = DocumentSerializer(documents, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getImages(request):
    images = Image.objects.all()
    serializer = ImageSerializer(images, many=True)
    return Response(serializer.data)


class ImagemViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

@api_view(['GET'])
def getImage(request,id):
    image = Image.objects.filter(document=id)
    serializer = ImageSerializer(image, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postDocuments(request):
    serializer = DocumentSerializer(data=request.data)
    try:
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except:
        Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)