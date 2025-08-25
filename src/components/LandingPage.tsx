import React from 'react';
import { Store, Shield, Users } from 'lucide-react';
import AuthModal from './AuthModal';

export default function LandingPage() {
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<'signin' | 'signup'>('signin');
  const [defaultRole, setDefaultRole] = React.useState<'customer' | 'shop_owner' | 'government_official'>('customer');

  const handleSignInClick = () => {
    setAuthMode('signin');
    setShowAuthModal(true);
  };

  const handleRegisterClick = () => {
    setDefaultRole('customer');
    setAuthMode('signup');
    setShowAuthModal(true);
  };

  const handleRoleSpecificRegister = (role: 'customer' | 'shop_owner' | 'government_official') => {
    setDefaultRole(role);
    setAuthMode('signup');
    setShowAuthModal(true);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">SSRMS</div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleSignInClick}
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Sign In
            </button>
            <button
              onClick={handleRegisterClick}
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-100 py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-teal-200 rounded-full px-6 py-2 mb-8 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Trusted by 1,200+ Shops • 50+ Officials • 5,000+ Customers</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Fair and Transparent Spaza Shop Registration
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering local entrepreneurs while ensuring quality and compliance for all customers. 
            Our digital platform streamlines shop registration, verification, and compliance monitoring 
            across South Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={handleRegisterClick}
              className="group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center">
                Register Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 px-10 py-4 rounded-xl font-semibold transition-all duration-300 bg-white/80 backdrop-blur-sm hover:bg-white">
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-teal-600 mb-2">1,200+</div>
              <div className="text-gray-600 font-medium">Registered Shops</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Compliance Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-20 bg-gradient-to-b from-indigo-100 via-white to-teal-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Store className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Digital Registration</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined digital registration process for spaza shops with comprehensive 
                documentation and automated verification systems for local entrepreneurs.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Quality & Compliance</h3>
              <p className="text-gray-600 leading-relaxed">
                Prevents food safety violations through real-time compliance monitoring 
                and ensures all regulatory requirements are met for customer protection.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Customer Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Improves trust between shop owners and customers through transparent 
                feedback systems and comprehensive issue reporting mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Role */}
      <section className="relative bg-gradient-to-b from-teal-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
          <div className="absolute bottom-10 right-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Choose Your Role
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <Store className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Shop Owner</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Register your spaza shop, manage compliance documentation, track business 
                performance, and access government oversight support.
              </p>
              <button
                onClick={() => handleRoleSpecificRegister('shop_owner')}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register as Shop
              </button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Government Official</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Review shop applications, monitor compliance rates, manage inspections, 
                and ensure fair ownership distribution across your jurisdiction.
              </p>
              <button
                onClick={() => handleRoleSpecificRegister('government_official')}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register as Government
              </button>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <Users className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Customer</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Find verified spaza shops in your area, leave reviews, report safety issues, 
                and help improve community standards.
              </p>
              <button
                onClick={() => handleRoleSpecificRegister('customer')}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register as Customer
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-teal-900/20 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">SSRMS</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering local entrepreneurs while ensuring quality and compliance 
                for all customers in South African spaza shops.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-teal-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-teal-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-teal-400 transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-300 text-center">
            © 2025 SSRMS. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
        defaultRole={defaultRole}
      />
    </div>
  );
}