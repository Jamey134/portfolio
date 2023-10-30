import React from 'react';
import { FaBars } from "react-icons/fa6";

const NaviBar = () => {

    const links = [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 4,
            link: "Experience"
        },
        {
            id: 5,
            link: "Contact"
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
            <div>
                <h1 className="text-5xl font-navName ml-2">Watson</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'
                    >
                        {link}
                    </li>
                ))}
            </ul>

            <div>
                <FaBars/>
            </div>
        </div>
    );
};

export default NaviBar;
