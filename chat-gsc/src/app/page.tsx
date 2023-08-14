'use client';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TextBox from "@/components/TextBox";
import { useCallback, useState } from "react";
import AboutMe from "../../pages/AboutMe";
import HomePage from "../../pages/HomePage";

export default function Home() {
  const [hideSidebar, setHideSidebar] = useState<boolean>(false);
  const toggleSidebar = useCallback(() => setHideSidebar(value => !value), []);
  return (
    <div className="flex h-screen w-screen">
      {<Sidebar hidden={hideSidebar} onClick={toggleSidebar}/> }
      <main className="flex flex-col w-full h-screen bg-gray-50">
        {<Header showing={hideSidebar} onClick={toggleSidebar} />  }
        {/* <HomePage /> */}
        <AboutMe />
      </main>
    </div>
  )
}
