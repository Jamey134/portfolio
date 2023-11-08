import React from 'react'

import html from "../static/html.png";
import css from "../static/css.png";
import javascript from "../static/javascript.png";
import reactIcon from "../static/react.png";
import mongodb from "../static/mongodb.png";
import node from "../static/node.png";
import express from "../static/express.png";
import firebase from "../static/firebase.png";
import cSharp from "../static/c-logo.png";
import git from "../static/git.png";
import flask from "../static/flask.png";
import jinja from "../static/jinja.png";
import mySQL from "../static/mySQL.png";
import net from "../static/NET_Core_Logo.png";
import postman from "../static/postman.png";
import python from "../static/python.png";
import socket from "../static/socket_io.png";
import tailwind from "../static/tailwind.png";

const Skillset = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactIcon,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 6,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-400",
        },
        {
            id: 7,
            src: node,
            title: "Node JS",
            style: "shadow-lime-700",
        },
        {
            id: 8,
            src: git,
            title: "Git",
            style: "shadow-orange-400",
        },
        {
            id: 9,
            src: express,
            title: "Express.js",
            style: "shadow-green-500",
        },
        {
            id: 10,
            src: cSharp,
            title: "C#",
            style: "shadow-violet-700",
        },
        {
            id: 11,
            src: net,
            title: "NET CORE",
            style: "shadow-purple-500",
        },
        {
            id: 12,
            src: mySQL,
            title: "mySQL",
            style: "shadow-cyan-600",
        },
        {
            id: 13,
            src: python,
            title: "Python",
            style: "shadow-sky-400",
        },
        {
            id: 14,
            src: flask,
            title: "Flask",
            style: "shadow-stone-400",
        },
        {
            id: 15,
            src: jinja,
            title: "Jinja",
            style: "shadow-stone-400",
        },
        {
            id: 16,
            src: postman,
            title: "Postman",
            style: "shadow-orange-400",
        },
        {
            id: 17,
            src: socket,
            title: "Socket.IO",
            style: "shadow-gray-400",
        },
        {
            id: 18,
            src: firebase,
            title: "Firebase",
            style: "shadow-yellow-400",
        },
    ];


    return (
        <div name="skillset" className='bg-gradient-to-b bg-slate-800 w-full h-auto'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-4 inline'>Skillset</p>
                    <p className='py-6'>Technical skills I have learned</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-12 text-center sm:px-0'>
                    {
                        skills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className='mx-auto w-20' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Skillset