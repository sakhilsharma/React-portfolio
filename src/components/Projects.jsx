import "./Projects.css";
export default function Projects() {
    const projects = [
        {
            title: "Gig-Connect",
            description: "Developed Gig-Connect, a centralized platform that connects both certified and uncertified workers with users seeking services, helping workers gain online visibility and credibility over time.",
            image: "gig.jpg", // Update the path if needed
            technologies: ["Node.js", "Express", "MongoDB", "EJS", "Gemini API"],
            githubLink: "https://github.com/sakhilsharma/Electrothon7.0", // Update if repo name differs
            liveLink: "", // Add live link if hosted
            features: [
                "✅ Profile Creation for Uncertified Workers: Allows individuals to build a digital presence with growing reputation via ratings.",
                "💬 Gemini API Integration: Enables intelligent user-worker interactions through chatbot support.",
                "👤 Worker Dashboard: Lets workers manage profiles, track ratings, and improve visibility based on feedback."
            ]
        },
        {
            title: "Portfolio Webiste",
            description: "Explore my portfolio to see a range of projects that demonstrate my skills and approach to web development. Each project showcases my ability to solve complex problems.",
            image: "image2.jpg",
            technologies: ["React", "GSAP"],
            githubLink: "https://sakhil-sharma.netlify.app/",
            liveLink: "https://sakhil-sharma.netlify.app/"
        },
        {
            title: "iNotebook",
            description: "A note taking website build to store your notes in your account",
            image: "/iNotebook.png",
            technologies: ["React", "Node.js", "MongoDB", "Bootstap"],
            githubLink: "https://github.com/sakhilsharma?tab=repositories",
            liveLink: "",
        },

        {
            title: "NewsRoot",
            description: "A news website build with React , API integration and Bootstrap",
            image: "/news.png",
            technologies: ["React", "API", "Bootstrap"],
            githubLink: "https://github.com/sakhilsharma/NewsMonkey",
            liveLink: "",
        },


        {
            title: " UMS(User-Management-System)",
            description: "UMS -It provides the necessary tools and functionalities to manage user information Add ,delete , update functionality to track user history with its status(active/inactive).",
            image: "/UMS.png",
            technologies: ["Node.js", "Express", "MongoDB", "EJS"],
            githubLink: "https://github.com/sakhilsharma/User-Management-System-Backend",
            liveLink: "",

        },
        {
            title: "UI Design",
            description: "This is a design that shows UI for shoe website created on figma.",
            image: "/shoes.png",
            technologies: ["Figma"],

        },
        {
            title: "Weather App",
            description: "This is a weather app which shows temperature, humidity and wind speed of corresponding place based on the API which fetches weather data.",
            image: "/WeatherApp.png",
            technologies: ["React", "API"],
            githubLink: "https://github.com/sakhilsharma/React_Project",
            liveLink: "https://sakhilsharma.github.io/Weather-API-JS/"
        },
        {
            title: "Random Quote Generator",
            description: "This Quote Generator Uses api.quotable.io/random and shows random quotes with name of author.Additionally it have per Day quote of 5 and after that an ending motivational line .Also one can tweet it over Tweeter by clicking on tweet button.",
            image: "/Quote.png",
            technologies: ["HTML", "CSS ", "JavaScript"],
            githubLink: "https://github.com/sakhilsharma/Random-Quote-Generator",
            liveLink: "https://sakhilsharma.github.io/Random-Quote-Generator/"
        },

    ];

    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                                    GitHub
                                </a>
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`live-link ${!project.liveLink && 'disabled'}`}
                                >
                                    {project.liveLink ? 'Live Demo' : 'Coming Soon'}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}