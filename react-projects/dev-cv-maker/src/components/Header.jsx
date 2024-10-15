/* eslint-disable react/prop-types */



import phone from '../assets/images/phone.png'
import github from '../assets/images/github.png'
import linkein from '../assets/images/linkedin.png'
import gmail from '../assets/images/gmail.png'

export default function Header(props) {
    console.log(props.data)
    let personal = props.data.personal;

    return (
        <header>
            <h1>{personal.name || "Your name"}</h1>
            <ul className="contacts">
               {personal.phone && <li className={`phone ${personal.phone ? "deactive" : ""}`}>
                    <img src={phone} alt="phone-icon" /><a href={`tel:${personal.phone}`} target='_blan'
                    >{personal.phone}</a
                    >
                </li>}
                {personal.linkedinLink && <li className="linkedin">
                    <img src={linkein} alt="linkedin-icon" /><a
                        href={personal.linkedinLink}
                        target="_blank"
                    >{"LinkedIn"}</a>
                </li>}
                {personal.email && <li className="gmail">
                    <img src={gmail} alt="gmail-icon" /><a
                        href={`mailto:${personal.email}`}
                        target="_blank"
                    >{personal.email}</a
                    >
                </li>}
                {personal.githubLink && <li className="github">
                    <img src={github} alt="github-icon" /><a
                        href={personal.githubLink}
                        target="_blank"
                    >Github</a
                    >
                </li>}
            </ul>
        </header>
    )
}