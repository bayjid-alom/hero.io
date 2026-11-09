import React from 'react';
import { Link } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import logo from '../../assets/images/logo.png';


const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-[#111025] text-white">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-purple-600/15 blur-[100px]"></div>

            <div className="relative mx-auto w-[94%] md:w-[92%] lg:w-[90%]">

                <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:py-16">

                    <div className="sm:col-span-2 lg:col-span-2">
                        <Link to="/" className="inline-flex items-center gap-2">
                            <img src={logo} alt="HERO.IO Logo" className="h-10 w-10 object-contain" />
                            <span className="text-xl font-extrabold tracking-tight">
                                HERO.<span className="text-[#A78BFA]">IO</span>
                            </span>
                        </Link>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                            Discover powerful applications designed to make your everyday life smarter, easier, and more productive. Explore, install, and enjoy your favorite apps with HERO.IO.
                        </p>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-white"
                        >
                            <FaGithub size={17} />
                            Contribute on GitHub
                            <FiArrowUpRight size={15} />
                        </a>
                    </div>

                    <div>
                        <h3 className="mb-5 text-base font-bold">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/" className="transition-colors hover:text-[#A78BFA]">Home</Link></li>
                            <li><Link to="/apps" className="transition-colors hover:text-[#A78BFA]">Explore Apps</Link></li>
                            <li><Link to="/installed-apps" className="transition-colors hover:text-[#A78BFA]">Installed Apps</Link></li>
                            <li><Link to="/dashboard" className="transition-colors hover:text-[#A78BFA]">Dashboard</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-5 text-base font-bold">Discover More</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#A78BFA]">GitHub</a></li>
                            <li><a href="https://react.dev/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#A78BFA]">React Documentation</a></li>
                            <li><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#A78BFA]">Tailwind CSS</a></li>
                            <li><a href="https://lucide.dev/" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#A78BFA]">Lucide Icons</a></li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
                    <p className="text-xs leading-6 text-gray-500 sm:text-sm">
                        © {new Date().getFullYear()} HERO.IO. All rights reserved.
                    </p>

                    <p className="text-xs text-gray-500 sm:text-sm">
                        Developed by <span className="font-semibold text-gray-300">Bayjid Alom</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
