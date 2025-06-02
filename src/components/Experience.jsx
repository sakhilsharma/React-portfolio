import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [

        {
            title: "Front-End Intern",
            company: "Cognifyz Technologies",
            duration: "13 December,2024 - ongoing",
            description: [
                "Built responsive websites using HTML, CSS, and JavaScript",
                "Working with APIs and handled data integration",
                "Collaborated with cross-functional teams on various projects",
                "Enhancing User Experience"
            ],
            link: "https://www.linkedin.com/posts/sakhil-sharma-developer_internship-cognifyz-cognifztech-activity-7276797669849645057-hj1v?utm_source=share&utm_medium=member_desktop",
            comp_link : "https://cognifyz.com/"
        },
        {
            title: "Full Stack Intern",
            company: "Coreline Solutions",
            duration: "Currently Working",
            description: [
                "Developing scalable web applications using MERN stack",
                "Implementing RESTful APIs and ensuring seamless frontend-backend integration",
                "Managing databases with MongoDB and optimizing queries",
                "Collaborating with UI/UX designers to improve user experience"
            ],
            link: "", // Replace with your actual LinkedIn post or profile link if available
              comp_link : "https://www.corelinesolutions.in/"
        }

    ];

    return (
        <section className="experience-container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <div className="card experience-card" key={index}>
                        <h3>{exp.title}</h3>
                        <div className="company">{exp.company}  <a
                            href={exp.comp_link  ? exp.comp_link  : "#"}
                            onClick={!exp.comp_link  ? () => alert("Updating Soon...") : undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            🔗 
                        </a></div>
                        <div className="duration">{exp.duration}</div>
                        <div className="description">
                            <ul>
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="linkToLinkdIn">
                            <a
                                href={exp.link ? exp.link : "#"}
                                onClick={!exp.link ? () => alert("Updating Soon...") : undefined}

                            >
                                View Post
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience; 