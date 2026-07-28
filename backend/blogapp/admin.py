from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, Blog

admin.site.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    list_display = ("username", "email", "first_name", "last_name")


admin.site.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ("title", "is_draft", "category", "created_at")