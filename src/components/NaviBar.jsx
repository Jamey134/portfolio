import React from 'react';

const NaviBar = () => {

    const links = () => [
        {
            id: 1,
            link: "Home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 4,
            link: "Experience"
        },
        {
            id: 5,
            link: "Contact"
        },
    ]
    


    return <>
        <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">

            <div>
                <h1 className="text-5xl font-navName ml-2">Watson</h1>
            </div>
            <ul className='flex'>
                <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200'>Home</li>
                <li className=''>Home</li>
            </ul>
        </div>

    </>

};

export default NaviBar;
