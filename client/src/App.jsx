import React, { Suspense, lazy } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import './App.css';

// Lazy load components for code splitting
const Login = lazy(() => import('./components/Login.jsx'));
const ChatRoom = lazy(() => import('./components/ChatRoom.jsx'));

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Suspense fallback={<div className="loading">Loading component...</div>}>
      {user ? <ChatRoom /> : <Login />}
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;