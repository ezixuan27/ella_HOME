import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
            <div className="text-center z-10 px-4 mt-8">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#5D88AA] to-[#E86D2E] bg-clip-text text-transparent leading-right">
                    Hi, I'm Zixuan Zou.
                </h1>

                <p className="text-[#344c67] text-xl mt-8 mb-8 max-w-3xl mx-auto">
                    I usually go by Ella! 
                    I'm currently a second-year student at Northeastern Univerisity in Boston, MA pursuing a B.S. in Computer Science
                    with a minor in Supply Chain Management. Nice to meet you!
                </p>
                <div className="flex-col justify-center items-center space-x-20 space-y-10 mt-20">
                    <a
                        href="#projects"
                        className="border border-[#4E8EF7] text-[#3B82F6] py-3 px-6 rounded font-medium 
                        transition transform hover:-translate-y-0.5 hover:bg-[#4E8EF7]/90 hover:text-white
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] h-12">
                        View Projects
                    </a>
                    <div className="relative inline-block">
                        <a
                            href="#contact"
                            className="border border-[#E86D2E] text-[#E86D2E] py-3 px-6 rounded font-medium 
                        transition transform hover:-translate-y-0.5 hover:bg-[#E86D2E]/90 hover:text-white 
                         hover:shadow-[0_0_15px_rgba(232,109,46,0.4)] h-12">
                            Contact Me
                        </a>
                        <img src="小黑waving.gif"
                            alt="someGif"
                            className="absolute -top-21 left-1/2 w-20 h-20 pointer-events-none select-none z-10"
                        />
                    </div>

                </div>


            </div>
        </RevealOnScroll>

    </section>
}