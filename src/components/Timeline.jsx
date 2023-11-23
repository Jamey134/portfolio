import React from 'react'
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

    let timelineElements = [
        {
            id: 1,
            title: "Winthrop University | Full Time Student",
            location: <FaLocationDot/> && "Rock Hill, SC",
            description: "My time at Winthrop University was an enriching adventure that concluded with a Bachelor of Science degree in Biology. Throughout this experience, I immersed myself in a diverse array of courses, exploring subjects such as genetics, ecology, microbiology, and anatomy. The hands-on learning in the lab went beyond mere education; it ignited a genuine passion for the intricacies of the natural world. The supportive community of faculty and engaging extracurricular activities not only contributed to my academic development but also fostered personal growth. Winthrop has not just equipped me with a degree; it has instilled in me an enduring curiosity and a profound love for the field of biology. As I embark on the next phase of my journey, I carry with me not only knowledge but a sincere appreciation for the wonders of life.",
            date: "August 2014 - May 2018",
            icon: "work",
        },
        {
            id: 2,
            title: "NOAA | Research Assitant",
            location: <FaLocationDot/> && "Seattle, WA",
            description: "Following my graduation, my professor's recommendation opened the door to a valuable internship opportunity with the National Oceanic and Atmospheric Administration (NOAA), propelling me to Seattle and marking the beginning of my scientific career. Joining the Northwest Fisheries Science Center, I continued my involvement in researching saxitoxins and domoic acid in the Gulf of Alaska. This experience not only extended my academic knowledge but also offered practical exposure to the complexities of marine research. Working alongside veteran scientists at NOAA became a crucial phase in my journey, enabling me to contribute to meaningful research and acquiring insights that would influence my future pursuits in the environmental field.",
            date: "May 2018 - September 2020",
            icon: "work",
        },
        {
            id: 3,
            title: "OnSite Environmental | Chemist",
            location: <FaLocationDot/> && "Redmond, WA",
            description:
                "Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
            date: "October 2019 - April 2020",
            icon: "work",
        },
        {
            id: 4,
            title: "Oak Ridge College",
            location: "South Warren, Geshington",
            description:
                "Online Course in Magical Beasts and Wonders of the World - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
            buttonText: "Course Certificate",
            date: "September 2011",
            icon: "school",
        },
        {
            id: 5,
            title: "Hawking College",
            location: "Skystead, Craonia",
            description:
                "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
            buttonText: "College Projects",
            date: "2007 - 2011",
            icon: "school",
        },
        {
            id: 6,
            title: "Marble Hills Grammar School",
            location: "Dragontail, Ascana",
            description:
                "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
            date: "2003 - 2007",
            icon: "school",
        },
    ];

    return (
        <div>
            <h1>Timeline</h1>
            <VerticalTimeline>
                {

                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline