import React, { useState, useEffect } from 'react';
import DesktopPage from './components/DesktopPage';
import MobilePage  from './components/MobilePage';

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return isMobile ? <MobilePage /> : <DesktopPage />;
}
