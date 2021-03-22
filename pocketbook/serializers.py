from rest_framework import serializers

from pocketbook.models import User


class UserSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(max_length=20)
    last_name = serializers.CharField(max_length=20)
    phone = serializers.CharField(max_length=20)
    country = serializers.CharField(
        max_length=20, required=False, allow_null=True, allow_blank=True
    )
    town = serializers.CharField(
        max_length=20, required=False, allow_null=True, allow_blank=True
    )
    street = serializers.CharField(
        max_length=30, required=False, allow_null=True, allow_blank=True
    )
    url = serializers.URLField(required=False, allow_null=True, allow_blank=True)
    image = serializers.ImageField(required=False, allow_null=True, allow_empty_file=True)

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
