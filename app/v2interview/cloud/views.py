from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Vm
from .serializers import VmSerializer

class VmViewSet(viewsets.ModelViewSet):
    queryset = Vm.objects.all()
    serializer_class = VmSerializer
