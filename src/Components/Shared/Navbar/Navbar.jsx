

const Navbar = () => {

    const cvFilePath = "./Resume_for_web.pdf";

    const Links = <div className="flex gap-5 items-center">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </div>

    return (
        <div className=" navbar border-b-[1px] border-zinc-200 bg-[#ffffff99] px-20 bg-opacity-60 fixed z-[999]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            Links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">YOUSUF</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        Links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a 
                href={cvFilePath}
                download="./Resume_for_web.pdf"
                className="btn hover:bg-black hover:text-white">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;