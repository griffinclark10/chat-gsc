import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";
import HeaderButtonMenu from "./HeaderButtonMenu";

const Header = (props: { onClick: MouseEventHandler<HTMLAnchorElement> | undefined; showing: boolean; isMobile: boolean; }) => {
    const path = usePathname();
    const [openBars, setOpenBars] = useState<boolean>(false);

    let pageTitle = null;
    switch (path) {
        case "/":
            pageTitle = "Home"
            break;
        case "/about":
            pageTitle = "About Me"
            break;
        case "/experience":
            pageTitle = "Experience"
            break;
        case "/projects":
            pageTitle = "Projects"
            break;
        default:
            pageTitle = "Home"
            break;
    }
    return (
        <header className={`flex bg-amber-200 text-yellow-700 flex-row transition-all duration-1000 ${props.showing ? " h-18 md:h-16 p-3 md:p-2" : "h-0 overflow-hidden"}`}>
            <span className="ml-5" data-state="closed">
                    <a className="flex p-3 gap-3 transition-colors duration-200 cursor-pointer rounded-md hover:bg-yellow-700 hover:text-amber-200 h-11 w-11 flex-shrink-0 items-center justify-center" onClick={props.onClick}>
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                    </a>
            </span>
            <div className="flex-grow"></div>
            <span className={`mt-3 text-lg font-semibold ${props.isMobile && openBars ? "hidden" : "animate-titleFadeIn"}`}>{
                pageTitle
            }</span>
            <div className="flex-grow"></div>
            <span className={`mr-5 flex flex-row gap-3 ${props.showing ? null : "hidden"}`} data-state="closed">
                <HeaderButtonMenu openBars={openBars}/>
                <a className="flex p-3 gap-3 transition-colors duration-200 cursor-pointer rounded-md hover:bg-yellow-700 hover:text-amber-200 h-11 w-11 flex-shrink-0 items-center justify-center" onClick={() => setOpenBars(!openBars)}>
                    <FontAwesomeIcon 
                        icon={faBars}
                        className={`absolute transition-all ${openBars ? 'animate-tableOpen' : 'animate-tableClose'}`}
                    />
                    <FontAwesomeIcon 
                        icon={faTimes}
                        className={`absolute transition-all ${openBars ? 'animate-tableClose' : 'animate-tableOpen'}`}
                    />
                </a>
            </span>
        </header>
    )
}

export default Header;