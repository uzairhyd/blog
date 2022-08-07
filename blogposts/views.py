# from django.shortcuts import render
# from django.http import HttpResponse
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
#
# from .serializers import PostSerializer
# from .models import Post
#
#
# @api_view(['GET'])
# def get_posts(request):
#     posts = Post.objects.all()
#     serializer = PostSerializer(posts, many=True)
#     return Response(serializer.data)
#
# @api_view(['GET'])
# def get_post(request, pk):
#     post = Post.objects.get(id=pk)
#     serializer = PostSerializer(post, many=False)
#     return Response(serializer.data)


from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

class PostList(generics.ListCreateAPIView):
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer


class PostDetails(generics.RetrieveDestroyAPIView):
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer



