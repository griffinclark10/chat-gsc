import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icon, textColor, hoverBgColor, link, height, bgColor, hoverTextColor }: {
    icon: IconProp,
    textColor: string,
    hoverBgColor: string,
    link: string,
    height: number
    bgColor?: string,
    hoverTextColor?: string,
}) => {
    return (
        <span className={`rounded-md border border-white/20 hover:bg-${hoverBgColor} ${hoverTextColor ? `hover:text-${hoverTextColor}` : null}`} data-state="closed">
            <a href={link} className={`flex p-6 md:p-3 gap-3 transition-colors duration-200 text-${textColor} ${bgColor ? `bg-${bgColor}` : null} cursor-pointer text-sm h-${height} w-${height} flex-shrink-0 items-center justify-center`}>
                <FontAwesomeIcon icon={icon} />
            </a>
        </span>
    );
};

export default Button;