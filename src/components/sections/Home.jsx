import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
            <div className="text-center z-10 px-4 mt-8">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#3E5873] to-[#CC5926] bg-clip-text text-transparent leading-right">
                    Hi, I'm Zixuan Zou.
                </h1>

                <p className="text-[#24303D] text-lg mt-8 mb-8 max-w-lg mx-auto">
                    I'm a second year Computer Science student at Northeastern Univerisity in Boston,
                    with a minor in Supply Chain Management. Nice to meet you!
                </p>
                <div className="flex justify-center space-x-20 mt-10">
                    <a
                        href="#projects"
                        className="border border-[#3B82F6] text-[#3B82F6] py-3 px-6 rounded font-medium 
                        transition transform hover:-translate-y-0.5 hover:bg-[#3B82F6]/90 hover:text-white
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-[#E86D2E] text-[#E86D2E] py-3 px-6 rounded font-medium 
                        transition transform hover:-translate-y-0.5 hover:bg-[#E86D2E]/90 hover:text-white 
                         hover:shadow-[0_0_15px_rgba(232,109,46,0.4)]">
                        Contact Me
                    </a>
                </div>

            </div>
        </RevealOnScroll>

    </section>
}