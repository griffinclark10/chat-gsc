'use client';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import TextBox from "@/components/TextBox";
import { useCallback, useState } from "react";

export default function Home() {
  const [hideSidebar, setHideSidebar] = useState<boolean>(false);
  const toggleSidebar = useCallback(() => setHideSidebar(value => !value), []);
  return (
    <div className="flex h-screen w-screen">
      {<Sidebar hidden={hideSidebar} onClick={toggleSidebar}/> }
      <main className="flex flex-col w-full h-screen bg-gray-50">
        {<Header showing={hideSidebar} onClick={toggleSidebar} />  }
        <div className='flex-grow'></div>
        <div className="flex items-center justify-center">
          <div className="flex flex-row justify-between mb-4">
            <h1 className="text-4xl font-semibold text-gray-200 mr-2">ChatGSC</h1>
            <div className="bg-amber-200 p-1 rounded-md flex justify-center items-center">
              <p className="text-m font-semibold text-yellow-700">PORTFOLIO</p>
            </div>
          </div>
        </div>
        <div className='flex-grow'></div> 
        <TextBox allowQuestions={false} sequenceArray={[2000, "What does Griffin do in his time off?", 1000,
          "What kind of computer languages does Griffin know? Give project examples with each.",
          1000,
          "What are some of Griffin's soft skills?",
          1000,
          "How many years of experience does Griffin have using TypeScript and React?",
          1000,
          "Where is Griffin's favourite vacation spot?",
          1000,
          "What does Griffin most value in a job?",
          1000,
          "What are some of Griffin's 10-year career goals?"]} />
      </main>
    </div>
  )
}
