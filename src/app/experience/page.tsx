import { customAnswerElement } from "@/types";
import RootLayout from "../layout";
import ClientExperience from "./clientExperience";

const question = "Tell me about some of Griffin's relevant experience!";
const customAnswer: customAnswerElement = {
        segments: [
            { tag: 'p', text: "Of course! Here is a list of Griffin's relevant professional experience." },
            { tag: 'br', text: ''},
            { tag: 'br', text: '' },
            { tag: 'h3', text: "Dealsourcing - Full Stack Engineer", href: "https://www.dealsourcing.co/" },
            { tag: 'br', text: ''},
            { tag: 'em', text: "Mar 2022 - May 2023, Vancouver, BC" },
            { tag: 'br', text: '' },
            { tag: 'p', text: "• Spearheaded the technical transformation for a SaaS Startup, enhancing website efficiency by rewriting the backend using PHP, Python, and Laravel, and updating the front-end using HTML, CSS, AJAX, and jQuery." },
            { tag: 'p', text: "• Engineered a Python-based data scraper to consolidate information, and designed an AWS RDS infrastructure for storage, enhancing data capture efficiency." },
            { tag: 'p', text: "• Implemented agile development techniques to effectively manage and coordinate multiple streams of work within the teams, ensuring timely and consistent progress towards project goals." },
            { tag: 'p', text: "• Developed and implemented REST APIs, enhancing website functionality and user interaction, optimized HTTP request handling, increasing server response time by 95%." },
            { tag: 'br', text: '' },
            { tag: 'br', text: '' },
            { tag: 'h3', text: "Alacrity Canada - Software Engineer Intern", href: "https://www.alacritycanada.com/" },
            { tag: 'br', text: '' },
            { tag: 'em', text: "Jan 2022 - May 2023, Victoria, BC" },
            { tag: 'br', text: '' },
            { tag: 'p', text: "• Streamlined the technical and asset acquisition process for a Startup, working with GitHub, Stripe, AWS, and Heroku." },
            { tag: 'p', text: "• Regularly provided the board with weekly progress updates, exemplifying a strong commitment to meeting deadlines." },
            { tag: 'p', text: "• Acted as the primary technical consultant for a mid-size firm, addressing domain complications and bug resolutions, while executing web page redesigns utilizing Wordpress, Hubspot, and Namecheap." },
            { tag: 'br', text: '' },
            { tag: 'br', text: '' },
            { tag: 'h3', text: "Queen's University - Engineering Teaching Assistant", href: "https://engineering.queensu.ca/"},
            { tag: 'br', text: '' },
            { tag: 'em', text: "Sept 2020 - Jan 2022, Kingston, ON" },
            { tag: 'br', text: '' },
            { tag: 'p', text: '• Improved assignment grades of 30+ students a week through a weekly three-hour virtual help session held for students.' },
            { tag: 'p', text: '• Facilitated the marking of 150+ weekly assignments, relaying marks to students within 2 days of submission.' },
            { tag: 'p', text: '• Resolved assignment and course material questions through personal Zoom problem solving meetings with students by request.' },
            { tag: 'br', text: '' },
            { tag: 'br', text: '' },
            { tag: 'h3', text: "McDonald Astroparticle Physics Instutute - Research & Outreach Intern", href: "https://www.mcdonaldinstitute.ca/" },
            { tag: 'br', text: '' },
            { tag: 'em', text: "May 2021 - Sept 2021, Kingston, ON" },
            { tag: 'br', text: '' },
            { tag: 'p', text: "• Advanced research in dark matter through the complex mathematical modelling of stellar and galactic formations with the use of the Queen’s supercomputer server." },
            { tag: 'p', text: "• Quickly adapted to unfamiliar hydrodynamic modelling software such as GIZMO, yt and DICE." },
            { tag: 'p', text: "• Leveraged python fluency to analyze data coming from the models, as well as teaching the language to high school students." },
            { tag: 'br', text: '' },
            { tag: 'br', text: '' },
            { tag: 'p', text: "Griffin has worked many other jobs & has been consistently working part time since his first job at McDonald's when he was 14. Other job include working at restuarants, a movie theatre & even as a bean to bar chocolate maker!"}
        ]
    }

const Experience = () => {
    return (
            <ClientExperience question={question} answer={customAnswer} />
    );
};

export default Experience;