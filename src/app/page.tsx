import ClientHomeTA from '@/components/ClientHomeTA';

const HomePage = ({ }) => {
  const sequenceArray = [2000, "What does Griffin do in his time off?", 1000,
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
    "What are some of Griffin's 10-year career goals?"];
  return (
    <>
      <div className='flex-grow'></div>
      <div className="flex items-center justify-center">
        <div className="flex md:flex-row justify-between mb-4">
          <h1 className="text-4xl font-semibold text-gray-200 mr-2">ChatGSC</h1>
          <div className="bg-amber-200 p-1 rounded-md flex justify-center items-center">
            <p className="text-m font-semibold text-yellow-700">PORTFOLIO</p>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div> 
      <ClientHomeTA sequenceArray={sequenceArray}/>
    </>
          
    );
}

export default HomePage
