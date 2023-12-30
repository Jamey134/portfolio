import React from 'react'
import jibjab from "../static/jibjab.png";
import rizzApp from "../static/rizzApp.png"


const Portfolio = () => {
    return (
        <div name="projects" className='bg-gradient-to-b from-slate-950 to-slate-900 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Projects I have built</p>
                </div>

                {/* Card Structures */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>

                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img
                            src={jibjab} alt='' className="rounded-md duration-200 hover:scale-105"
                        />
                        <div className='flex items-center justify-center'>
                            <button onClick={() => { window.location.href = 'https://github.com/Jamey134/JibJab'; }} className='w-1/2 px-6 py-6 m-4 duration-200 hover:scale-110'>Code</button>
                        </div>
                    </div>
                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        <img
                            src={rizzApp} alt='' className="rounded-md duration-200 hover:scale-105" style={{ width: 'auto', height: '358px' }}
                        />
                        <div className='flex items-center justify-center'>
                            {/* <button className='w-1/2 px-6 py-6 m-4 duration-200 hover:scale-110'>Demo</button> */}
                            <button onClick={() => { window.location.href = 'https://github.com/Jamey134/RizzApp'; }} className='w-1/2 px-6 py-6 m-4 duration-200 hover:scale-110'>Code</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio