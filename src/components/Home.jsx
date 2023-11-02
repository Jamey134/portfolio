
import React from "react";
import Hike from "../assets/Hike.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-5 md:flex-row">
                <div className="flex flex-col justify-center h-full px-6 ">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        I'm a Full Stack Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    Greetings! I am a versatile full-stack developer with a unique blend of skills and experiences. With a background as an environmental scientist, I have a strong foundation in research, problem-solving, and a keen eye for detail, qualities that seamlessly translate into the world of software development. 
                    In my six months of hands-on experience in software development, I've harnessed these skills and developed a fervent passion for crafting user-centric digital solutions, particularly thriving in rapidly evolving tech environments. 
                    I am eager to contribute my distinct perspective and unwavering dedication to your team, poised to take on innovative projects and consistently deliver tangible results. 
                    Let's connect and explore how I can become a valuable asset to your organization.
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
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
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