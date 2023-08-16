"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const SidebarElement = ({ text, href }: { text: string;  href: string}) => {
    const path = usePathname();
    return (
        <li>
            <Link href={href} className={`flex items-center p-2 text-gray-100 rounded-lg dark:text-white hover:bg-teal-800 ${path == href ? "bg-teal-800" : null} dark:hover:bg-gray-700 group`}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                <span className="ml-3">{text}</span>
            </Link>
        </li>
    );
}

export default SidebarElement