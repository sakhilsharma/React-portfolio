import "./About.css";
export default function About() {
    return (
        <div className="about">
            <div className="text-section card">
                <p>
                    My Name is Sakhil Sharma. Student at NIT Hamirpur, currently pursuing my 
                    <i><b> BTech</b></i> degree in Electronics and Communication Engineering.
                    Ever since I've been fascinated by technology and its endless possibilities,
                    I loved to design and craft websites.
                    From crafting elegant user interfaces <i><b>(UI)</b></i> to diving deep into
                    backend systems <i><b>(node.js,express.js,mongoDB)</b></i>,
                    every aspect of web development fuels my passion for creating digital experiences
                    that leave a lasting impact.
                    I'm always on the lookout for exciting opportunities to collaborate, learn, and grow.
                    Whether you're interested in discussing a project,
                    exploring potential partnerships, or simply sharing ideas.
                </p>
                
                <div className="achievements-section">
                    <h3>Key Achievement</h3>
                    <div className="achievement-card">
                        <h4>Smart India Hackathon 2024 - College Level Selection</h4>
                        <div className="achievement-details">
                            <p>
                                Successfully selected at the college level for the prestigious 
                                <span className="highlight"> Smart India Hackathon 2023</span>. As part of a 
                                <span className="highlight"> 6-member team</span>, I demonstrated:
                            </p>
                            <ul>
                                <li>Strong  team collaboration skills in a competitive environment</li>
                                <li>Innovative problem-solving approach to address real-world challenges</li>
                                <li>Effective communication and presentation skills during project pitching</li>
                                <li>Technical expertise in developing prototype solutions</li>
                                <li>Ability to work under pressure and meet strict deadlines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="media-card card">
                    <video width="600" height="360" controls loop >
                        <source src="vedio1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="media-card card full-length">
                    <img src="SIH.jpg" alt="profile" />
                </div>
            </div>
        </div>
    )
}