from django.urls import include, path
from rest_framework.routers import DefaultRouter

from pocketbook import views

users_router = DefaultRouter()
users_router.register("users", views.UserViewSet, basename="users")

urlpatterns = [
    path("", include(users_router.urls)),
]
