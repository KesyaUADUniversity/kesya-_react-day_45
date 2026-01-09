import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ isLoggedIn, role, requiredRole, children }) => {
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (role !== requiredRole) return <Navigate to="/dashboard" replace />;
  return children;
};

export default RoleBasedRoute;