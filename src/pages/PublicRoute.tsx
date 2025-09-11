import { useAuth } from '@/hooks/useAuth';
import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
