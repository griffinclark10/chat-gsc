interface SidebarElementProps {
    text: string;
    href: string;
  }

const SidebarElement: React.FC<SidebarElementProps> = ({ text, href }) => {
    return (
        <li>
            <a href={href} className="flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-teal-800 dark:hover:bg-gray-700 group">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span className="ml-3">{text}</span>
            </a>
        </li>
    );
}

export default SidebarElement