import React from "react";
import Hike from "../static/Hike.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full mx-auto pt-[100px]  bg-gradient-to-b from-black via-black to-slate-800 md:pt-5 md:h-screen"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full px-10 ">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        From Scientist to Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I'm a software developer with a strong foundation in programming and a passion for tackling complex challenges.
                        I thrive in collaborative environments, eager to learn from experienced developers and contribute to innovative projects.
                        I'm excited to continue growing as a software developer and make a meaningful impact in the tech world.
                    </p>
                    <div>

                        <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-500 cursor-pointer">
                            Check Out My Work
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                            </span>
                        </Link>

                    </div>
                </div>

                <div className="">
                    <img
                        src={Hike}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-[300px] md:w-full h-auto"
                        // style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
