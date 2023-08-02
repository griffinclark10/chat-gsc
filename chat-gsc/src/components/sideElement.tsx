interface SidebarElementProps {
    text: string;
    href: string;
  }

const SidebarElement: React.FC<SidebarElementProps> = ({ text, href }) => {
    return (
        <div className="bg-teal-950 w-100 pl-px pr-px">
            <p>{text}</p>
        </div>
    );
}

export default SidebarElement