from django.urls import include, path
from django.contrib import admin
from pocketbook import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/v1/', include(([
        path('', include(('pocketbook.urls', 'pocketbook'))),
    ], 'api'), namespace='api')),
]
