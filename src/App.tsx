import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import LandingPage from './components/LandingPage';
import SignInPage from './components/SignInPage';
import ShopOwnerDashboard from './components/ShopOwnerDashboard';
import GovernmentDashboard from './components/GovernmentDashboard';
import CustomerDashboard from './components/CustomerDashboard';
import ShopProfile from './components/ShopProfile';

function AppRoutes() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {user.role === 'shop-owner' && (
        <>
          <Route path="/dashboard" element={<ShopOwnerDashboard />} />
          <Route path="/shop-profile" element={<ShopProfile />} />
        </>
      )}
      {user.role === 'government' && (
        <Route path="/dashboard" element={<GovernmentDashboard />} />
      )}
      {user.role === 'customer' && (
        <>
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/shop-profile" element={<ShopProfile />} />
        </>
      )}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;