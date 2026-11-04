import React from 'react';
import { NavLink } from 'react-router';

const MyNavlink = ({ to, children, onClick }) => {

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

    return (
        <NavLink
            to={to}
            end={to === '/'}
            onClick={onClick}
            className={navLinkClass}
        >
            {children}
        </NavLink>
    );
};

export default MyNavlink;