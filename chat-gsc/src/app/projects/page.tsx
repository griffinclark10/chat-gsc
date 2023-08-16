"use client";
import Response from "@/components/Response";
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"
import { useState } from "react";
import Home from "../page"

const Projects = () => {
    const [questionFinished, setQuestionFinished] = useState<boolean>(false);
    const [questionPosted, setQuestionPosted] = useState<boolean>(false);
    const [buttonEffect, setButtonEffect] = useState<boolean>(false);

    const Q: string = "Show me some of the projects Griffin has worked on!";
    const A: string[] = ["Religious prejudice in the play is presented through biased beliefs about the morals and values held by the Jews. It is clear that Christians view Jewish morals and values as compromised, particularly when it comes to lending of money. The Jews are considered shrewd, mean, and heartless. This view is evident when Antonio says to Bassanio “I pray you, think you question with the Jew? ...You may as well do anything most hard, as seek to soften that-than which what’s harder? - his Jewish heart.” This illustrates of how lowly Christians thought of the Jewish morals and values were. In the quest to challenge and change these morals and values, Christian characters in the play conspire to expose Shylock with the intention of forcing him to convert to Christianity.  In this, religious biases on conventional moral and values causes major conflicts and co-existence problems."];
    return (
        <Home>
            <Response questionFinished={questionFinished} question={Q} questionPosted={questionPosted} setQuestionPosted={setQuestionPosted}>
                <p>
                    <Typewriter text={A[0]} typeDelay={5} startDelay={5000} />
                </p>
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false} buttonEffect={buttonEffect} setButtonEffect={setButtonEffect}>
                <Typewriter text={Q} typeDelay={20} startDelay={1000} setQuestionFinished={setQuestionFinished} setButtonEffect={setButtonEffect}/> 
            </TextBox>
        </Home>
    )
}

export default Projects