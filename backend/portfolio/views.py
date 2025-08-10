from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.mail import send_mail
from django.conf import settings
import json
import logging

logger = logging.getLogger(__name__)

@csrf_exempt
@require_http_methods(["POST"])
def contact_form(request):
    """
    Simple contact form API endpoint
    Receives form data and sends an email
    """
    try:
        # Parse JSON data
        data = json.loads(request.body)
        
        # Extract form fields
        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()
        
        # Basic validation
        if not all([name, email, subject, message]):
            return JsonResponse({
                'success': False,
                'error': 'All fields are required'
            }, status=400)
        
        # Email validation (basic)
        if '@' not in email or '.' not in email:
            return JsonResponse({
                'success': False,
                'error': 'Please enter a valid email address'
            }, status=400)
        
        # Prepare email content
        email_subject = f"Portfolio Contact: {subject}"
        email_body = f"""
New message from your portfolio website:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}

---
This message was sent from your portfolio contact form.
        """.strip()
        
        # Send email
        try:
            send_mail(
                subject=email_subject,
                message=email_body,
                from_email=settings.EMAIL_HOST_USER or 'noreply@portfolio.com',
                recipient_list=[settings.EMAIL_HOST_USER or 'your-email@example.com'],
                fail_silently=False,
            )
            
            logger.info(f"Contact form submitted successfully from {email}")
            
            return JsonResponse({
                'success': True,
                'message': 'Thank you for your message! I will get back to you soon.'
            })
            
        except Exception as e:
            logger.error(f"Failed to send email: {str(e)}")
            return JsonResponse({
                'success': False,
                'error': 'Failed to send message. Please try again later.'
            }, status=500)
            
    except json.JSONDecodeError:
        return JsonResponse({
            'success': False,
            'error': 'Invalid JSON data'
        }, status=400)
        
    except Exception as e:
        logger.error(f"Unexpected error in contact form: {str(e)}")
        return JsonResponse({
            'success': False,
            'error': 'An unexpected error occurred. Please try again.'
        }, status=500) 