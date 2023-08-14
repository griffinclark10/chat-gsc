import { faClipboard, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

const Header = (props: { onClick: MouseEventHandler<HTMLAnchorElement> | undefined; showing: boolean}) => {
    return (
        <header className={`flex bg-gray-100 flex-row transition-all duration-1000 ${props.showing ? " h-16 p-2" : "h-0 overflow-hidden"}`}>
            <span className="ml-5" data-state="closed">
                    <a className="flex p-3 gap-3 transition-colors duration-200 text-black cursor-pointer rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center" onClick={props.onClick}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                    </a>
            </span>
            <div className="flex-grow"></div>
            <span className="mt-3">TITLE</span>
            <div className="flex-grow"></div>
            <span className="mr-5" data-state="closed">
                    <a className="flex p-3 gap-3 transition-colors duration-200 text-black cursor-pointer rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                        <FontAwesomeIcon icon={faClipboard}/>
                    </a>
            </span>
        </header>
    )
}

export default Header;