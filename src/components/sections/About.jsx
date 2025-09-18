import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languages = [
        "Java",
        "Python",
        "Dr.Racket",
        "JavaScript",
        "HTML",
        "CSS"
    ];

    const tools = [
        "React",
        "Node.js",
        "Git",
        "GitHub",
        "Figma",
        "Adobe Photoshop"
    ]

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto mx-4">
                    <h2
                        className="text-3xl font-bold mb-8 text-[#5D88AA] text-center">
                        ABOUT ME
                    </h2>

                    <div className="rounded-lg text-lg p-8 border-white/10 border">
                        <p className="text-[#344c67] mb-6">
                            I'm a student new to the tech field, deeply curious about the potential of AI and how
                            it continues to reshape industries. With the internet taking decades to spread, and AI
                            achieving similar impact in just a few years, I feel fortunate to be born in such an era.
                            My interest in organizing and connecting systems naturally led me to supply chain, a field
                            that not only sparks my passion but also holds the possibility of letting me see the world.
                        </p>
                        <p className="text-[#344c67] mb-6">
                            Away from the screen, I've been climbing for 9 years and enjoy the chance to experience
                            and capture the outdoors. I also have a passion for mechanical keyboards and creative crafting projects.
                        </p>
                    </div>


                    <div className="timeline mt-8">
                        <RevealOnScroll>
                            <div className="container left">
                                <img src="NU_logo.png"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Northeastern University</h2>
                                    <small className="text-[#344c67]">2024 - present, Boston/MA <br/>
                                        Computer Science Major & Supply Chain Management Minor
                                    </small>
                                    <div className="text-[#344c67]">
                                        <p>Relevant Coursework: </p>
                                        <ul className="list-none list-inside space-y-2">
                                            <li className="before:content-['▹']"> Algorithms and Data</li>
                                            <li className="before:content-['▹']"> Object Oriented Design</li>
                                            <li className="before:content-['▹']"> Global Supply Chain Strategy</li>
                                            <li className="before:content-['▹']"> Foundations of Data Science</li>
                                            <li className="before:content-['▹']"> Advanced Linear Algebra</li>
                                            <li className="before:content-['▹']"> Advanced Mathmatical Reasoning</li>
                                            <li className="before:content-['▹']"> Discrete Structures</li>
                                            <li className="before:content-['▹']"> Fundamentals of Computer Science I/II</li>
                                            <li className="before:content-['▹']"> Introduction to Cybersecurity</li>
                                            <li className="before:content-['▹']"> Supply Chain and Operation Management</li>
                                        </ul>
                                    </div>
                                        <span className="arrow"></span>
                                    </div>
                                </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container right">
                                <img src="hebron_logo.png"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Hebron High School</h2>
                                    <small className="text-[#344c67]">2020 - 2024, Carrollton/TX</small>
                                    <p className="text-[#344c67]">Public High School Diploma</p>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container left">
                                <img src="NU_logo.png"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Prestonwood Christian Academy</h2>
                                    <small className="text-[#344c67]">2022 - 2024, Frisco/TX</small>
                                    <p className="text-[#344c67]">Middle School</p>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll>
                            <div className="container right">
                                <img src="hebron_logo.png"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Hebron High School</h2>
                                    <small className="text-[#344c67]">2020 - 2024, Carrollton/TX</small>
                                    <p className="text-[#344c67]">Public High School Diploma</p>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>


                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {languages.map((language, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hober:shadow-[0?2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                                    >
                                        {language}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tool, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hober:shadow-[0?2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div> */}
                </div>
            </RevealOnScroll>
        </section>
    )

}