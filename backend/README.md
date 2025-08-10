# Portfolio Backend - Simplified

This is a simplified Django backend that only provides a contact form API endpoint.

## What's Included

- ✅ **Contact Form API**: Simple endpoint to receive contact form submissions and send emails
- ✅ **CORS Support**: Configured to work with the Next.js frontend
- ✅ **Email Functionality**: Sends emails when someone contacts you through the portfolio

## What's Removed (Simplified)

- ❌ Complex database models
- ❌ Admin panels
- ❌ Authentication systems
- ❌ Blog functionality
- ❌ Complex serializers
- ❌ Celery tasks
- ❌ Redis dependencies

## Quick Start

1. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Set up environment variables** (create a `.env` file):
   ```env
   SECRET_KEY=your-secret-key-here
   DEBUG=True
   EMAIL_HOST_USER=your-email@gmail.com
   EMAIL_HOST_PASSWORD=your-app-password
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Start the server:**
   ```bash
   python manage.py runserver
   ```

5. **Test the contact API:**
   ```bash
   curl -X POST http://localhost:8000/api/contact/ \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","subject":"Hello","message":"Test message"}'
   ```

## API Endpoints

### POST `/api/contact/`
Sends a contact form submission via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Job Opportunity",
  "message": "I'd like to discuss a potential role..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I will get back to you soon."
}
```

## Email Configuration

For production, update the email settings in `settings.py`:

```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'  # or your email provider
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
```

**Note:** For Gmail, you'll need to use an "App Password" instead of your regular password.

## Frontend Integration

The frontend is configured to send requests to `http://localhost:8000/api/contact/`. Make sure both frontend and backend are running:

- **Frontend**: `npm run dev` (runs on port 3000)
- **Backend**: `python manage.py runserver` (runs on port 8000)

## Why This Simplified Approach?

1. **No Database Needed**: All portfolio data comes from your resume (hardcoded in frontend)
2. **Faster Development**: Focus on what matters - beautiful UI and working contact form
3. **Easier Maintenance**: Less code to maintain and debug
4. **Cost Effective**: No database hosting costs
5. **Simple Deployment**: Just deploy the frontend and a simple backend

When you want to update your portfolio, just modify the data files in the frontend and redeploy! 