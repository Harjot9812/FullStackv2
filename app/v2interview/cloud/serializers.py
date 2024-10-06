from rest_framework import serializers
from .models import Vm

class VmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vm
        fields = '__all__'
