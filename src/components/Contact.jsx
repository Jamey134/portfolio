import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="h-auto w-full bg-gradient-to-b from-slate-800 to-black p-4 text-white md:h-screen">

            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Feel free to reach out to me below.</p>
                </div>

                <div className='flex justify-center items-center'>

                    {/* the action is used for receiving the contact's information via getform.com */}

                    <form action='https://getform.io/f/aee90490-f76b-4699-834f-42caf7693c2c' method='POST' className='flex flex-col  w-full md:w-1/2'>
                        <input type='text' name='name' placeholder='Enter your name here.'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type='text' name='email' placeholder='Enter your email here' className='p-2 my-5 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name='message' cols={"30"} rows={"10"} placeholder='Enter your message here' className='p-2 bg-transparent rounded-md text-white border-2 focus:outline-none' > 
                        </textarea>

                        <button className='text-white bg-gradient-to-b from-teal-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-500 my-4'>Let's Chat</button>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default Contact