import Education from "./components/Education"
import Experience from "./components/Experience"
import Forms from "./components/Forms"
import Header from "./components/Header"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

import html2pdf from 'html2pdf.js'

import { useState } from 'react'
export default function App() {
  const [data, setData] = useState({
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
        startDate: '2022-1-1',
        endDate: '2026-2-1',
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
  });

  function downloadPDF() {
    const cv = document.querySelector(".cv");
    var opt = {
      margin: 0.5,
      filename: 'MYCV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().from(cv).set(opt).save();
  }

  return (
    <>
      <div className="cv">
        <button onClick={downloadPDF} > Download</button>
        <Header data={data} />
        <Skills data={data} />
        <Education data={data} />
        <Experience data={data} />
        <Projects data={data} />
      </div>
      <div className="forms">
        <Forms setData={setData} data={data} />
      </div>

    </>
  )
}