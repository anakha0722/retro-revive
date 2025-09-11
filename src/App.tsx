import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import RestorePage from './pages/RestorePage';
import SavedPage from './pages/SavedPage';
import AboutPage from './pages/AboutPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

const AppContent: React.FC = () => {
  const { user } = useAuth();

  useEffect(() => {
    // Update document title
    document.title = user ? 'Retro Revive - AI Photo Restoration' : 'Retro Revive - Login';
  }, [user]);

  return (
    <div className="min-h-screen text-white">
      <AnimatedBackground />
      
      {user && <Navigation />}
      
      <Routes>
        <Route 
          path="/login" 
          element={!user ? <LoginPage /> : <Navigate to="/home" replace />} 
        />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/features" 
          element={
            <ProtectedRoute>
              <FeaturesPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/restore" 
          element={
            <ProtectedRoute>
              <RestorePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/saved" 
          element={
            <ProtectedRoute>
              <SavedPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/about" 
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/" 
          element={<Navigate to={user ? "/home" : "/login"} replace />} 
        />
        <Route 
          path="*" 
          element={<Navigate to={user ? "/home" : "/login"} replace />} 
        />
      </Routes>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(16px)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#00FFFF',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: 'white',
            },
          },
        }}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;