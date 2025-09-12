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
            <div className="max-w-3xl mx-auto mx-4">
                <h2
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passinate developer looking for my first internship opportunity!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>
                                    B.S. in Computer Science
                                </strong>
                                - Northeastern University, Boston, MA (2024 - 2028)
                            </li>
                            <li>
                                Relevant Coursework: Discrete Structure, Algorithm and Data Science
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
             </RevealOnScroll>
        </section>
    )

}