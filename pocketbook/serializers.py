from rest_framework import serializers

from pocketbook.models import User


class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(max_length=20)
    last_name = serializers.CharField(max_length=20)
    phone = serializers.CharField(max_length=20)
    country = serializers.CharField(max_length=20, required=False)
    town = serializers.CharField(max_length=20, required=False)
    street = serializers.CharField(max_length=30, required=False)
    url = serializers.URLField(required=False)
    image = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = (
            "id",
            "first_name",
            "last_name",
            "phone",
            "country",
            "town",
            "street",
            "url",
            "image",
        )
