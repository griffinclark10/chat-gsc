import Sidebar from "@/components/sidebar";
import TextBox from "@/components/textBox/textBox";

export default function Home() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <main className="flex flex-col w-full h-screen p-5 bg-gray-50">
        <div className='flex-grow'></div> {/* Placeholder div for space */}
        <div className="flex items-center justify-center">
          <div className="flex flex-row justify-between mb-4">
            <h1 className="text-4xl font-semibold text-gray-200 mr-2">ChatGSC</h1>
            <div className="bg-amber-200 p-1 rounded-md flex justify-center items-center">
              <p className="text-m font-semibold text-yellow-700">PORTFOLIO</p>
            </div>
          </div>
        </div>
        <div className='flex-grow'></div> 
        <TextBox />
      </main>
    </div>
    
  )
}
