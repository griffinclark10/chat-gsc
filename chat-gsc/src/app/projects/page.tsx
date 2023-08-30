"use client";
import Response from "@/components/Response";
import TextBox from "@/components/TextBox"
import Typewriter from "@/components/TypeWriter"
import React, { useState } from "react";
import Home from "../home/page";
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
        { tag: 'ds_images', text: '' },
        { tag: 'br', text: '' },

        { tag: 'h3', text: "QueueHop" },
        { tag: 'br', text: '' },
        { tag: 'em', text: "Lead App Developper / AI Engineer" },
        { tag: 'br', text: '' },
        { tag: 'qh_logos', text: '' },
        { tag: 'p', text: "Griffin collaborated with four engineering physics students on a significant endeavor, the 'Queue Hop' capstone project. Their objective was to address a pertinent issue on Queen's campus: estimating the prolonged wait times at the renowned engineering bar, known for its extensive queues." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "Taking a leadership role, Griffin was instrumental in the app development phase. He employed both Javascript and React Native to ensure a polished and efficient application design. Additionally, he harnessed the capabilities of the Google Sheets API for data transmission, ensuring real-time updates. Griffin's expertise also extended to assisting with the P2P-Net model in Python, designed meticulously to count individuals in line and provide accurate wait time estimates. Their collective efforts culminated in the project's success, as reflected by the exceptional A+ grade they received in their class." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "Images below include the bar search page, the bar info page and a shot illustrating the point based model's predictions" },
        { tag: 'br', text: ''},
        { tag: 'qh_images', text: '' },
        { tag: 'br', text: '' },

        { tag: 'h3', text: "Cooperative Perception for Autonomous Vehicles" },
        { tag: 'br', text: '' },
        { tag: 'em', text: "AI Research Student" },
        { tag: 'br', text: '' },
        { tag: 'thesis_logos', text: '' },
        { tag: 'p', text: "During my undergraduate tenure at Queen's University, I undertook a research thesis under the esteemed guidance of Dr. Zulkernine, in association with the BAMLAB. The central aim of this research was to augment existing knowledge in the domain of cooperative perception for autonomous vehicles. As it stands, autonomous vehicles necessitate a comprehensive understanding of their environment to uphold the highest standards of safety and operational efficacy. The proposed method to attain this comprehensive view was the assimilation of data from proximate vehicles." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "The research specifics centered around implementing intermediate feature fusion on the DAIR-V2X dataset. To realize this, I developed an extensive Python program, leveraging the pypcd and mmdet3d libraries, orchestrated within the CUDA software framework. All computational tasks were executed on a virtual Linux environment. The outcome was promising, as detailed in the accompanying paper, and was testament to the research's validity. This rigorous work culminated in an exemplary A grade during my defense." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "Images below include a sample of the DAIR-V2X dataset, and a sample of the final bounding box estimations of the CoAlign model." },
        { tag: 'br', text: ''},
        { tag: 'thesis_images', text: '' },
        { tag: 'br', text: '' },

        { tag: 'h3', text: "A-Tweet-A-Stock" },
        { tag: 'br', text: '' },
        { tag: 'em', text: "AI/ML Engineer" },
        { tag: 'br', text: '' },
        { tag: 'tweet_logos', text: '' },
        { tag: 'p', text: "During Griffin's engagement with QMIND, the AI club at Queen's University, he contributed significantly to a project named 'A-Tweet-a-stock'. The project's innovative objective was to discern whether it was feasible to predict both the trajectory and the percentage fluctuation of a notable stock, relying on the sentiment derived from tweets related to it. The spotlight for their study was Tesla, chosen due to its marked visibility on social media platforms." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "To amass the necessary data reservoir, Griffin adeptly utilized Python's Scrapy, extracting a vast repository of historical tweets that centered around Tesla. These tweets were then subjected to rigorous sentiment analysis using PyTorch, which assigned them a sentiment score on a continuum from 0 to 1. Harnessing this sentiment-graded dataset, Griffin and his team trained both KNN and RFF models, aiming to predict the likely directional shift (be it positive or negative) of the stock at market's opening bell. The results were striking; across 18 days of real-time evaluation, the models demonstrated an 82% accuracy rate. Griffin's meticulous efforts throughout the semester culminated in a presentation of their research at the esteemed Canadian Undergraduate Conference on AI." },
        { tag: 'br', text: ''},

        { tag: 'h3', text: "Helping Hand" },
        { tag: 'br', text: '' },
        { tag: 'em', text: "AI/ML Engineer" },
        { tag: 'br', text: '' },
        { tag: 'hh_logos', text: '' },
        { tag: 'p', text: "In another impressive endeavor with QMIND, Griffin delved into the realm of computer vision with the goal of detecting and translating letters in American Sign Language (ASL). For this project, he utilized the Sign Language MNIST database to train a model, meticulously crafted using Python's Keras and OpenCV, to process and interpret this dataset." },
        { tag: 'br', text: '' },
        { tag: 'p', text: "But Griffin didn't stop there. Demonstrating his versatility, he also designed a user interface employing HTML and CSS. This interface harnessed a computer's live feed, enabling it to translate ASL letters in real time. The culmination of Griffin's hard work was a highly efficient model boasting a 93% accuracy rate. Further testament to the project's excellence, the accompanying paper earned the accolade of 'Best Paper' at the Canadian Undergraduate Conference on AI, receiving commendation from esteemed professors and industry experts alike." },
        { tag: 'br', text: '' },

        { tag: 'h3', text: "Previous Portfolio" },
        { tag: 'br', text: '' },
        { tag: 'em', text: "Software Engineer" },
        { tag: 'br', text: '' },
        { tag: 'pp_logos', text: '' },
        { tag: 'p', text: "Griffin's previous portfolio was designed using React, HTML5, CSS, and Javascript. It was hosted on a github server, and was designed to be responsive on computers. This was a project to ameliorate Javascript and React skills through a cyberpunk inspired website." },
        { tag: 'br', text: '' },

        { tag: 'h3', text: "Current Portfolio" },
        { tag: 'br', text: '' },
        { tag: 'em', text: "Software Engineer" },
        { tag: 'br', text: '' },
        { tag: 'cp_logos', text: '' },
        { tag: 'p', text: "Griffin's current portfolio was designed using Next.js using Typescript, React and styled with Tailwind CSS. It is also hostel on github. I hope you have enjoyed it :)" },
        { tag: 'br', text: '' },
    ]
};
const Projects = () => {
    const [questionFinished, setQuestionFinished] = useState(false);
    const [questionPosted, setQuestionPosted] = useState(false);
    const [buttonEffect, setButtonEffect] = useState(false);

    // const scrollRef = React.useRef<null | HTMLDivElement>(null);
    // React.useEffect(() => {
    //     if (scrollRef.current) {
    //         scrollRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    //     }
    // }, [questionFinished, ]);
    return (
        <Home>
            <Response questionFinished={questionFinished} question={question} questionPosted={questionPosted} setQuestionPosted={setQuestionPosted}>
                <TypeWriterFormatted elementData={customAnswer} typeDelay={5} startDelay={5000} />
            </Response>
            <div className='flex-grow'></div>
            <TextBox allowQuestions={false} buttonEffect={buttonEffect} setButtonEffect={setButtonEffect}>
                <Typewriter text={question} typeDelay={20} startDelay={1000} setQuestionFinished={setQuestionFinished} setButtonEffect={setButtonEffect}/> 
            </TextBox>
        </Home>
    )
}

export default Projects