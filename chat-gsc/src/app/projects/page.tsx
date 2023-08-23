"use client";
import Response from "@/components/Response";
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"
import { useState } from "react";
import Home from "../page"
import TypeWriterFormatted from "@/components/TypeWriterFormatted";
import { customAnswerElement } from "@/types";

const question: string = "Show me some of the projects Griffin has worked on!";
const customAnswer: customAnswerElement = {
    text: "Of course! Here is a list of Griffin's relevant projects.",
    segments: [
        { tag: 'p', text: "Of course! Here is a list of Griffin's relevant projects." },
        { tag: 'br', text: '' },
        { tag: 'h3', text: "Dealsourcing" },
        { tag: 'br', text: '' },
        { tag: 'em', text: "Lead Engineer (Full Stack)" },
        { tag: 'br', text: '' },
        { tag: 'ds_logos', text: '' },
        { tag: 'p', text: "Amongst his many significant contributions to Dealsourcing, Griffin developed a sophisticated pricing and ROI estimation algorithm. This algorithm, underscored by its use of millions of datapoints, was meticulously crafted using advanced tools such as Python's Tensorflow and Open-NN." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "Furthermore, Griffin was instrumental in designing a front-end application dedicated to enhancing both customer service and marketing efforts. This application was constructed using an amalgamation of technologies, including PHP, Blade, HTML5, CSS, AJAX, and jQuery." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "On the backend, Mr. Clark showcased his proficiency with Laravel, creating efficient data pipelines to bolster the platform's functionality. For deployment purposes, he adeptly utilized Heroku. When considering data storage solutions, AWS RDS was his chosen platform, while MYSQL stood as the primary choice for database management." },
        { tag: 'br', text: '' },
    ]
};
const Projects = () => {
    const [questionFinished, setQuestionFinished] = useState(false);
    const [questionPosted, setQuestionPosted] = useState(false);
    const [buttonEffect, setButtonEffect] = useState(false);

    return (
        <Home>
            <Response questionFinished={questionFinished} question={question} questionPosted={questionPosted} setQuestionPosted={setQuestionPosted}>
                <TypeWriterFormatted elementData={customAnswer} typeDelay={5} startDelay={5000}/>
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false} buttonEffect={buttonEffect} setButtonEffect={setButtonEffect}>
                <Typewriter text={question} typeDelay={20} startDelay={1000} setQuestionFinished={setQuestionFinished} setButtonEffect={setButtonEffect}/> 
            </TextBox>
        </Home>
    )
}

export default Projects