"use client";

import Response from "@/components/Response";
import TextBox from "@/components/TextBox";
import Typewriter from "@/components/TypeWriter";
import TypeWriterFormatted from "@/components/TypeWriterFormatted";
import { customAnswerElement } from "@/types";
import { useState } from "react";

const ClientAbout = ({ question, customAnswer }: {
    question: string,
    customAnswer: customAnswerElement,
}) => {
    const [questionFinished, setQuestionFinished] = useState<boolean>(false);
    const [questionPosted, setQuestionPosted] = useState<boolean>(false);
    const [buttonEffect, setButtonEffect] = useState<boolean>(false);
    
    return (
        <>
            <Response questionFinished={questionFinished} question={question} questionPosted={questionPosted} setQuestionPosted={setQuestionPosted}>
                <TypeWriterFormatted elementData={customAnswer} typeDelay={5} startDelay={5000} scrollTimeout={21000} />
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false} buttonEffect={buttonEffect} setButtonEffect={setButtonEffect}>
                <Typewriter text={question} typeDelay={20} startDelay={1000} setQuestionFinished={setQuestionFinished} setButtonEffect={setButtonEffect}/> 
            </TextBox>
        </>
    )
};

export default ClientAbout;