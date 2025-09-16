import { useEffect } from "react";
export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : '';
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-[#3e5873]/65 backdrop-blur-md border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white"> EZ </a>
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
                        <a
                            href="#about"
                            className="text-[#E8EDF2] hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="text-[#E8EDF2] hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-[#E8EDF2] hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"                        >
                            Contact
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1XL0eKA0bFRUUoVSaPtx-xEb5jrzDAqCK/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E8EDF2] hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"

                        >
                            Resume
                        </a>

                    </div>

                </div>
            </div>
        </nav>
    )
}