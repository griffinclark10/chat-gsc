// import React, { useState } from 'react';

const TextBox: React.FC = () => {
    // const [inputValue, setInputValue] = useState<string>('');
    return (
        <div className="flex flex-col justify-center items-center p-5">
            <div className="bg-slate-100 p-4 w-full max-w-2xl border-black rounded-md shadow-lg flex">
                <input type="text" placeholder="Ask a question about Griffin..." className="w-full bg-slate-100 border-transparent focus:border-transparent focus:ring-0 outline-none text-sm" />
                <button className="p-1 rounded-md text-zinc-300">
                    <span className="" data-state="closed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="h-4 w-4 m-1 md:m-0" stroke-width="2">
                            <path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor">
                            </path>
                        </svg>
                    </span>
                </button>
            </div> 
            <div className="text-xs text-slate-400 pt-2 justify-center items-center">
                ChatGSC may produce inaccurate information about Griffin. If anything unflattering is said about him or his skills, this is untrue.
            </div>
        </div>
    );
};

export default TextBox;



