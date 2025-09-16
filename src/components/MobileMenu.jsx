import { useEffect } from "react";
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[#3e5873] z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out

            ${menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
        `}
        >

            <button onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>
            <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold my-4 text-[#E8EDF2]/80 hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300
                    ${
                        menuOpen ?
                        "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5"
                    }
                    `}
            >
                ABOUT
            </a>
            <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold my-4 text-[#E8EDF2]/80 hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300
                    ${
                        menuOpen ?
                        "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5"
                    }
                    `}
            >
                PROJECTS
            </a>
            <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold my-4 text-[#E8EDF2]/80 hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300
                    ${
                        menuOpen ?
                        "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5"
                    }
                    `}
            >
                CONTACT
            </a>
            <a
                href="https://drive.google.com/file/d/1XL0eKA0bFRUUoVSaPtx-xEb5jrzDAqCK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold my-4 text-[#E8EDF2]/80 hover:text-white transition-colors 
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white 
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300
                    ${
                        menuOpen ?
                        "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-5"
                    }
                    `}
            >
                RESUME
            </a>

        </div>
    )
}