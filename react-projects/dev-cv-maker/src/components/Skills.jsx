/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Skills(props) {
    // const [skills, setSkills] = useState([{ title: '', category: ''}]);

    // const handleChange = (index, event) => {
    //     const newSkills = [...skills];
    //     newSkills[index][event.target.name] = event.target.value;
    //     setSkills(newSkills);

    //     console.log(index)
    // };

    // const handleAddSkill = () => {
    //     setSkills([...skills, { title: '', category: '' }]);
    // };

    // const handleRemoveSkill = (index) => {
    //     const newSkills = skills.filter((_, i) => i !== index);
    //     setSkills(newSkills);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(skills);
    // };

    // Create a consolidated list of skills grouped by category
    const consolidatedSkills = props.data.skills.reduce((acc, skill) => {
        if (skill.title && skill.category) {
            if (!acc[skill.category]) {
                acc[skill.category] = [];
            }
            acc[skill.category].push(skill.title);
        }
        return acc;
    }, {});

    return (
        <section className="skills">
            <div className="show">
                <h2>SKILLS</h2>
                <ul>
                    {Object.entries(consolidatedSkills).map(([category, titles], index) => (
                        <li key={index}>
                            <strong>{category}</strong> | {titles.join(' • ')}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}