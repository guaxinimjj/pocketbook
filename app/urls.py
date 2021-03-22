from django.urls import include, path, re_path
from django.contrib import admin
from django.contrib.staticfiles import views as static_views

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "api/v1/",
        include(
            (
                [
                    path("", include(("pocketbook.urls", "pocketbook"))),
                ],
                "api",
            ),
            namespace="api",
        ),
    ),
    re_path(r"^frontend/(?P<path>.*)$", static_views.serve),
]
