"use client";
import Response from "@/components/Response";
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"
import TypeWriterJSX from "@/components/TypeWriterJSX";
import { customAnswerElement } from "@/types";
import { type } from "os";
import { useState } from "react";
import Home from "../page"

const question = "Tell me about some of Griffin's relevant experience!";
const answer = `
Of course! Here is a list of Griffin's relevant professional experience.
\n
\n
**Dealsourcing - Full Stack Engineer**
*Mar 2022 - May 2023, Vancouver, BC*
* Spearheaded the technical transformation for a SaaS Startup, enhancing website efficiency by rewriting the backend using PHP, Python, and Laravel, and updating the front-end using HTML, CSS, AJAX, and jQuery.
* Engineered a Python-based data scraper to consolidate information, and designed an AWS RDS infrastructure for storage, enhancing data capture efficiency
* Implemented agile development techniques to effectively manage and coordinate multiple streams of work within the teams, ensuring timely and consistent progress towards project goals.
* Developed and implemented REST APIs, enhancing website functionality and user interaction, optimized HTTP request handling, increasing server response time by 95%.

**Alacrity Canada - Software Engineer Intern**\n
*Jan 2022 - May 2023, Victoria, BC*
- Regularly provided the board with weekly progress updates, exemplifying a strong commitment to meeting deadlines
- Acted as the primary technical consultant for a mid-size firm, addressing domain complications and bug resolutions, while executing web page redesigns utilizing Wordpress, Hubspot, and Namecheap.
`;

// const answers = ["Of course! Here is a list of Griffin's relevant professional experience.", ""]

const customAnswer: customAnswerElement = {
        text: "Of course! Here is a list of Griffin's relevant professional experience.Dealsourcing - Full Stack Engineer",
        segments: [
            { tag: 'p', text: "Of course! Here is a list of Griffin's relevant professional experience." },
            { tag: 'br' },
            { tag: 'br' },
            { tag: 'h3', text: "Dealsourcing - Full Stack Engineer" }
        ]
    }

const Experience = () => {

    const [questionFinished, setQuestionFinished] = useState(false);
    const [questionPosted, setQuestionPosted] = useState(false);
    const [buttonEffect, setButtonEffect] = useState(false);
    const [activeTypewriterIndex, setActiveTypewriterIndex] = useState(0);

    

    // console.log("Active Typewriter Index: " + activeTypewriterIndex);
    const handleTypingComplete = () => {
        setActiveTypewriterIndex(prev => prev + 1);
    }

    return (
        <Home>
            <Response questionFinished={questionFinished} questionPosted={questionPosted}
                setQuestionPosted={setQuestionPosted} question={question}>
                <TypeWriterJSX elementData={customAnswer} typeDelay={5} startDelay={5000}/>
                {/* <p>
                    <Typewriter text={answers} typeDelay={5} startDelay={5000} onComplete={handleTypingComplete}/>
                    <br /><br />
                    {answers.slice(1, activeTypewriterIndex + 1).map((text, index) => (
                        <>
                            <Typewriter 
                            key={index}
                            text={text} 
                            typeDelay={5} 
                            onComplete={handleTypingComplete} 
                            />
                            <br />  
                        </>
                    ))}
                    <br />
                    {answers.slice(7, activeTypewriterIndex + 1).map((text, index) => (
                        <>
                            <Typewriter 
                            key={index}
                            text={text} 
                            typeDelay={5} 
                            onComplete={handleTypingComplete} 
                            />
                            <br />  
                        </>
                    ))}
                </p> */}
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false} buttonEffect={buttonEffect} setButtonEffect={setButtonEffect}>
                <Typewriter text={question} typeDelay={20} startDelay={1000} setButtonEffect={setButtonEffect} setQuestionFinished={setQuestionFinished}/> 
            </TextBox>
        </Home>
    )
}

export default Experience