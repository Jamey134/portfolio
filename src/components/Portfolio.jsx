import React from 'react'
// import jibjab from "../assets/portfolio/jibjab" <---- Import photos of your projects
// import rizzapp from "../assets/portfolio/jibjab" <---- Import photos of your projects

const Portfolio = () => {
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-slate-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p>Check out my projects below</p>
                </div>
                
                {/* Card Structures */}
                <div> 

                    <div>
                        {/* <img src=" " alt=''> </img> */}
                        <div>
                            <button>Demo</button>
                            <button>Code</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio