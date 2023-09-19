import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react";

const HeaderButton = ({ icon, openBars, animations, href}: {
    icon: any,
    openBars: boolean;
    animations: string[];
    href: string;
}) => {

    return (
        <a className={`flex p-3 gap-3 transition-colors duration-200 cursor-pointer border rounded-md border-yellow-700 text-yellow-700 h-11 w-11 flex-shrink-0 items-center justify-center ${(openBars ? animations[0] : animations[1])}`} href={href}>
                <FontAwesomeIcon 
                    icon={icon}
                    className={`absolute transition-all `}
                />
            </a>
    )
}

export default HeaderButton;