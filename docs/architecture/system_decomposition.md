# Deployment Model

The SSRMS will be deployed as a modular, cloud-hosted application using containerized
services. The architecture follows a microservices-inspired pattern using free-tier or low-
cost cloud resources for scalability, security, and maintainability.

## Deployment Style

- Architecture: Modular deployment using containerized services
- Pattern: Microservices-inspired (service separation without excessive orchestration)
- Deployment Tools: Docker, CI/CD via GitHub Actions, Render/Supabase for hosting
- Environments: Development, Staging, Production

## Deployment Environment

- Cloud Hosting: Primarily Render.com, Supabase.io, and Firebase (all free-tier
    capable).
- Storage: Relational DB (Supabase), Object Storage (Supabase Storage or Firebase
    Storage).
- Authentication: Supabase Auth (email/password, OTP),
- Container Management: Docker-managed containers deployed to Render.

## Components & Hosting

|     Component                    	  |     Hosting   Platform                	|     Notes                                               	        |
|----------------------------------	  |---------------------------------------	|---------------------------------------------------------	|
|     Web   Frontend (Admin)        |     Render   (Static Site)            	|     React/Vite   or similar static frontend        |
|     Public App (Customers)       	  |     Firebase/Supabase Hosting       |     PWA or Capacitor Hybrid App                     |
|     Portal   (Shop Owners)       	  |     Render   (Static Site)            	|     Responsive   frontend, separate route       |
|     API Gateway / Backend API   |     Render (Docker App)               	|     Express.js or FastAPI microservices            |
|     Database   (Relational)      	 |     Supabase   DB                     	        |     Managed DB   (free tier)                            	|
|     File Storage                 	         |     Supabase Storage                  	|     For ID docs, shop images                            	|
|     Notification   Service       	 |     Mailgun   / Twilio                	        |     Free-tier   for transactional SMS/email      |

## Deployment Diagram

![Deployment Diagram](/diagrams/deployment_diagram.jpg)

## Security & Availability Considerations

- Authentication: JWT tokens issued via Supabase Auth.
- Access Controls: Role-based access for Admins, Owners, and Public.
- Secure Communications: All traffic over HTTPS.
- Database Backups: Automatic daily backups via Supabase.
- Failover & Redundancy: Basic covered by cloud provider (Render, Supabase).
- Firewalls: Inherent in managed hosting environments.