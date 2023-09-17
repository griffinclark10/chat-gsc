import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeaderButton from "./HeaderButton";

const HeaderButtonMenu = ({ openBars,}: {
    openBars: boolean;
}) => {
    return (
        <div className={`flex flex-row gap-3 absolute right-24 md:right-20`}>
            <HeaderButton icon={faGithub} openBars={openBars}  animations={["animate-buttonOpen4", "animate-buttonClose4"]}/>
            <HeaderButton icon={faLinkedin} openBars={openBars}  animations={["animate-buttonOpen3", "animate-buttonClose3"]} />
            <HeaderButton icon={faFilePdf} openBars={openBars}  animations={["animate-buttonOpen2", "animate-buttonClose2"]} />
            <HeaderButton icon={faEnvelope} openBars={openBars}  animations={["animate-buttonOpen1", "animate-buttonClose1"]} />
        </div>
    )   
}

export default HeaderButtonMenu;