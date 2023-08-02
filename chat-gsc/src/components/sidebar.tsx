import SidebarElement from "./sideElement";

const Sidebar: React.FC = () => {
    return (
        <aside className="bg-teal-950 w-52 p-4">
            <h1 className="text-slate-100"> Sidebar </h1>
            <ul className="text-slate-100">
                <SidebarElement text="Home" href="/" />
                <SidebarElement text="About Me" href="/about-me" />
                <SidebarElement text="Projects" href="/projects" />
                <SidebarElement text="Experience" href="/experience" />
            </ul>
            
        </aside>
    );
}

export default Sidebar