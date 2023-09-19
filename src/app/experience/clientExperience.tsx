"use client";

import Response from "@/components/Response";
import TextBox from "@/components/TextBox";
import Typewriter from "@/components/TypeWriter";
import TypeWriterFormatted from "@/components/TypeWriterFormatted";
import { customAnswerElement } from "@/types";
import { useState } from "react";

const ClientExperience = ({ question, answer } : {
    question: string;
    answer: customAnswerElement;
}) => {
    const [questionFinished, setQuestionFinished] = useState(false);
    const [questionPosted, setQuestionPosted] = useState(false);
    const [buttonEffect, setButtonEffect] = useState(false);

    return (
        <>
            <Response questionFinished={questionFinished} questionPosted={questionPosted}
                setQuestionPosted={setQuestionPosted} question={question}>
                <TypeWriterFormatted elementData={answer} typeDelay={5} startDelay={5000} scrollTimeout={21000} />
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false} buttonEffect={buttonEffect} setButtonEffect={setButtonEffect}>
                <Typewriter text={question} typeDelay={20} startDelay={1000} setButtonEffect={setButtonEffect} setQuestionFinished={setQuestionFinished} />
            </TextBox>
        </>
    )
}

export default ClientExperience;