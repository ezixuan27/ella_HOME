import { RevealOnScroll } from '../RevealOnScroll';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {

        e.preventDefault()

        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message sent successfully!")
                setFormData({ name: '', email: '', message: '' })
            })
            .catch(() => alert("Something went wrong."))
    }

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center mt-10 "
        >
            <RevealOnScroll>
                <div className="px-4 md:w-150 max-w-full md:mx-auto">
                   <h2 className="text-5xl font-bold mb-8 text-[#5D88AA] text-center">
                        Get In Touch</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative flex">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full by-white/5 border border-[#5D88AA]/50 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full by-whit/5 border border-[#5D88AA]/50 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                value={formData.message}
                                className="w-full by-whit/5 border border-[#5D88AA]/50 rounded px-4 py-3 text-black transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="subtmit"
                            className="w-full bg-[#5D88AA] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>

                    </form>

                    <div className="mt-10 flex justify-center gap-10">
                        <a href="https://github.com/ezixuan27"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="opacity-80 transition hover:opacity-100">
                            <img src="github.svg"
                                className="h-10 w-10" />
                        </a>
                        <a href="https://www.linkedin.com/in/zixuan-zou"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="opacity-80 transition hover:opacity-100">
                            <img src="linkedin.svg"
                                className="h-10 w-10" />
                        </a>
                        <a href="mailto:zou.zix@northeastern.edu"
                            aria-label="Email"
                            className="opacity-80 transition hover:opacity-100">
                            <img src="email.png"
                                className="h-10 w-10" />
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}