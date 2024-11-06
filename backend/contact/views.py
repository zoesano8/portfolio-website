from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ContactSubmission

@api_view(['POST'])
def contact_view(request):
    # Assuming your request contains 'name', 'email', and 'message' in JSON format
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    #save the submission to a database so I can view later
    submission = ContactSubmission(name=name, email=email, message=message)
    submission.save()

    # Return a success response
    return Response({"message": "Message sent successfully!"}, status=status.HTTP_200_OK)
