'use client';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useCallback, useRef, useState } from "react";

export default function Home({ children, }: { children: React.ReactNode }) {
  let isMobile = false;
  if(screen.width < 600){
    isMobile = true;
  }

  const [hideSidebar, setHideSidebar] = useState<boolean>(isMobile);
  const toggleSidebar = useCallback(() => setHideSidebar(value => !value), []);

  return (
    <div className={`flex h-screen w-full `}>
      <Sidebar hidden={hideSidebar} onClick={toggleSidebar} isMobile={isMobile} />
      <main className={`flex flex-col w-full h-screen bg-gray-50 ${!hideSidebar && isMobile ? "animate-hideSidebar" : null} ${hideSidebar && isMobile ? "animate-openMainSlowly" : null}`}>
        <Header showing={hideSidebar} onClick={toggleSidebar} isMobile={isMobile}/>
        {children}
      </main>
    </div>
  );
};