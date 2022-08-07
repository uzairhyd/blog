from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    # path('', get_posts),
    # path('<str:pk>/', get_post),

    path('<int:pk>/', PostDetails.as_view(), name='detailscreate'),
    path('', PostList.as_view(), name='listcreate')

]
