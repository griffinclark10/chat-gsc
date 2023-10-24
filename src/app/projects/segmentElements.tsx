import { faAws, faCss3, faGithub, faHtml5, faJs, faLaravel, faLinux, faNode, faPhp, faPython, faReact, faTwitter, faUbuntu } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import dealsourcing1 from './images/dealsourcing1.png';
import dealsourcing2 from './images/dealsourcing2.png';
import queuehop1 from './images/queuehop1.png';
import queuehop2 from './images/queuehop2.png';
import queuehop3 from './images/queuehop3.png';
import thesis1 from './images/thesis1.png';
import thesis2 from './images/thesis2.png';

export const dealsourcing_logos =
    <p className="inline"><FontAwesomeIcon icon={faPhp} color={'#AEB2D5'} /> &ensp; <FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp;  <FontAwesomeIcon icon={faLaravel} color={'#F05340'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> &ensp; <FontAwesomeIcon icon={faAws} color={'#FF9900'} /> &ensp;</p>
    
export const DealsourcingImages = () => (
    <div className="inline-flex">
        <Image src={dealsourcing1} className="w-5/12 shadow-md rounded-sm" alt="dealsourcing1" />
        <div className="flex-grow"></div>
        <Image src={dealsourcing2} className="w-5/12 shadow-md rounded-sm" alt="dealsourcing2" />
        <div className="flex-grow"></div>
    </div>
);

export const qh_logos = <p className="inline"><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp; <FontAwesomeIcon icon={faJs} color={'#F0DB4Fw'} /> &ensp;  <FontAwesomeIcon icon={faReact} color={'#61DBFB'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> </p>

export const QHImages = () => (
    <div className="inline-flex">
        <Image src={queuehop1} className="w-1/5 shadow-md rounded-sm" alt="queuehop1" />
        <div className="flex-grow"></div>
        <Image src={queuehop2} className="w-1/5 shadow-md rounded-sm" alt="queuehop2" />
        <div className="flex-grow"></div>
        <Image src={queuehop3} className="w-1/2 shadow-md rounded-sm" alt="queuehop3" />
    </div>
);

export const thesis_logos = <p className="inline">
    <FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp; <FontAwesomeIcon icon={faUbuntu} color={'#E95420'} /> &ensp;  <FontAwesomeIcon icon={faLinux} color={'black'} /> &ensp;
</p>

export const ThesisImages = () => (
    <div className="inline-flex">
        <Image src={thesis1} className="w-5/12 shadow-md rounded-sm" alt="thesis1" />
        <div className="flex-grow"></div>
        <Image src={thesis2} className="w-5/12 shadow-md rounded-sm" alt="thesis2" />
        <div className="flex-grow"></div>
    </div>
);

export const tweet_logos = <p className="inline"><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} />&ensp; <FontAwesomeIcon icon={faTwitter} color={'#1DA1F2'} />&ensp;</p>

export const hh_logos = <p className="inline"><FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> </p>

export const pp_logos = <p> <FontAwesomeIcon icon={faJs} color={'#F0DB4Fw'} /> &ensp;  <FontAwesomeIcon icon={faReact} color={'#61DBFB'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> </p>

export const cp_logos = <p className="inline"><FontAwesomeIcon icon={faNode} color={'#3C87CA'} /> &ensp; <FontAwesomeIcon icon={faReact} color={'#61DBFB'} /> &ensp;  <FontAwesomeIcon icon={faJs} color={'#F0DB4Fw'} /> &ensp;</p>

export const lb_logos = <p className="inline"> <FontAwesomeIcon icon={faNode} color={'#3C87CA'} /> &ensp; <FontAwesomeIcon icon={faJs} color={'#F0DB4Fw'} /> &ensp; <FontAwesomeIcon icon={faReact} color={'#61DBFB'} /> &ensp; </p>