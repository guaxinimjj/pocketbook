from django_filters import rest_framework as filters

from pocketbook.models import User


class UserFilter(filters.FilterSet):
    first_name = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = User
        fields = ('first_name',)
