import React from 'react'
import { MdWork } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {

    let workIconStyles = {background : "#06D6A0"};
    let schoolIconStyles = {}

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
                "During my role as a chemist at OnSite Environmental in Redmond, WA, I was actively involved in the analysis of environmental samples. Employing advanced techniques, I performed extractions for various substances, tailoring my methods to meet client specifications and the nature of the samples, including soil, solid, oil, and liquid. I ensured strict adherence to regulations during the handling and disposal of hazardous waste, carefully preparing waste drums for proper disposal. Additionally, I conducted tests on different compounds, paying close attention to their distinct behaviors. To maintain data accuracy, I implemented quality control measures for our instruments. My dedication to precision and compliance significantly contributed to OnSite Environmental's endeavors in environmental analysis and regulatory adherence.",
            date: "October 2019 - April 2020",
            icon: "work",
        },
        {
            id: 4,
            title: "Herrera Environmental | Environmental Scientist",
            location: <FaLocationDot/> && "Seattle, WA",
            description:
                "While working as an Environmental Scientist at Herrera Environmental, my main task involved investigating hydrology and soil science in the department. I specifically focused on identifying pollutants, especially nutrients, causing problems in local streams and bodies of water. I contributed to evaluating sites and offering practical solutions to address environmental issues, directly influencing our clients' projects. Additionally, I conducted monitoring of ground and surface water and analyzed sediment, ensuring attention to detail and adherence to quality control measures to meet client deadlines. These experiences deepened my commitment to finding practical and sustainable solutions for environmental challenges. ",
            date: "January 2020 - July 2021",
            icon: "work",
        },
        {
            id: 5,
            title: "Environmental Science Associates | Biologist/Wetland Scientist",
            location: <FaLocationDot/> && "Seattle, WA",
            description:
                "My time at Environmental Science Associates was truly rewarding. I delved into assessing streams, surveying wildlife, and mapping wetlands for over 100 projects. Leading habitat monitoring in the beautiful landscapes of Washington became a personal passion, with the joy of witnessing vibrant vegetation and new wildlife habitats within just two years. Working closely with clients involved more than professional exchanges; it was about understanding their concerns and finding personalized solutions to environmental challenges. Collaboration with my fantastic team was at the core of our success, tackling technical puzzles and logistical details together. I enjoyed collecting and interpreting survey data, turning it into reports that shared the story of our environmental efforts and contributed to responsible worksites. Being certified as a CESCL and a Trained User of the Revised Washington State Wetland Rating System showcased my commitment to staying informed. One standout experience was contributing to the Bonneville Power Administration project, exploring a 60-mile corridor and co-authoring a report that added a personal touch to its success.",
            date: "February 2021 - May 2023",
            icon: "work",
        },
        {
            id: 6,
            title: "Full-Stack Software Developer",
            location: <FaLocationDot/> && "Seattle, WA",
            description:
                "I am excited to embark on my journey as a Full-Stack Engineer, and I am grateful that my passion and career are converging at this crucial point in my professional path. Attending Coding Dojo allowed me to master three full stacks of programming languages—Python, JavaScript, and C#—highlighting the significance of the challenges and experiences that have shaped my current position. It's important to note that my decision to enter the field of software development reflects a deliberate choice to change careers. I am eagerly anticipating the opportunities for growth and development that lie ahead.",
            date: "May 2023 - present",
            icon: "code",
        },
    ];

    return (
        <div>
            <h1>Timeline</h1>
            <VerticalTimeline>
                {
                timelineElements.map((element) => {
let isWorkIcon = element.icon === "work";
                    return (
                        <VerticalTimelineElement
                        key={element.key}
                        date={element.data}
                        dateClassName ="date"
                        iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                        >

                        </VerticalTimelineElement>
                    )})
                }
            </VerticalTimeline>
        </div>
    )
}

export default Timeline