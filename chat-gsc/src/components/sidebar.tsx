import SidebarElement from "./SidebarElement";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";

const Sidebar = (props: { onClick: MouseEventHandler<HTMLAnchorElement>; hidden: boolean }) => {
    return (
        <div className={`flex flex-col ${props.hidden ? 'w-0' : 'w-[300px] px-3 py-4'} h-screen overflow-y-auto bg-teal-900 dark:bg-gray-800 transition-all duration-1000`}>
            <div className="mb-1 flex flex-row gap-2">
                <a className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>New chat</a>
                <span className="" data-state="closed">
                    <a className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center" onClick={props.onClick}>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="9" y1="3" x2="9" y2="21"></line>
                        </svg>
                    </a>
                </span>
            </div>
            <div className="sticky top-0 z-[16]">
                <h3 className="h-9 pb-2 pt-3 px-3 text-xs text-gray-500 font-medium text-ellipsis overflow-hidden break-all">Pages</h3>
            </div>
            <ul className="space-y-2 font-medium">
                <SidebarElement text="Home" href="/home" />
                <SidebarElement text="About Me" href="/about" />
                <SidebarElement text="Experience" href="/experience" />
                <SidebarElement text="Projects" href="/projects" />
            </ul>
            <div className="flex-grow" />
            <div className="mb-1 flex flex-row gap-3 justify-center">
                <span className="" data-state="closed">
                    <a href="https://github.com/griffinclark10" className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </span>
                <span className="" data-state="closed">
                    <a href="https://www.linkedin.com/in/griffin-clark-a02513146/" className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </span>
                <span className="" data-state="closed">
                        <a href="mailto:griffinclark10@gmail.com" className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                </span>
                <span className="" data-state="closed">
                    <a href="#" className="flex p-3 gap-4 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                        <FontAwesomeIcon icon={faFilePdf}/>
                    </a>
                </span>
            </div>  
        </div>
    );
}

export default Sidebar