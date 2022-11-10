import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useRef, useState } from 'react';
import { auth } from '../firebase.config';

const authContext = createContext({
  loggedIn: '',
  isLoading: '',
});

export const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
        setIsLoading(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return (
    <authContext.Provider value={{ loggedIn, isLoading }}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;
