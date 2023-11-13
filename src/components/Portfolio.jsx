import React from 'react'
// import jibjab from "../static/jibjab.png";

// import rizzapp from "../assets/portfolio/jibjab" <---- Import photos of your projects

const Portfolio = () => {
    return (
        <div name="projects" className='bg-gradient-to-b from-black to-slate-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-6'>Projects I have built</p>
                </div>
                
                {/* Card Structures */}
                <div className='grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:px-0'> 

                    <div className='shadow-md shadow-gray-600 rounded-lg'>
                        {/* <img src={} alt='' className = "rounded-md duration-200 hover:scale-105"> </img> */}
                        <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-6 m-4 duration-200 hover:scale-110'>Demo</button>
                            <button className='w-1/2 px-6 py-6 m-4 duration-200 hover:scale-110'>Code</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio