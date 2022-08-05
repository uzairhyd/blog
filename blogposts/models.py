from django.db import models

# Create your models here.

class Post(models.Model):
    post_title = models.CharField(max_length=300)
    post_body = models.TextField()
    post_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.post_title

