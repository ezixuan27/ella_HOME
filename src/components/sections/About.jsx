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
            className="min-h-screen flex flex-col py-20"
        >

            <div className="max-w-[1300px] mx-auto w-full mx-4 my-10">
                <RevealOnScroll>
                    <h2
                        className="text-5xl font-bold mb-8 text-[#5D88AA] text-center">
                        ABOUT ME
                    </h2>
                    <div className="rounded-lg text-xl border-white/10 border mx-4">
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
                </RevealOnScroll>

                <div className="flex flex-col space-y-4 md:hidden w-full max-w-[300px] mx-auto my-5">
                    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                        <img
                            src="mypic.jpeg"
                            alt="Me"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="friends.jpeg"
                            alt="Me and Friends"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>

                    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                        <img
                            src="candypic.jpg"
                            alt="Candy"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="candysleep.JPG"
                            alt="Candy Sleep"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>
                </div>

                <div className="hidden md:flex max-w-[1000px] mx-auto flex-row md:space-x-4 items-center justify-center my-10">

                    <div className="relative w-2/5 h-150 rounded-xl overflow-hidden">
                        <img
                            src="mypic.jpeg"
                            alt="Me"
                            className="absolute inset-0 w-full h-full md:h-150 md:aspect-square object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="friends.jpeg"
                            alt="Me and Friends"
                            className="absolute inset-0 w-full h-full md:h-150 md:aspect-square object-cover rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>

                    <div className="relative w-2/5 h-150 rounded-xl overflow-hidden">
                        <img
                            src="candypic.jpg"
                            alt="Candy"
                            className="absolute inset-0 w-full h-full md:h-150 md:aspect-square object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="candysleep.JPG"
                            alt="Candy Sleep"
                            className="absolute inset-0 w-full h-full object-cover md:h-150 md:aspect-square rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>
                </div>
                <RevealOnScroll>
                    <h2 className="text-2xl mt-10 text-[#5D88AA] text-center">
                        Education
                    </h2>


                    <div className="timeline mt-8 mx-auto">

                        <RevealOnScroll>
                            <div className="container left">
                                <img src="NU_logo.png"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Northeastern University</h2>
                                    <small className="text-[#344c67]">2024 - present, Boston/MA <br />
                                        Computer Science Major & Supply Chain Management Minor
                                    </small>
                                    <div className="text-[#344c67]">
                                        <p className="font-bold">Relevant Coursework: </p>
                                        <ul className="list-none list-inside space-y-1.5 columns-2">
                                            <li className="before:content-['▹']"> Algorithms and Data</li>
                                            <li className="before:content-['▹']"> Object Oriented Design</li>
                                            <li className="before:content-['▹']"> Global Supply Chain Strategy</li>
                                            <li className="before:content-['▹']"> Foundations of Data Science</li>
                                            <li className="before:content-['▹']"> Advanced Linear Algebra</li>
                                            <li className="before:content-['▹']"> Advanced Mathematical Reasoning</li>
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
                            <div className="container left">
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <p className="text-black font-bold">Extracurriculars: </p>
                                    <ul className="text-[#344c67]">
                                        <li className="flex items-start">
                                            <div className="flex flex-col">
                                                <span>♣️ Kaleidoscope (Khoury's Club Council)</span>
                                                <span className="pl-6 text-sm">- Event Coordinator</span>
                                            </div>
                                            <span className="ml-auto">2025 – Present</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>♣️ NU Supply Chain Management Club</span>
                                            </div>
                                            <span className="ml-auto">2025 - Present</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>♣️ OASIS</span>
                                                <span className="pl-6 text-sm">- Web Developer</span>
                                            </div>
                                            <span className="ml-auto">Jan - Mar, 2025</span>
                                        </li>
                                    </ul>
                                    <span className="arrow-top"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container right">
                                <img src="hebron_logo.png"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Hebron High School</h2>
                                    <small className="text-[#344c67]">2020 - 2024, Carrollton/TX <br />GPA: 3.86/4.0</small>
                                    <div className="text-[#344c67]">
                                        <p className="font-bold">AP Courses Taken: </p>
                                        <ul className="list-none list-inside space-y-1.5 columns-2">
                                            <li className="before:content-['▹']"> Calculus BC</li>
                                            <li className="before:content-['▹']"> Computer Science A</li>
                                            <li className="before:content-['▹']"> Macroeconomics</li>
                                            <li className="before:content-['▹']"> US Government</li>
                                            <li className="before:content-['▹']"> Physics 1</li>
                                            <li className="before:content-['▹']"> Physics C</li>
                                            <li className="before:content-['▹']"> World History</li>
                                            <li className="before:content-['▹']"> Human Geography</li>
                                            <li className="before:content-['▹']"> Psychology</li>
                                            <li className="before:content-['▹']"> Chinese</li>
                                        </ul>
                                    </div>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container right">
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <p className="text-black font-bold">Extracurriculars: </p>
                                    <ul className="text-[#344c67]">
                                        <li className="flex items-start">
                                            <div className="flex flex-col">
                                                <span>♣️ Family, Career, and Community Leaders of America</span>
                                                <span className="pl-6 text-sm">- President</span>
                                            </div>
                                            <span className="ml-auto">2021 – 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>👩🏻‍💻 Girls Who Code</span>
                                                <span className="pl-6 text-sm">- Founder/President</span>
                                            </div>
                                            <span className="ml-auto">2023 - 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>⚙️ VEX Robotics Team 87867D/V</span>
                                                <span className="pl-6 text-sm">- Captain/Engineering Notebook Manager</span>
                                            </div>
                                            <span className="ml-auto">2023 - 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span>🌟 Rays Of Light Volunteer</span>
                                            <span className="ml-auto">2020 - 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span>🧗 Team Texas Rock Climbing</span>
                                            <span className="ml-auto">2021 – 2023</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span>🧗 Team Lone Star Rock Climbing</span>
                                            <span className="ml-auto">2019 - 2021</span>
                                        </li>
                                    </ul>
                                    <span className="arrow-top"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container left">
                                <img src="pca.png"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Prestonwood Christian Academy</h2>
                                    <small className="text-[#344c67]">2020 - 2022, Frisco/TX</small>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container right">
                                <img src="bjdl.jpeg"
                                    className="bg-white" />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">East Beijing Road Primary School</h2>
                                    <small className="text-[#344c67]">2014 - 2020, Nanjing/China</small>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                    </div>
                </RevealOnScroll>


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
        </section>
    )

}