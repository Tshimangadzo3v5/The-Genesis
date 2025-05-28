# System Architecture Overview

## Architectural Style
Layered Architecture

## Alternative Options Considered
- **Monolithic:** Simpler, but harder to scale.
- **Microservices:** Highly scalable but complex for our small team.

## Trade-offs
- Less scalable than microservices
- Easier to maintain, test, and deploy for our scope

## Potential Risks
- Risk of tight coupling if boundaries between layers aren't strictly followed
- Latency between layers without optimization

## Architecture Diagram
![A_UML_(Unified_Modeling_Language)_component_diagra](https://github.com/user-attachments/assets/ba410b2c-bf60-4d09-a682-ddd78d8d9632)

# System Decomposition

## Modules
- User Management
- Spaza Shop Registration
- Admin Approval
- Search & Filtering
- Messaging (WhatsApp)

## Layer Responsibilities

### Presentation Layer
- React.js Frontend
- Handles user interactions (business owners, admins, users)

### Business Logic Layer
- Django backend
- Manages logic for registration, verification, search, and messaging

### Data Layer
- PostgreSQL
- Stores user info, business listings, approvals, and logs

## Data Flow Diagram

![data flow diagram](https://github.com/user-attachments/assets/061a34fc-1f2e-4efc-9e35-f779b18e22a2)


# Technology Stack

## Backend
**Django (Python)** - Fast development, built-in admin and security features

## Frontend
**React.js** - Reusable UI components and responsive

## Database
**PostgreSQL** - Structured relational data and high performance

## Hosting
- **Frontend:** Vercel
- **Backend:** AWS EC2
- **Database:** AWS RDS

## Deployment Diagram
![web application](https://github.com/user-attachments/assets/bef19ddb-de0c-46d4-beb3-84c48b035f76)

## Deployment Model
The system uses a Cloud-Native Client-Server model.
# Environment
- Development: Local development using Docker
- Staging: Heroku
- Production: AWS

 # Components and Hosting Details:
- Frontend (React) hosted on Vercel
- Backend (Django) hosted on AWS 
- Database (PostgreSQL) hosted on AWS

 # Security Considerations:
- JWT authentication for secure API communication
- SSL encryption enabled
- AWS IAM roles and backups configured for high availability

  ## Deployment Model Diagram
  ![uml deployment](https://github.com/user-attachments/assets/b81fde92-7143-43de-84c9-a02864aa42f2)

  ## Communication between componets

 # Interactions:
- Frontend communicates with Backend via  HTTP API
- Backend communicates with Database via PostgreSQL queries
- Backend communicates with WhatsApp via HTTPS-based Cloud API

 # Protocols and Formats:
- HTTP/HTTPS for API calls
- JSON for data exchange
- SQL for relational queries
- JWT for authentication

 # Interfaces and Integrations:
- Django REST Framework APIs exposed to the frontend
- WhatsApp Business API for notifications and verification
- Admin dashboard for internal moderation and analytics



