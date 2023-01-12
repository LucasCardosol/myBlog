from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.shortcuts import get_list_or_404
from .models import Document, Image , Tag
from .serializers import DocumentSerializer, ImageSerializer , TagSerializer

# Create your views here.

@api_view(['GET'])
def getDocuments(request):
    documents = Document.objects.all()
    serializer = DocumentSerializer(documents, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getDocumentsFiltered(request,interval,limit,tag=None, title=None):
    documents = Document.objects.all()
    if tag!=None and tag!='0':
        documents = Document.objects.filter(tag=tag)
    if title!=None:
        documents = documents.filter(title=title)
    nlen = len(documents)
    #[0+(interval*limit):limit+(interval*limit)]
    documents = documents[::-1][0+(interval*limit):limit+(interval*limit)]
    serializer = DocumentSerializer(documents, many=True)
    return Response([serializer.data,nlen])

@api_view(['GET'])
def getDocument(request,id):
    documents = Document.objects.filter(_id=id)
    serializer = DocumentSerializer(documents, many=True)
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteDocument(request,id):
    document = Document.objects.get(_id=id)
    document.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def updateDocument(request, id):
    data = request.data
    print(data)
    document = Document.objects.get(_id=id)
    document.title = data['title']
    document.text = data['text']
    if data['tag'] == None or data['tag'] == '0':
        document.tag = None
    else:
        document.tag = Tag.objects.get(_id=data['tag']) 
    document.save()
    serializer = DocumentSerializer(document, many=False)
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

@api_view(['GET'])
def getTags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteTag(request,id):
    tag = Tag.objects.get(_id=id)
    tag.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def updateTag(request, id):
    data = request.data
    tag = Tag.objects.get(_id=id)
    tag.name = data['name']
    tag.save()
    serializer = TagSerializer(tag, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def postTag(request):
    serializer = TagSerializer(data=request.data)
    try:
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except:
        Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)