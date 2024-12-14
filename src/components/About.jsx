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
                
            </div>
            <div className="info">
                <div className="media-card card">
                    <video width="600" height="360" controls loop >
                        <source src="vedio1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="media-card card sih-image">
                    <img  src="group.jpg" alt="group" />
                </div>
            </div>
        </div>
    )
}