export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="py-6 text-center text-gray-400">
            <div className="flex justify-between items-center max-w-5xl mx-auto px-4 py-4">
                <p className="text-sm">© {year} Zixuan Zou.</p>

                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/ezixuan27"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub">
                        <img src="github.svg"
                            alt="GitHub"
                            className="w-6 h-6" 
                            />
                    </a>
                    <a href="www.linkedin.com/in/zixuan-zou"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn">
                        <img src="linkedin.svg"
                            alt="LinkedIn"
                            className="w-6 h-6" 
                            />
                    </a>
                    <a href="mailto:zou.zix@northeastern.edu"
                        aria-label="Email">
                        <img src="email.png"
                            alt="Email"
                            className="w-6 h-6"
                        />
                    </a>

                </div>
            </div>

        </footer>
    );
}