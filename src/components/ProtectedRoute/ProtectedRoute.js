// create ProtectedRoute component
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom";
import { auth } from '../../config/firebase';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, loading] = useAuthState(auth);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user && loginOnly) {
    return <Navigate to="/login" />;
  }

  if (user && !loginOnly) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;