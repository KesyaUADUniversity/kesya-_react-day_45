import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProductDetail from './pages/ProductDetail';
import FormPage from './pages/Form'; 
import Dashboard from './pages/Dashboard'; 
import AdminPanel from './pages/AdminPanel'; 
import ProtectedRoute from './components/ProtectedRoute';
import RoleBasedRoute from './components/RoleBasedRoute'; 

const App = () => {
  const [auth, setAuth] = useState({ isLoggedIn: false, role: null });

  // Simulasi restore login dari localStorage (opsional)
  useEffect(() => {
    const saved = localStorage.getItem('auth');
    if (saved) {
      setAuth(JSON.parse(saved));
    }
  }, []);

  const handleLogin = (email, password) => {
    let role = null;
    if (email === 'user@example.com' && password === '123456') {
      role = 'user';
    } else if (email === 'admin@example.com' && password === '123456') {
      role = 'admin';
    } else {
      throw new Error('Email atau password salah');
    }

    const newAuth = { isLoggedIn: true, role };
    setAuth(newAuth);
    localStorage.setItem('auth', JSON.stringify(newAuth));
  };

  const handleLogout = () => {
    setAuth({ isLoggedIn: false, role: null });
    localStorage.removeItem('auth');
  };

  return (
    <Router>
      <Navbar isLoggedIn={auth.isLoggedIn} role={auth.role} onLogout={handleLogout} />
      <Routes>
        {/* Halaman publik */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/form" element={<FormPage />} /> {/* ← Form handling */}

        {/* Protected route - semua user login */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={auth.isLoggedIn}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={auth.isLoggedIn}>
              <Dashboard role={auth.role} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />

        {/* Role-based route - hanya admin */}
        <Route
          path="/admin"
          element={
            <RoleBasedRoute 
              isLoggedIn={auth.isLoggedIn} 
              role={auth.role} 
              requiredRole="admin"
            >
              <AdminPanel onLogout={handleLogout} />
            </RoleBasedRoute>
          }
        />

        {/* Redirect jika akses root saat sudah login */}
        <Route
          path="/"
          element={auth.isLoggedIn ? <Navigate to="/dashboard" /> : <Home />}
        />
      </Routes>
    </Router>
  );
};

export default App;