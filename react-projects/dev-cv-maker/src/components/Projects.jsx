/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from 'react'

export default function Projects(props) {

    // const [projects, setProjects] = useState([
    //     {
    //         name: "Github finder",
    //         tools: "React •  JavaScript •  CSS •  API",
    //         description: "A simple and interactive web application that allows users to search for GitHub profiles and view relevant information about the\n user, such as their repositories, followers, and more. The app also features a dark mode for enhanced user experience.",
    //         liveLink: "https://github-finder-zeta-sepia.vercel.app/",
    //         repoLink: "https://github.com/MahmoodHashem/beginner-react-projects/tree/main/github-user-search"

    //     }])


    // const handleChange = (index, event) => {
    //     const newExp = [...projects];
    //     newExp[index][event.target.name] = event.target.value;
    //     setProjects(newExp);

    //     console.log(index)
    // };

    // const handleAddSkill = () => {
    //     setProjects([...projects, {
    //         name: "",
    //         tools: "",
    //         description: "",
    //         liveLink: "",
    //         repoLink: ""
    //     }]);
    // };

    // const handleRemoveSkill = (index) => {
    //     const newProjects = projects.filter((_, i) => i !== index);
    //     setProjects(newProjects);
    // };
    return (
        <section className="projects-container">
            <section className="projects">
                <h2>Projects</h2>
                {
                    props.data.projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-description">
                            <h3>{project.name}</h3>
                            <h4>{project.tools}</h4>
                            <p>{project.description}</p>
                            <ul>
                               { project.name && project.tools && project.description && project.liveLink && <li>
                                     Live link: <a href={project.liveLink} target='_blank'>{project.name} live site</a>
                                </li> }
                               {project.name && project.tools && project.description && project.repoLink &&<li>
                                    Repo link: <a href={project.repoLink} target='_blank'>{project.name} Repo</a>
                                </li>}
                            </ul>
                           {project.name && <hr /> }
                        </div>
                    ))
                }
            </section>

        </section>
    )
}