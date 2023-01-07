# Generated by Django 4.1.5 on 2023-01-06 20:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('title', models.CharField(default='title', max_length=50)),
                ('text', models.TextField(default='0000-00-00')),
                ('date', models.DateField(default='2022-01-01')),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('document', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='dataControl.document')),
            ],
        ),
    ]
