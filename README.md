# SSRMS | Spaza Shop Regulatory & Management System

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E.svg)](https://supabase.com/)

## 🏪 Overview

The **Spaza Shop Regulatory & Management System (SSRMS)** is a comprehensive digital platform designed to streamline the registration, verification, and compliance monitoring of spaza shops across South Africa. The system empowers local entrepreneurs while ensuring quality standards and regulatory compliance for customer protection.

### 🎯 Mission

To create a fair, transparent, and efficient ecosystem for spaza shop operations that:
- Supports local entrepreneurship
- Ensures food safety and quality standards
- Builds trust between shop owners and customers
- Facilitates government oversight and compliance monitoring

## ✨ Features

### 👥 Multi-Role System

#### 🛒 **Customer Features**
- Browse and search verified spaza shops
- View shop profiles with compliance ratings
- Leave reviews and ratings
- Report safety concerns
- Find nearby shops with map integration
- Track favorite shops

#### 🏪 **Shop Owner Features**
- Digital shop registration and profile management
- Document upload and compliance tracking
- Business performance analytics
- Customer feedback management
- Inspection scheduling and history
- Compliance score monitoring

#### 🏛️ **Government Official Features**
- Review and approve shop applications
- Schedule and manage inspections
- Monitor compliance across jurisdictions
- Generate regulatory reports
- Issue warnings and notifications
- Track regional statistics

### 🔧 Technical Features

- **Real-time Database**: Powered by Supabase for live data synchronization
- **Secure Authentication**: Row-level security (RLS) and role-based access control
- **Cloud Storage**: Document and image management
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Clean, intuitive interface with Lucide React icons
- **Edge Functions**: Server-side logic for notifications and compliance calculations
- **Real-time Updates**: Live compliance monitoring and notifications
- **Scalable Architecture**: Modular component structure

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tshimangadzo3v5/The-Genesis.git
   cd The-Genesis
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   The project uses Supabase for backend services. Environment variables are automatically configured:
   - `VITE_SUPABASE_URL` - Backend API endpoint
   - `VITE_SUPABASE_PUBLISHABLE_KEY` - Public API key
   - `VITE_SUPABASE_PROJECT_ID` - Project identifier

4. **Configure Build Scripts**
   
   Add the following script to your `package.json`:
   ```json
   "scripts": {
     "build:dev": "vite build --mode development"
   }
   ```

5. **Configure Vite Server**
   
   Ensure `vite.config.ts` includes:
   ```typescript
   server: {
     port: 8080
   }
   ```

6. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:8080`

## 🔐 Getting Started

1. **Sign Up**: Create an account by selecting your role (Customer, Shop Owner, or Government Official)
2. **Verify Email**: Confirmation is automatic in development mode
3. **Complete Profile**: Add your information and required documents
4. **Start Using**: Access role-specific features immediately

## 🏗️ Project Structure

```
src/
├── components/                          # React components
│   ├── AuthModal.tsx                    # Authentication modal with role-based signup
│   ├── LandingPage.tsx                  # Homepage with navigation and footer
│   ├── SignInPage.tsx                   # Dedicated sign-in page
│   ├── CustomerDashboard.tsx            # Customer role dashboard
│   ├── ShopOwnerDashboard.tsx           # Shop owner role dashboard
│   ├── GovernmentDashboard.tsx          # Government official dashboard
│   ├── ShopProfile.tsx                  # Shop profile and details page
│   ├── RegisterModal.tsx                # Registration modal component
│   ├── ProfileManagement.tsx            # User profile management
│   └── NotificationDropdown.tsx         # Real-time notifications
├── pages/                               # Static and informational pages
│   ├── AboutPage.tsx                    # About SSRMS page
│   ├── FeaturesPage.tsx                 # Platform features overview
│   ├── SupportPage.tsx                  # Help and support center
│   ├── ContactPage.tsx                  # Contact information and form
│   ├── FeedbackPage.tsx                 # User feedback and suggestions
│   ├── PrivacyPolicyPage.tsx            # POPIA-compliant privacy policy
│   ├── TermsOfServicePage.tsx           # Terms of service
│   ├── CompliancePage.tsx               # Compliance standards and process
│   ├── ShopManagementPage.tsx           # Shop management interface
│   └── InspectionManagementPage.tsx     # Inspection scheduling and tracking
├── contexts/                            # React contexts
│   └── AuthContext.tsx                  # Authentication context with Supabase
├── hooks/                               # Custom React hooks
│   ├── useAuth.ts                       # Authentication hook
│   ├── useShops.ts                      # Shop data management
│   ├── useDocuments.ts                  # Document management
│   ├── useInspections.ts                # Inspection tracking
│   └── useNotifications.ts              # Real-time notifications
├── integrations/
│   └── supabase/
│       ├── client.ts                    # Supabase client configuration
│       └── types.ts                     # Auto-generated database types
├── utils/                               # Utility functions
│   ├── inputValidation.ts               # Input validation helpers
│   └── passwordValidation.ts            # Password strength validation
├── App.tsx                              # Main application with routing
├── main.tsx                             # Application entry point
└── index.css                            # Global Tailwind CSS styles

supabase/
├── functions/                           # Edge functions
│   ├── send-notification/               # Notification service
│   └── calculate-compliance/            # Compliance scoring
└── migrations/                          # Database migrations
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 8080) |
| `npm run build` | Build for production |
| `npm run build:dev` | Build for development |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Technology Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Lucide React** - Icon library

