import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return <section
        id="home"
        className="min-h-screen max-w-full flex items-center justify-center relative px-4 py-20"
    >
        <RevealOnScroll>
            <div className="text-center max-w-full md:mx-auto z-10 px-4 mt-50">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#5D88AA] to-[#E86D2E] bg-clip-text text-transparent leading-right">
                    Hi, I'm Zixuan Zou.
                </h1>

                <p className="text-[#344c67] text-2xl mt-8 mb-8 max-w-4xl mx-auto">
                    I usually go by Ella! 
                    I'm currently a second-year student at Northeastern Univerisity in Boston, MA, pursuing a B.S. in Computer Science
                    with a minor in Supply Chain Management. Nice to meet you!
                </p>
                <div className="flex flex-col justify-center items-center space-y-20 py-20 md:flex-row md:space-x-20 md:space-y-0">
                    <a
                        href="#projects"
                        className="shadow-sm shadow-[#4E8EF7]/50 inline-flex items-center justify-center border border-[#4E8EF7] text-[#3B82F6] px-6 rounded font-medium h-12
                        transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4E8EF7]/90 hover:text-white
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>
                    <div className="relative">
                        <a
                            href="#contact"
                            className="shadow-sm shadow-[#E86D2E]/50 inline-flex items-center justify-center border border-[#E86D2E] text-[#E86D2E] px-6 rounded font-medium h-12
                            transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E86D2E]/90 hover:text-white 
                            hover:shadow-[0_0_15px_rgba(232,109,46,0.4)]">
                            Contact Me
                        </a>
                        <img src="小黑waving.gif"
                            alt="someGif"
                            className="absolute -top-19 left-1/2 w-20 h-20 pointer-events-none select-none z-10"
                        />
                    </div>

                </div>


            </div>
        </RevealOnScroll>

    </section>
}