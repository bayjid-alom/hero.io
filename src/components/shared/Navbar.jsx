// import React from 'react';
// import logo from '../../assets/images/logo.png';
// import { NavLink } from 'react-router';
// import { FaGithub } from 'react-icons/fa';

// const Navbar = () => {
//     const navLinkClass = ({ isActive }) =>
//         `relative py-2 text-sm font-medium transition-colors duration-300
//         after:absolute after:bottom-0 after:left-0 after:h-[2px]
//         after:w-full after:origin-left after:bg-gradient-to-r
//         after:from-[#632EE3] after:to-[#9F62F2]
//         after:transition-transform after:duration-300
//         ${isActive
//             ? 'text-[#632EE3] after:scale-x-100'
//             : 'text-gray-700 after:scale-x-0 hover:text-[#632EE3] hover:after:scale-x-100'
//         }`;




//     return (

//         <header className="fixed top-0 left-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-md">
//             <nav className="flex w-[95%] md:w-[92%] lg:w-[90%] min-h-[66px] mx-auto items-center justify-between gap-3">

//                 {/* Logo */}
//                 <NavLink to="/" className="flex shrink-0 items-center gap-2">
//                     <img
//                         className="w-9 md:w-10"
//                         src={logo}
//                         alt="HERO.IO Logo"
//                     />
//                     <h2 className="text-base font-extrabold tracking-tight text-[#632EE3] md:text-lg">
//                         HERO.IO
//                     </h2>
//                 </NavLink>

//                 {/* Navigation Links */}
//                 <ul className="flex items-center gap-3 sm:gap-5 md:gap-7">
//                     <li>
//                         <NavLink to="/" end className={navLinkClass}>
//                             Home
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink to="/apps" className={navLinkClass}>
//                             Apps
//                         </NavLink>
//                     </li>

//                     <li>
//                         <NavLink to="/installed-apps" className={navLinkClass}>
//                             <span className="hidden sm:inline">Installation</span>
//                             <span className="sm:hidden">Install</span>
//                         </NavLink>
//                     </li>
//                 </ul>



//                 {/* Contribute Button */}
//                 <a
//                     href="https://github.com/"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md sm:px-4 sm:text-sm"
//                 >
//                     <FaGithub size={15} />
//                     <span>Contribute</span>
//                 </a>


//                 {/* <div className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-2.5 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md sm:px-4 sm:text-sm">
//                     <FaGithub size={15} />
//                     <span>Contribute</span>
//                 </div> */}



//             </nav>
//         </header>
//     );
// };

// export default Navbar;










import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        `relative py-2 text-sm font-medium transition-colors duration-300
        after:absolute after:bottom-0 after:left-0 after:h-[2px]
        after:w-full after:origin-left after:bg-gradient-to-r
        after:from-[#632EE3] after:to-[#9F62F2]
        after:transition-transform after:duration-300
        ${isActive
            ? 'text-[#632EE3] after:scale-x-100'
            : 'text-gray-700 after:scale-x-0 hover:text-[#632EE3] hover:after:scale-x-100'
        }`;

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full bg-white/95 shadow-sm backdrop-blur-md">
            <nav className="relative mx-auto flex min-h-[66px] w-[94%] items-center justify-between gap-3 md:w-[92%] lg:w-[90%]">

                {/* Logo */}
                <NavLink
                    to="/"
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
                </NavLink>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-5 md:flex lg:gap-7">
                    <li>
                        <NavLink to="/" end className={navLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/apps" className={navLinkClass}>
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/installed-apps" className={navLinkClass}>
                            Installation
                        </NavLink>
                    </li>
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
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/apps"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Apps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/installed-apps"
                                    onClick={closeMenu}
                                    className={navLinkClass}
                                >
                                    Installation
                                </NavLink>
                            </li>
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