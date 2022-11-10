import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Spinner from './Spinner';
import authContext from '../context/authContext';
// import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const { loggedIn, isLoading } = useContext(authContext);
  // const { loggedIn, checkingStatus } = useAuth();

  if (isLoading) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
