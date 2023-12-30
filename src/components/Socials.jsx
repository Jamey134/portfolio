import React from 'react'
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im"
import { AiTwotoneMail } from "react-icons/ai"
import { BsFileEarmarkPersonFill } from "react-icons/bs"

const Socials = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <GrLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/jameswatson431/",
            style: "rounded-tf-md"
        },
        {
            id: 2,
            child: (
                <>
                    Github <ImGithub size={30} />
                </>
            ),
            href: "https://github.com/Jamey134",
            style: "rounded-tf-md"
        },
        {
            id: 3,
            child: (
                <>
                    E-Mail <AiTwotoneMail size={30} />
                </>
            ),
            href: "mailto:jameywatson134@gmail.com",
            style: "rounded-tf-md"
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFileEarmarkPersonFill size={30} />
                </>
            ),
            href: "Watson_James_Tech_Resume copy.pdf", //<--- Add Resume Once Completed(Resume.pdf) 
            style: "rounded-tf-md",
            download: true,
        },
    ]

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Socials;



