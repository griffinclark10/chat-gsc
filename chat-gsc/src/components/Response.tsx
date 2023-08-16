import { faG, faGhost } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react";
import Typewriter from "./TypeWriter"

/* NEED TO DO:
- Make sure the window scrolls with the text expanding
- Create timed appearance of these elements
- Make mouse animation
 */

const Response = ({ question, questionFinished, children, questionPosted, setQuestionPosted }:
    {
        question: string;
        questionFinished: boolean;
        children: JSX.Element;
        questionPosted: boolean;
        setQuestionPosted: (val: boolean) => void;
    }) => {
    // const [questionPosted, setQuestionPosted] = useState<Boolean>(false);
    useEffect(() => {
        if (questionFinished) {
            setTimeout(() => {
                setQuestionPosted(true);
            }, 1000)
        }
    })
    return (
        <div className="overflow-y-scroll text-neutral-600">
            <div className={`w-full border-b flex flex-row ${questionFinished ? null : "invisible"}`}>
                <div className="ml-16 mr-10 mt-10 mb-10">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ghost" className="svg-inline--fa fa-ghost p-3 pl-4 pr-4 rounded bg-orange-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M40.1 467.1l-11.2 9c-3.2 2.5-7.1 3.9-11.1 3.9C8 480 0 472 0 462.2V192C0 86 86 0 192 0S384 86 384 192V462.2c0 9.8-8 17.8-17.8 17.8c-4 0-7.9-1.4-11.1-3.9l-11.2-9c-13.4-10.7-32.8-9-44.1 3.9L269.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6l-26.6-30.5c-12.7-14.6-35.4-14.6-48.2 0L141.3 506c-3.3 3.8-8.2 6-13.3 6s-9.9-2.2-13.3-6L84.2 471c-11.3-12.9-30.7-14.6-44.1-3.9zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg>
                </div>
                <div className="mr-24 mt-10 mb-10 flex items-center">
                   {question}
                </div>
            </div>
            <div className={`w-full border-b flex flex-row bg-gray-100 ${questionPosted ? null : "invisible"}`}>
                <div className="ml-16 mr-10 mt-10 mb-10">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="g" className="svg-inline--fa fa-g p-3 pr-4 pl-4 bg-sky-300 rounded " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 96C135.6 96 64 167.6 64 256s71.6 160 160 160c77.4 0 142-55 156.8-128H256c-17.7 0-32-14.3-32-32s14.3-32 32-32H400c25.8 0 49.6 21.4 47.2 50.6C437.8 389.6 341.4 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57c13.2 11.8 14.3 32 2.5 45.2s-32 14.3-45.2 2.5C302.3 111.4 265 96 224 96z"></path></svg>
                </div>
                <div className="mr-24 mt-10 mb-10 flex flex-col items-center">
                    {children}
                </div>
            </div>
        </div>

    )
}

export default Response