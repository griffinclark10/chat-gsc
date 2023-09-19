'use client';
import { useState, useCallback, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";


export default function ClientWrapper({ children }: {
    children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);


  const [hideSidebar, setHideSidebar] = useState<boolean>(isMobile);
  const toggleSidebar = useCallback(() => setHideSidebar(value => !value), []);

  return (
    <div className="flex flex-row">
      <Sidebar hidden={hideSidebar} onClick={toggleSidebar} isMobile={isMobile} toggle={toggleSidebar} />
      <div className={`flex flex-col w-full h-screen bg-gray-50 ${!hideSidebar && isMobile ? "animate-hideSidebar" : null} ${hideSidebar && isMobile ? "animate-openMainSlowly" : null}`}>
        <Header showing={hideSidebar} onClick={toggleSidebar} isMobile={isMobile}/>
        {children}
      </div>
    </div>
  );
}
