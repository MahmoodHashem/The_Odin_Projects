/* eslint-disable react/prop-types */

export default function Experience(props) {
    return (
        <section className="experineces">
            <h2>Expereinces</h2>
            <div className="jobs">
                
                {props.data.experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="job-description">
                        <div className="company">
                            <h3>{exp.company}</h3>
                            <p className="date">{exp.date}</p>
                        </div>
                        <div className="position">
                            <h4>{exp.position}</h4>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}