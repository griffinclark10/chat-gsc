'use client';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useCallback, useRef, useState } from "react";

export default function Home({ children, }: { children: React.ReactNode }) {
  
  const [hideSidebar, setHideSidebar] = useState<boolean>(false);
  const toggleSidebar = useCallback(() => setHideSidebar(value => !value), []);

  return (
    <div className="flex h-screen w-full ">
      <Sidebar hidden={hideSidebar} onClick={toggleSidebar} />
      <main className="flex flex-col w-full h-screen bg-gray-50">
        <Header showing={hideSidebar} onClick={toggleSidebar} />
        {children}
      </main>
    </div>
  );
};