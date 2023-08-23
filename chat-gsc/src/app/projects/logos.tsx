import { faAws, faCss3, faHtml5, faLaravel, faPhp, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dealsourcing1 from './images/dealsourcing1.png';

export const dealsourcing_logos =
    <p className="inline"><FontAwesomeIcon icon={faPhp} color={'#AEB2D5'} /> &ensp; <FontAwesomeIcon icon={faPython} color={'#4B8BBE'} /> &ensp;  <FontAwesomeIcon icon={faLaravel} color={'#F05340'} /> &ensp; <FontAwesomeIcon icon={faHtml5} color={'#F16529'} /> &ensp; <FontAwesomeIcon icon={faCss3} color={'#E31B5F'} /> &ensp; <FontAwesomeIcon icon={faAws} color={'#FF9900'} /> &ensp;</p>
    
export const DealsourcingImages = () => (
        <>
            <img src="./images/dealsourcing1.png" className="inline" width="100%" height="100%" />
            <img src="./images/dealsourcing2.png" className="inline" width="100%" height="100%" />
        </>
);