import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { FaGithub } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import MyNavlink from './MyNavlink';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/apps', name: 'Apps' },
        { path: '/installed-apps', name: 'Installation' },
        { path: '/dashboard', name: 'Dashboard' },
    ];

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-md">
            <nav className="relative mx-auto flex min-h-[66px] w-[94%] items-center justify-between gap-3 md:w-[92%] lg:w-[90%]">

                {/* Logo */}
                <a
                    href="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-2"
                >
                    <img
                        className="w-9 md:w-10"
                        src={logo}
                        alt="HERO.IO Logo"
                    />
                    <h2 className="text-base font-extrabold tracking-tight text-[#632EE3] md:text-lg">
                        HERO.IO
                    </h2>
                </a>



                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-5 md:flex lg:gap-7">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <MyNavlink to={link.path}>
                                {link.name}
                            </MyNavlink>
                        </li>
                    ))}
                </ul>



                {/* Desktop Contribute Button */}
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden shrink-0 items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md md:inline-flex"
                >
                    <FaGithub size={15} />
                    Contribute
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-md p-2 text-[#632EE3] transition-colors hover:bg-purple-50 md:hidden"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
                </button>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute left-0 top-full w-full border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">


                        <ul className="flex flex-col items-start gap-5">
                            {navLinks.map(link => (
                                <li key={link.path}>
                                    <MyNavlink
                                        to={link.path}
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </MyNavlink>
                                </li>
                            ))}
                        </ul>



                        {/* Mobile Contribute Button */}
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md"
                        >
                            <FaGithub size={16} />
                            Contribute
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;