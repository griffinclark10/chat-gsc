"use client";
import Response from "@/components/Response";
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"
import Home from "../page"

const Experience = () => {
    const Q: string = "Tell me about some of Griffin's relevant experience!";
    const A: string[] = ["Experience"];
    return (
        <Home>
            <Response question={Q}>
                <p>
                    <Typewriter text={A[0]} typeDelay={5} />
                </p>
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false}>
                <Typewriter text={"Tell me about some of Griffin's relevant experience!"} typeDelay={20} startDelay={1000}/> 
            </TextBox>
        </Home>
    )
}

export default Experience