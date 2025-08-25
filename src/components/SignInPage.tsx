import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function SignInPage() {
  // Controls visibility of the authentication modal
  const [showAuthModal, setShowAuthModal] = useState(true);

  // Determines whether the modal is in sign-in or sign-up mode
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <Link to="/" className="text-3xl font-bold text-gray-900">
          SSRMS
        </Link>
        <p className="mt-4 text-gray-600">Redirecting to sign in...</p>
      </div>
      
      {/* Auth modal handles both sign in and sign up */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
}