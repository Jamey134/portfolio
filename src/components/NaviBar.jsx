import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NaviBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "skillset",
        },
        {
            id: 5,
            link: "contact",
        },
    ];

    return (
        <div className=" z-10 flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-2xl font-signature ml-2">James Watson</h1>
            </div>

            <ul className="hidden md:flex">
                    <li
                    
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
                    >
                        <Link to={links[0].link} smooth duration={700} >{links[0].link}</Link>
                    </li>
                    <li
                        
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
                    >
                        <Link to={links[1].link} smooth duration={700}>{links[1].link}</Link>
                    </li>
                    <li
                        
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
                    >
                        <Link to={links[2].link} smooth duration={700}  >{links[2].link}</Link>
                    </li>
                    <li
                        
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
                    >
                        <Link to={links[3].link} smooth duration={700} offset={-75} >{links[3].link}</Link>
                    </li>
                    <li
                        
                        className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200"
                    >
                        <Link to={links[4].link} smooth duration={700} >{links[4].link}</Link>
                    </li>
                    
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                        <li
                        
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                            onClick={() => setNav(!nav)}
                            to={links[0].link}
                            smooth duration={500}
                            offset={0}
                            >
                            
                                {links[0].link}
                            </Link>
                            
                        </li>
                        <li
                        
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                            onClick={() => setNav(!nav)}
                            to={links[1].link}
                            smooth duration={500}
                            offset={-40}
                            >
                            
                                {links[1].link}
                            </Link>
                            
                        </li>
                        <li
                        
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                        <Link
                        onClick={() => setNav(!nav)}
                        to={links[2].link}
                        smooth duration={500}
                        offset={-60}
                        >
                        
                            {links[2].link}
                        </Link>
                        
                    </li>
                    <li
                        
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                        <Link
                        onClick={() => setNav(!nav)}
                        to={links[3].link}
                        smooth duration={500}
                        offset={-70}
                        >
                        
                            {links[3].link}
                        </Link>
                        
                    </li>
                    <li
                        
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                        <Link
                        onClick={() => setNav(!nav)}
                        to={links[4].link}
                        smooth duration={500}
                        offset={0}
                        >
                        
                            {links[4].link}
                        </Link>
                        
                    </li>


                </ul>
            )}
        </div>
    );
};

export default NaviBar;