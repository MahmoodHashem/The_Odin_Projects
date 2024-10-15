/* eslint-disable react/prop-types */

import { useState } from 'react'

import up from '../assets/images/up.png'
import down from '../assets/images/down.png'
import add from '../assets/images/add.png'

export default function Forms(props) {

    const [isCollapse, setIsCollapse] = useState(false);




    const clearForm = () => {
        props.setData({
            personal: {
                name: "",
                email: '',
                phone: '',
                linkedinLink: '',
                githubLink: '',
                collapse: false
            },
            education: [
                {
                    major: '',
                    startDate: '',
                    endDate: '',
                    universityName: "",
                    faculty: "",
                    location: "",
                    collapse: true
                }
            ],
            skills: [
                { title: '', category: '', collapse: false },


            ],
            experiences: [
                {
                    company: '',
                    position: '',
                    date: '',
                    description: '',
                    collapse: false
                },


            ],
            projects: [
                {
                    name: '',
                    tools: '',
                    description: '',
                    liveLink: '',
                    repoLink: '',
                    collapse: false,
                },

            ]
        })
    }

    const reloadExample = () => {
        props.setData({
            personal: {
                name: "Mahmood Hashemi",
                email: 'shmahmoodhashemi132@gmail.com',
                phone: '+93729034586',
                linkedinLink: 'https://www.linkedin.com/in/shah-mahmood-hashemi-55172a276/',
                githubLink: 'https://github.com/MahmoodHashem/',
                collapse: true
            },
            education: [
                {
                    major: 'Bachelor of Computer Science',
                    startDate: '2022',
                    endDate: '2026',
                    universityName: "Herat University",
                    faculty: "Sofware Engineering",
                    location: "Herat, Afghanistan",
                    collapse: true
                }
            ],
            skills: [
                { title: 'Java', category: 'Programming Language', collapse: true },
                { title: 'C', category: 'Programming Language', collapse: true },
                { title: 'Dart', category: 'Programming Language', collapse: true },
                { title: 'JavaScript', category: 'Programming Language', collapse: true },
                { title: 'HTML', category: 'Programming Language', collapse: true },

                { title: 'CSS', category: 'Programming Language', collapse: true },
                { title: 'Flutter', category: 'Framework', collapse: true },
                { title: 'React', category: 'Framework', collapse: true },
                { title: 'Tailwind CSS', category: 'Framework', collapse: true },
                { title: 'Bootsrap', category: 'Framework', collapse: true },
                { title: 'JQuiry', category: 'Library', collapse: true },
                { title: 'Git', category: 'Tools', collapse: true },
                { title: 'Github', category: 'Tools', collapse: true },
                { title: 'VScode', category: 'Tools', collapse: true },

            ],
            experiences: [
                {
                    company: 'Freelancer',
                    position: 'Web Developer',
                    date: '2024 - present',
                    description: 'Developed and maintained responsive websites and web applications for a diverse range of clients, ensuring optimal performance and user experience.\nImplemented SEO best practices to enhance website visibility and search engine rankings, resulting in increased traffic and user engagement.\nUtilized version control systems like Git for efficient project management and collaboration.',
                    collapse: true
                },
                {
                    company: 'Wassa',
                    position: 'Mobile Developer',
                    date: '2022 - 2023',
                    description: 'Developed and maintained mobile applications for both iOS and Android platforms using Flutter and Dart.\n Implemented user interface designs and ensured a consistent and intuitive user experience across mobile platforms.\n Participated in the full software development life cycle, including prototyping, coding, testing, and deployment.',
                    collapse: true
                },

            ],
            projects: [
                {
                    name: 'Github finder',
                    tools: 'React, Javascript, HTML, CSS',
                    description: 'A simple and interactive web application that allows users to search for GitHub profiles and view relevant information about the user, such as their repositories, followers, and more. The app also features a dark mode for enhanced user experience.',
                    liveLink: 'https://github-finder-zeta-sepia.vercel.app/',
                    repoLink: 'https://github.com/MahmoodHashem/beginner-react-projects/tree/main/github-user-search',
                    collapse: true
                },
                {
                    name: 'Todo App',
                    tools: 'Javascript, HTML, CSS',
                    description: 'In this to-do app, users can enjoy a responsive layout that adapts to any device, along with hover states for interactive elements.They can easily add, mark, delete, and filter tasks, as well as clear completed items, all while toggling between light and dark  modes. The app also features a drag-and-drop function forreordering tasks, enhancing user customization and convenience.',
                    liveLink: 'https://mahmoodhashem.github.io/Mentor-Challanges/todo-app/index.html',
                    repoLink: 'https://github.com/MahmoodHashem/Mentor-Challanges/tree/main/todo-app',
                    collapse: true
                }
            ]
        })
    }

    const handleCollapse = () => {
        setIsCollapse(prev => !prev)
    }

    const togglePeronal = () => {
        props.setData(prev => ({
            ...prev,
            personal: {
                ...prev.personal,
                collapse: !prev.personal['collapse']
            }
        }));

    };


    const handlePersonalChange = (event) => {
        const { name, value } = event.target;
        props.setData(prev => ({
            ...prev,
            personal: {
                ...prev.personal,
                [name]: value
            }
        }));
    };



    const toggleSkill = (index) => {
        const newSkills = [...props.data.skills];
        newSkills[index] = {
            ...newSkills[index],
            collapse: !newSkills[index].collapse,
        };
        props.setData(prev => (
            {
                ...prev,
                skills: newSkills
            }
        ))
    }

    const handleSkillChange = (index, event) => {
        const { name, value } = event.target;
        const newSkills = [...props.data.skills];
        newSkills[index] = {
            ...newSkills[index],
            [name]: value
        };
        props.setData(prev => ({ ...prev, skills: newSkills }));
    };

    const handleAddSkill = () => {
        props.setData(prev => ({
            ...prev,
            skills: [
                ...prev.skills,
                { title: '', category: '', collapse: false }
            ]
        }));
    };

    const handleRemoveSkill = (index) => {
        const newSkills = props.data.skills.filter((_, i) => i !== index);
        props.setData(prev => ({ ...prev, skills: newSkills }));
    };





    const handleEducationChange = (index, event) => {
        const { name, value } = event.target;
        const newEducation = [...props.data.education];
        newEducation[index] = {
            ...newEducation[index],
            [name]: value
        };
        props.setData(prev => ({ ...prev, education: newEducation }));
    };

    const toggleEducation = (index) => {

        const newEducation = [...props.data.education];
        newEducation[index] = {
            ...newEducation[index],
            collapse: !newEducation[index].collapse,
        };
        props.setData(prev => (
            {
                ...prev,
                education: newEducation
            }
        ))
    }

    const handleAddEducation = () => {
        props.setData(prev => ({
            ...prev,
            education: [
                ...prev.education,
                { major: '', startDate: '', endDate: '', universityName: '', faculty: '', location: '' }
            ]
        }));
    };

    const handleRemoveEducation = (index) => {
        const newEducation = props.data.education.filter((_, i) => i !== index);
        props.setData(prev => ({ ...prev, education: newEducation }));
    };


    const handleExperienceChange = (index, event) => {
        const { name, value } = event.target;
        const newExperiences = [...props.data.experiences];
        newExperiences[index] = {
            ...newExperiences[index],
            [name]: value
        };
        props.setData(prev => ({ ...prev, experiences: newExperiences }));
    };

    const toggleExperience = (index) => {

        const newExperience = [...props.data.experiences];
        newExperience[index] = {
            ...newExperience[index],
            collapse: !newExperience[index].collapse,
        };
        props.setData(prev => (
            {
                ...prev,
                experiences: newExperience
            }
        ))
    }


    const handleAddExperience = () => {
        props.setData(prev => ({
            ...prev,
            experiences: [
                ...prev.experiences,
                { company: '', position: '', startDate: '', endDate: '', description: '' }
            ]
        }));
    };

    const handleRemoveExperience = (index) => {
        const newExperiences = props.data.experiences.filter((_, i) => i !== index);
        props.setData(prev => ({ ...prev, experiences: newExperiences }));
    };


    const handleProjectChange = (index, event) => {
        const { name, value } = event.target;
        const newProjects = [...props.data.projects];
        newProjects[index] = {
            ...newProjects[index],
            [name]: value
        };
        props.setData(prev => ({ ...prev, projects: newProjects }));
    };

    const toggleProjects = (index) => {

        const newProjects = [...props.data.projects];
        newProjects[index] = {
            ...newProjects[index],
            collapse: !newProjects[index].collapse,
        };
        props.setData(prev => (
            {
                ...prev,
                projects: newProjects
            }
        ))
    }


    const handleAddProject = () => {
        props.setData(prev => ({
            ...prev,
            projects: [
                ...prev.projects,
                { name: '', tools: '', description: '', liveLink: '', repoLink: '' }
            ]
        }));
    };

    const handleRemoveProject = (index) => {
        const newProjects = props.data.projects.filter((_, i) => i !== index);
        props.setData(prev => ({ ...prev, projects: newProjects }));
    };



    return (
        <div>
            <div className="btns">
                <button className='btn' onClick={clearForm}  >Clear</button>
                <button className='btn' onClick={reloadExample}>Reload Example</button>
            </div>
            <form action="" className="personal-form form">
                <h2 className='toggle-btn' onClick={togglePeronal}>Personal Details{!props.data.personal.collapse ? <img src={up} className='toggle-icon' alt="up" /> : <img className='toggle-icon' src={down} alt="down" />}</h2>
                {!props.data.personal.collapse && <>
                    <div className="input-control">
                        <label htmlFor="name">Full name</label>
                        <input type="text"
                            id="name"
                            name="name"
                            value={props.data.personal.name}
                            onChange={handlePersonalChange}
                            required />
                    </div>
                    <div className="input-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={props.data.personal.email} onChange={handlePersonalChange} required />
                    </div>
                    <div className="input-control">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" value={props.data.personal.phone} onChange={handlePersonalChange} />
                    </div>

                    <div className="input-control">
                        <label htmlFor="linkedin">Linkedin</label>
                        <input
                            type="url"
                            id="linkedin"
                            name="linkedinLink"
                            placeholder="www.linkedin.com/your username"
                            value={props.data.personal.linkedinLink}
                            onChange={handlePersonalChange}
                        />
                    </div>
                    <div className="input-control">
                        <label htmlFor="github">Github</label>
                        <input
                            type="url"
                            id="github"
                            placeholder="www.github.com/your username"
                            name="githubLink"
                            value={props.data.personal.githubLink}
                            onChange={handlePersonalChange}
                        />
                    </div>
                </>}
            </form>
            <form className="skills-form form">
                <h2 className='toggle-btn' onClick={handleCollapse} >Skills Details{!isCollapse ? <img className='toggle-icon' src={up} alt="up" /> : <img className='toggle-icon' src={down} alt="down" />}</h2>

                {!isCollapse && props.data.skills.map((skill, index) => (
                    <>
                        <button
                            className='toggle-btn btn'
                            type='button'
                            onClick={() => toggleSkill(index)} >
                            {skill.title || "Your skill"} {!skill.collapse ?
                                <img className='toggle-icon' src={up} alt="up" /> :
                                <img className='toggle-icon' src={down} alt="down" />}

                        </button>



                        {!skill.collapse && <div key={index} className="skill-entry">
                            <div className="input-control">
                                <label htmlFor={`skill-title-${index}`}>Skill</label>
                                <input
                                    type="text"
                                    id={`skill-title-${index}`}
                                    name="title"
                                    value={skill.title}
                                    onChange={(event) => handleSkillChange(index, event)}
                                />
                            </div>
                            <div className="input-control">
                                <label htmlFor={`skill-category-${index}`}>Category</label>
                                <select
                                    name="category"
                                    value={skill.category}
                                    onChange={(event) => handleSkillChange(index, event)}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="Programming Language">Programming Language</option>
                                    <option value="Framework">Framework</option>
                                    <option value="Database">Database</option>
                                    <option value="Tools">Tools</option>
                                </select>
                            </div>
                            <button className='remove-btn btn' type="button" onClick={() => handleRemoveSkill(index)}>Remove</button>
                        </div>}
                    </>
                ))}
                <button type="button" className='add-btn btn' onClick={handleAddSkill}><img className='add-icon' src={add} alt="" /></button>
            </form>
            <form className="education-form form">
                <h2>Education Details</h2>
                {props.data.education.map((edu, index) => (
                    <>
                        <button className='toggle-btn btn' type='button' onClick={() => toggleEducation(index)}>{edu.major || "Your Education"} {!edu.collapse ? <img className='toggle-icon' src={up} alt="up" /> : <img className='toggle-icon' src={down} alt="down" />} </button>
                        {!edu.collapse && <div key={index} className="education-entry">
                            <div className="input-control">
                                <label htmlFor={`major-${index}`}>Major</label>
                                <input
                                    type="text"
                                    id={`major-${index}`}
                                    name="major"
                                    value={edu.major}
                                    onChange={(event) => handleEducationChange(index, event)}
                                />
                            </div>

                            <div className="input-control">
                                <label htmlFor={`start-date-${index}`}>Start Date</label>
                                <input
                                    type="date"
                                    id={`start-date-${index}`}
                                    name="startDate"
                                    value={edu.startDate}
                                    onChange={(event) => handleEducationChange(index, event)}
                                    required
                                />
                            </div>
                            <div className="input-control">
                                <label htmlFor={`end-date-${index}`}>End Date</label>
                                <input
                                    type="date"
                                    id={`end-date-${index}`}
                                    name="endDate"
                                    value={edu.endDate}
                                    onChange={(event) => handleEducationChange(index, event)}
                                    required
                                />
                            </div>

                            <div className="input-control">
                                <label htmlFor={`university-${index}`}>University</label>
                                <input
                                    type="text"
                                    id={`university-${index}`}
                                    name="universityName"
                                    value={edu.universityName}
                                    onChange={(event) => handleEducationChange(index, event)}
                                    required
                                />
                            </div>

                            <div className="input-control">
                                <label htmlFor={`faculty-${index}`}>Faculty</label>
                                <input
                                    type="text"
                                    id={`faculty-${index}`}
                                    name="faculty"
                                    value={edu.faculty}
                                    onChange={(event) => handleEducationChange(index, event)}
                                />
                            </div>

                            <div className="input-control">
                                <label htmlFor={`location-${index}`}>Location</label>
                                <input
                                    type="text"
                                    id={`location-${index}`}
                                    name="location"
                                    value={edu.location}
                                    onChange={(event) => handleEducationChange(index, event)}
                                />
                            </div>
                            <button className='remove-btn btn' type="button" onClick={() => handleRemoveEducation(index)}>Remove</button>
                        </div>}
                    </>
                ))}
                <button className='add-btn btn' type="button" onClick={handleAddEducation}><img className='add-icon' src={add} alt="add" /></button>
            </form>

            <form className="experience-form form">
                <h2>Experience Details</h2>
                {props.data.experiences.map((exp, index) => (
                    <>
                        <button className='toggle-btn btn' type='button' onClick={() => toggleExperience(index)} >{exp.company || "Your experience"}{!exp.collapse ? <img className='toggle-icon' src={up} alt="up" /> : <img className='toggle-icon' src={down} alt="down" />}</button>
                        {!exp.collapse &&
                            <div key={index} className="experience-entry">
                                <div className="input-control">
                                    <label htmlFor={`company-${index}`}>Company</label>
                                    <input
                                        type="text"
                                        id={`company-${index}`}
                                        name="company"
                                        value={exp.company}
                                        onChange={(event) => handleExperienceChange(index, event)}
                                    />
                                </div>
                                <div className="input-control">
                                    <label htmlFor={`position-${index}`}>Position</label>
                                    <input
                                        type="text"
                                        id={`position-${index}`}
                                        name="position"
                                        value={exp.position}
                                        onChange={(event) => handleExperienceChange(index, event)}
                                    />
                                </div>
                                <div className="input-control">
                                    <label htmlFor={`exp-start-date-${index}`}>Duration Date</label>
                                    <input
                                        type="datetime"
                                        id={`exp-start-date-${index}`}
                                        name="date"
                                        value={exp.date}
                                        onChange={(event) => handleExperienceChange(index, event)}
                                    />
                                </div>

                                <div className="input-control">
                                    <label htmlFor={`description-${index}`}>Description</label>
                                    <textarea
                                        id={`description-${index}`}
                                        name="description"
                                        value={exp.description}
                                        onChange={(event) => handleExperienceChange(index, event)}
                                    />
                                </div>
                                <button className='remove-btn btn' type="button" onClick={() => handleRemoveExperience(index)}>Remove</button>
                            </div>}
                    </>
                ))}
                <button className='add-btn btn' type="button" onClick={handleAddExperience}><img className='add-icon' src={add} alt="add" /></button>
            </form>

            <form className="projects-form form">
                <h2>Projects Details</h2>
                {props.data.projects.map((proj, index) => (

                    <>
                        <button className='toggle-btn btn' type='button' onClick={() => toggleProjects(index)} >{proj.name || "Your project"}{!proj.collapse ? <img className='toggle-icon' src={up} alt="up" /> : <img className='toggle-icon' src={down} alt="down" />}</button>
                        {
                            !proj.collapse &&
                            <div key={index} className="project-entry">
                                <div className="input-control">
                                    <label htmlFor={`project-name-${index}`}>Project Name</label>
                                    <input
                                        type="text"
                                        id={`project-name-${index}`}
                                        name="name"
                                        value={proj.name}
                                        onChange={(event) => handleProjectChange(index, event)}
                                    />
                                </div>
                                <div className="input-control">
                                    <label htmlFor={`tools-${index}`}>Tools Used</label>
                                    <input
                                        type="text"
                                        id={`tools-${index}`}
                                        name="tools"
                                        value={proj.tools}
                                        onChange={(event) => handleProjectChange(index, event)}
                                    />
                                </div>
                                <div className="input-control">
                                    <label htmlFor={`project-description-${index}`}>Description</label>
                                    <textarea
                                        id={`project-description-${index}`}
                                        name="description"
                                        value={proj.description}
                                        onChange={(event) => handleProjectChange(index, event)}
                                    />
                                </div>
                                <div className="input-control">
                                    <label htmlFor={`liveLink-${index}`}>Live Link</label>
                                    <input
                                        type="url"
                                        id={`liveLink-${index}`}
                                        name="liveLink"
                                        value={proj.liveLink}
                                        onChange={(event) => handleProjectChange(index, event)}
                                    />
                                </div>
                                <div className="input-control">
                                    <label htmlFor={`repoLink-${index}`}>Repo Link</label>
                                    <input
                                        type="url"
                                        id={`repoLink-${index}`}
                                        name="repoLink"
                                        value={proj.repoLink}
                                        onChange={(event) => handleProjectChange(index, event)}
                                    />
                                </div>
                                <button className='btn remove-btn' type="button" onClick={() => handleRemoveProject(index)}>Remove</button>
                            </div>
                        }
                    </>
                ))}
                <button className='add-btn btn' type="button" onClick={handleAddProject}><img className='add-icon' src={add} alt="add" /></button>
            </form>


        </div>
    )
}