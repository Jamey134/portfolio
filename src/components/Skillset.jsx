import React from 'react'

import html from "../static/html.png";

const Skillset = () => {
    return (
        <div name="skillset" className='bg-gradient-to-b from bg-slate-800 to-black'>
            <div>
                <div>
                    <p>Skillset</p>
                    <p>Technical skills I have learned</p>
                </div>

                <div>
                    <div>
                        <img src={html} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skillset