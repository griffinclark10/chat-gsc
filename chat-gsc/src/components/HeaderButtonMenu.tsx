import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeaderButtonMenu = ({ openBars, }: {
    openBars: boolean;
}) => {
    return (
        <div className={`flex flex-row gap-3`}>
            <a className={`flex p-3 gap-3 transition-colors duration-200 cursor-pointer rounded-md bg-yellow-700 text-amber-200 h-11 w-11 flex-shrink-0 items-center justify-center ${openBars ? "animate-buttonOpen2" : "animate-buttonClose2"}`} href={"#"}>
                <FontAwesomeIcon 
                    icon={faGithub}
                    className={`absolute transition-all `}
                />
            </a>
            <a className={`flex p-3 gap-3 transition-colors duration-200 cursor-pointer rounded-md bg-yellow-700 text-amber-200 h-11 w-11 flex-shrink-0 items-center justify-center ${openBars ? "animate-buttonOpen1" : "animate-buttonClose1"}`} href={"#"}>
                <FontAwesomeIcon 
                    icon={faLinkedin}
                    className={`absolute transition-all `}
                />
            </a>
            {/* <a className={`flex p-3 gap-3 transition-colors duration-200 cursor-pointer rounded-md bg-yellow-700 text-amber-200 h-11 w-11 flex-shrink-0 items-center justify-center ${openBars ? "animate-buttonOpen1" : "animate-buttonClose1"}`} href={"#"}>
                <FontAwesomeIcon 
                    icon={faEnvelope}
                    className={`absolute transition-all `}
                />
            </a>
            <a className={`flex p-3 gap-3 transition-colors duration-200 cursor-pointer rounded-md bg-yellow-700 text-amber-200 h-11 w-11 flex-shrink-0 items-center justify-center ${openBars ? "animate-buttonOpen1" : "animate-buttonClose1"}`} href={"#"}>
                <FontAwesomeIcon 
                    icon={faFilePdf}
                    className={`absolute transition-all `}
                />
            </a> */}
        </div>
    )   
}

export default HeaderButtonMenu;