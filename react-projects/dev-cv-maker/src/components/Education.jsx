/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function Education(props) {
    return (
        <section className="education">
            <h2>Eduaction</h2>
            {
                props.data.education.map((education, index) => (
                    <>
                        <div className="major">
                            <h3>{education.major}</h3>
                            {education.startDate && <p>{new Date(
                               education.startDate
                            ).toLocaleDateString("en-GB", {
                                month: "short",
                                year: "numeric",
                            })
                            } - {new Date(
                                education.endDate
                             ).toLocaleDateString("en-GB", {
                                 month: "short",
                                 year: "numeric",
                             })}</p>}
                        </div>
                        {
                            education.universityName && education.faculty &&
                            <p>{education.universityName} ,  {education.faculty} faculty </p>}
                        <p>{education.location}</p>
                    </>
                ))
            }
        </section>
    )
}