import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
            <div className="max-w-2/3 mx-auto px-4">
                <h2
                    className="text-5xl font-bold mb-8 text-[#5D88AA] text-center">
                    FEATURED PROJECTS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-[#344c67] text-2xl font-bold mb-2">
                            Mudle
                            <p className="text-[#344c67]/70 mb-3 text-lg">
                                An interactive web-based music guessing game inspired by Wordle and Hangman. Developed by me and other four, the app challenges users to guess the 
                                title of a song one letter at a time. Players can guess letters via keyboard input or by clicking on an on-screen keyboard. Incorrect guesses trigger the 
                                appearance of a "hangcat" graphic; if the full hangcat appears before the song is guessed, the user loses.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React","JSX","CSS","Spotify API","Google Sheet"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://oasis-2025-mudle.github.io/app/ " className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </h3>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-[#344c67] text-2xl font-bold mb-2">
                            Calendar App
                            <p className="text-[#344c67]/70 mb-3 text-lg">
                                A calendar program inspired by Google Calendar, following the Model-View-Controller (MVC) design pattern. It allows users to create, edit, and query events 
                                across multiple time zones, with scalable support for event sets and selective field queries. The program features both text-based and graphical interfaces, 
                                including scrollable views that display up to ten detailed events at a time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java","IntelliJ IDEA","MVC","OOD"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ezixuan27/CS3500-OOD/tree/main/Calendar" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </h3>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-[#344c67] text-2xl font-bold mb-2">
                            Cybersecurity AI Agents
                            <p className="text-[#344c67]/70 mb-3 text-lg">
                                I’m currently assisting with course AI agent research, where I helped develop JustinBot3000, an AI agent that delivers real-time course-specific hints 
                                and answers restricted to approved materials. I designed n8n workflows integrating Google Drive, Pinecone vector store, and OpenAI embeddings to enable 
                                retrieval-augmented generation (RAG), and automated Q&A through Discord commands, supporting over 100 student inquiries each week. Alongside this project, 
                                I’m currently working on Elicitation Simulation, an agent focused on interactive scenario-based learning.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python","VS Code","n8n"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/JoshuaGoldberg/JustinBot" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project
                                </a>
                            </div>
                        </h3>
                    </div>
                </div>

            </div>
             </RevealOnScroll>
        </section>
    )
}