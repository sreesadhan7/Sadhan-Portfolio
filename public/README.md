# Public Assets

This folder contains static assets that are publicly accessible in your Next.js application.

## Files

- `resume.pdf` - Sadhan's professional resume (accessible at `/resume.pdf`)

## Usage

Files in this folder are served directly by Next.js and can be accessed via:
- `http://localhost:3000/resume.pdf` (development)
- `https://yourdomain.com/resume.pdf` (production)

## Adding New Assets

To add new public assets:
1. Place files in this folder
2. Access them via `/{filename}` in your components
3. Files are automatically served by Next.js

## Note

The resume file is tracked in git and will be deployed with your application.
