import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      
      setUser({ token }); 
    }
  }, []);

  const login = (userData, rememberMe) => {
    setUser(userData);
    if (rememberMe) {
      localStorage.setItem('token', userData.token); 
    } else {
      sessionStorage.setItem('token', userData.token); 
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
