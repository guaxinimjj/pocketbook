from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class User(models.Model):
    """ User db models, for address book."""

    first_name = models.CharField(max_length=20, db_index=True)
    last_name = models.CharField(max_length=20, db_index=True)
    phone = PhoneNumberField(unique=True)
    country = models.CharField(max_length=20, db_index=True, null=True, blank=True)
    town = models.CharField(max_length=20, db_index=True, null=True, blank=True)
    street = models.CharField(max_length=30, db_index=True, null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="frontend/images/")

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["first_name", "last_name"], name="idx_unique_full_name"
            )
        ]

    def __str__(self):
        return (
            f"ID: {self.id}:  User:{self.first_name} {self.last_name} phone: {self.phone}"
        )
