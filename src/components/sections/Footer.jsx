export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-white/10 bg-[#0b1220]/40 backdrop-blur py-2 text-gray-400">
            <div className="mx-auto max-w-3xl px-4 text-black">
                <div className="space-y-1 text-center text-sm leading-6">
                    <p>© {year} Zixuan Zou.</p>
                    <p>All rights to "Luo Xiaohei" characters belong to MTJJ / HMCH Animation Technology Co., Ltd.</p>
                    <p>This website is for personal and non-commercial use only.</p>
                </div>

            </div>
        </footer>

    );
}