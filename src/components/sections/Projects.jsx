import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    const tagColors2 = {
        React: "bg-sky-100 text-sky-700 hover:bg-sky-200",
        JSX: "bg-sky-100 text-sky-700 hover:bg-sky-200",
        CSS: "bg-sky-100 text-sky-700 hover:bg-sky-200",
        "Spotify API": "bg-sky-100 text-sky-700 hover:bg-sky-200",
        "Google Sheet": "bg-sky-100 text-sky-700 hover:bg-sky-200",

        Java: "bg-[#A7E3DC] text-[#00695C] hover:bg-[#00d4b9]",
        "IntelliJ IDEA": "bg-[#A7E3DC] text-[#00695C] hover:bg-[#00d4b9]",
        MVC: "bg-[#FDE68A] text-[#ff5700] hover:bg-[#ffd700]",
        OOD: "bg-[#FDE68A] text-[#ff5700] hover:bg-[#ffd700]",

        Python: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
        "VS Code": "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
        n8n: "bg-[#F8BBD0] text-[#C2185B] hover:bg-[#EC407A]/65",
    };

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="md:max-w-2/3 max-w-full md:mx-auto mx-5 my-10">
                <RevealOnScroll>
                    <h2
                        className="text-4xl md:text-5xl font-bold md:mt-10 mb-8 text-[#2C4E80] text-center
                        after:block after:w-80 after:h-[3px] after:bg-[#2C4E80] after:mx-auto after:mt-5">
                        FEATURED PROJECTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[#1A2B4C] text-2xl font-bold mb-2 uppercase">
                                Mudle
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                An interactive web-based music guessing game inspired by Wordle and Hangman. Developed by me and other four, the app challenges users to guess the
                                title of a song one letter at a time. Players can guess letters via keyboard input or by clicking on an on-screen keyboard. Incorrect guesses trigger the
                                appearance of a "hangcat" graphic; if the full hangcat appears before the song is guessed, the user loses.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JSX", "CSS", "Spotify API", "Google Sheet"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://oasis-2025-mudle.github.io/app/ " className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[#1A2B4C] text-2xl font-bold mb-2 uppercase">
                                Calendar App
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                A calendar program inspired by Google Calendar, following the Model-View-Controller (MVC) design pattern. It allows users to create, edit, and query events
                                across multiple time zones, with scalable support for event sets and selective field queries. The program features both text-based and graphical interfaces,
                                including scrollable views that display up to ten detailed events at a time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "IntelliJ IDEA", "MVC", "OOD"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ezixuan27/CS3500-OOD/tree/main/Calendar" className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[#1A2B4C] text-2xl font-bold mb-2 uppercase">
                                Cybersecurity AI Agents
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                I’m currently assisting with course AI agent research, where I helped develop JustinBot3000, an AI agent that delivers real-time course-specific hints
                                and answers restricted to approved materials. I designed n8n workflows integrating Google Drive, Pinecone vector store, and OpenAI embeddings to enable
                                retrieval-augmented generation (RAG), and automated Q&A through Discord commands, supporting over 100 student inquiries each week. Alongside this project,
                                I’m currently working on Elicitation Simulation, an agent focused on interactive scenario-based learning.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "VS Code", "n8n"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>


                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ezixuan27/CS3500-OOD/tree/main/Calendar" className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

        </section>
    )
}