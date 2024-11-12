import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageContext = createContext();

function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation();

  useEffect(() => {
    
    const path = location.pathname;
    if (path === '/') {
      setCurrentPage('home');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/features') {
      setCurrentPage('features');
    } else {
      setCurrentPage('');
    }
  }, [location]);

  return (
    <PageContext.Provider value={{ currentPage }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageProvider;

export function usePageContext() {
  return useContext(PageContext);
}