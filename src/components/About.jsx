import React from 'react'

const About = () => {

    return (
        <div name="about"
            className='w-full h-screen bg-gradient-to-b from-slate-800 to-black text-white'
        >
            
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                    <div className="pb-8">
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                    </div>
                <p className='text-xl mt20'>
                    I am a versatile full-stack developer with six months of hands-on experience.
                    Before entering the field of software development, my background was in environmental science, which equipped me with valuable skills in research, creative problem-solving, and keen attention to detail.
                </p>
                <br />
                <p className='text-xl'>
                    During my six months in software development, I've further honed these abilities and developed a strong passion for creating digital solutions that prioritize user needs.
                    I thrive in the fast-paced and ever-changing tech landscape, always staying updated with the latest industry trends.
                    I'm committed to delivering high-quality work and approach each project with a determination to achieve excellent results.
                </p>
                <br />
                <p className='text-xl'>
                    I am eager to bring my unique perspective and dedication to your team, and I'm ready to contribute to innovative projects that have a meaningful impact.
                    I look forward to the opportunity to connect and discuss how I can be a valuable asset to your organization.
                </p>
                </div>
            
        </div>
    )
}

export default About