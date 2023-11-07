import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="h-screen w-full bg-gradient-to-b from-slate-800 to-black p-4 text-white">

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold p-4 justify-center border-b-4 inline border-gray-500'>Contact</p>
                    <p>Feel free to reach out to me below.</p>
                </div>

                <div>

                    <form action='' className=''>
                        <input type='text' name='name' placeholder='Type your name here.'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type='text' name='email' placeholder='Enter your email here' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name='message' cols={"30"} rows={"10"} className='p-2 bg-transparent rounded-md text-white border-2 focus:outline-none' > </textarea>

                        <button className='text-white bg-gradient-to-b from-teal-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-500'> Let's Chat</button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact