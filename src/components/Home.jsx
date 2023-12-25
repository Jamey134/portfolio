import React from "react";
import Hike from "../static/Hike.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Introduction = () => {
    return (
        <div className="flex flex-col justify-center h-full px-10">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
                From Scientist to Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
                Hey there! I'm James Watson, a full-stack software developer based in
                Seattle. Originating in environmental science in Seattle, I leaped into
                tech after five immersive years, driven by a passion for problem-solving
                and critical thinking. Software development became my natural habitat,
                where my knack for tackling challenges found its perfect match.
            </p>
            <div>
                <Link
                    to="projects"
                    smooth
                    duration={500}
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-blue-500 cursor-pointer"
                >
                    Projects
                    <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                    </span>
                </Link>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full mx-auto pt-[100px] bg-gradient-to-b from-black via-black to-slate-800 md:pt-5 md:h-screen"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <Introduction />
                <div className="">
                    <img
                        src={Hike}
                        alt="James Watson hiking"
                        className="rounded-2xl mx-auto w-[300px] md:w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
