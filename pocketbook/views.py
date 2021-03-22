from rest_framework.mixins import (
    CreateModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
)
from rest_framework.viewsets import GenericViewSet
from django_filters.rest_framework import DjangoFilterBackend


from pocketbook.filters import UserFilter
from pocketbook.models import User
from pocketbook.serializers import UserSerializer


class UserViewSet(
    CreateModelMixin,
    DestroyModelMixin,
    RetrieveModelMixin,
    ListModelMixin,
    UpdateModelMixin,
    GenericViewSet,
):
    ordering = ["-id"]
    filter_backends = [DjangoFilterBackend]
    filterset_class = UserFilter
    queryset = User.objects.all()
    serializer_class = UserSerializer



