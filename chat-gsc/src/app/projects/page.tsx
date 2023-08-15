"use client";
import Response from "@/components/Response";
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"
import Home from "../page"

const Projects = () => {
    const Q: string = "Show me some of the projects Griffin has worked on!";
    const A: string[] = ["projects!"];
    return (
        <Home>
            <Response question={Q}>
                <p>
                    <Typewriter text={A[0]} typeDelay={5} />
                </p>
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false}>
                <Typewriter text={"Show me some of the projects Griffin has worked on!"} typeDelay={20} startDelay={1000}/> 
            </TextBox>
        </Home>
    )
}

export default Projects