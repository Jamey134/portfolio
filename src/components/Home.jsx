
import React from "react";
import Hike from "../static/Hike.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-slate-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
                <div className="flex flex-col justify-center h-full px-10 ">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    I'm a software developer with a strong foundation in programming and a passion for tackling complex challenges. 
                    I thrive in collaborative environments, eager to learn from experienced developers and contribute to innovative projects. I'm excited to continue growing as a software developer and make a meaningful impact in the tech world.
                    </p>
                    <div>
                        
                            {/* to="portfolio"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                         */}
                        <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                            </span>
                        </button>
                        
                    </div>
                </div>

                <div>
                    <img
                        src={Hike}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full"
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;