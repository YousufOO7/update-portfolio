import { useState } from "react";


const Navbar = () => {

    const cvFilePath = "./Front_Resume.pdf";
    const [active, setActive] = useState("/");

    const Links =  <ul className="flex gap-5 items-center">
    {[
      { name: "Home", href: "/" },
      { name: "About Me", href: "#about" },
      { name: "Skills", href: "#skill" },
      { name: "Projects", href: "#project" },
      { name: "Contact Me", href: "#contact" },
    ].map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          onClick={() => setActive(link.href)}
          className={`relative pb-1 transition-all duration-700 ${
            active === link.href ? "border-b-2 border-black" : "hover:border-b-2 hover:border-black"
          }`}
        >
          {link.name}
        </a>
      </li>
    ))}
  </ul>

    return (
        <div className=" navbar border-b-[1px] border-zinc-200 backdrop-blur-sm px-5 md:px-20  fixed z-[999]">
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
                download="./Front_Resume.pdf"
                className="btn hover:bg-black hover:text-white transition duration-2000 ease-in-out">Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;