### Backend
- **Supabase** - Backend-as-a-Service platform
  - PostgreSQL database with real-time subscriptions
  - Row-level security (RLS) policies
  - Authentication and user management
  - Cloud storage for documents and images
  - Edge functions for server-side logic

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🗄️ Database Schema

The system uses a PostgreSQL database with the following main tables:

- **profiles** - User profiles with role-based data
- **shops** - Spaza shop information and compliance status
- **documents** - Shop documents and certificates
- **inspections** - Government inspection records
- **reviews** - Customer reviews and ratings
- **notifications** - Real-time user notifications
- **activities** - System activity logs
- **favorites** - Customer favorite shops
- **bank_details** - Shop payment information

All tables are protected by Row-Level Security (RLS) policies ensuring users can only access their own data or publicly available information.

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Environment Variables

When deploying, ensure these environment variables are set:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Your Supabase anon/public key
- `VITE_SUPABASE_PROJECT_ID` - Your Supabase project ID

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- [x] Core UI components
- [x] Authentication system
- [x] Role-based dashboards
- [x] Responsive design

### Phase 2: Backend Integration ✅
- [x] Supabase database setup
- [x] User registration and authentication
- [x] Shop data management
- [x] Document upload system
- [x] Row-level security policies
- [x] Real-time subscriptions

### Phase 3: Advanced Features 🚧
- [x] Real-time notifications
- [ ] Map integration with geolocation
- [ ] Payment processing
- [ ] Advanced analytics
- [ ] SMS notifications
- [ ] Email notifications

### Phase 4: Mobile & PWA 📋
- [ ] Progressive Web App features
- [ ] Mobile app development
- [ ] Offline functionality
- [ ] Push notifications
- [ ] Biometric authentication

## 📊 System Requirements

### Minimum Requirements
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+)
- Internet connection for real-time features
- JavaScript enabled

### Recommended
- High-speed internet connection
- Desktop/laptop for government officials
- Mobile device for customers and shop owners

## 🔒 Security

- **Row-Level Security (RLS)**: Database-level access control
- **Role-based access control**: Multi-tier permission system
- **Secure authentication flow**: Email verification and password requirements
- **Input validation**: Client and server-side validation
- **HTTPS enforcement**: SSL/TLS encryption in production
- **Regular security audits**: Automated vulnerability scanning
- **Data encryption**: At-rest and in-transit encryption
- **SQL injection protection**: Parameterized queries only

## 🐛 Known Issues & Limitations

## 📞 Support

For issues, questions, or contributions:

- **GitHub Issues**: [Report bugs or request features](https://github.com/Tshimangadzo3v5/The-Genesis/issues)
- **Email**: support@ssrms.co.za
- **Documentation**: [Full documentation](https://docs.ssrms.co.za)

## 🙏 Acknowledgments

- South African spaza shop community for inspiration
- Government partners for regulatory guidance
- Beta testers and early adopters
- Supabase team for excellent backend infrastructure

---

<div align="center">

**Built with ❤️ for South African communities**

[Website](https://ssrms.co.za) • [Documentation](https://docs.ssrms.co.za) • [Support](mailto:support@ssrms.co.za)

</div>
