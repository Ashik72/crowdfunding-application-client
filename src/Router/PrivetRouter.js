import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const PrivetRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext)
  if (user) {
    return children
  }
  if (loading) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRouter;