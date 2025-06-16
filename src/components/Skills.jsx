import "./Skills.css";
export default function Skills() {
    return (
        <div className="skills-container">
            <h2>My Skills</h2>

            <div className="skills-grid">
                {/* Frontend Skills */}
                <div className="skill-card frontend">
                    <h3>Frontend Development</h3>
                    <div className="skills-content">
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="HTML" />
                            <span>HTML5</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS" />
                            <span>CSS3</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="JavaScript" />
                            <span>JavaScript</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" />
                            <span>React.js</span>
                        </div>
                    </div>
                </div>

                {/* Backend Skills */}
                <div className="skill-card backend">
                    <h3>Backend Development</h3>
                    <div className="skills-content">
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="Node.js" />
                            <span>Node.js</span>
                        </div>
                        <div className="skill-item">
                            <img
                                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                                alt="Express.js"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span>Express.js</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" alt="MongoDB" />
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>

                {/* Frameworks & Tools */}
                <div className="skill-card frameworks">
                    <h3>Frameworks & Tools</h3>
                    <div className="skills-content">
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" alt="Tailwind" />
                            <span>Tailwind CSS</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="Git" />
                            <span>Git</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt="VS Code" />
                            <span>VS Code</span>
                        </div>
                        <div className="skill-item">
                            <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" alt="GSAP" />
                            <span>GSAP</span>
                        </div>
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="skill-card soft-skills">
                    <h3>Soft Skills</h3>
                    <div className="skills-content">
                        <div className="skill-item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/7991/7991055.png"
                                alt="Team Collaboration"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span>Team Collaboration</span>
                        </div>
                        <div className="skill-item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4233/4233839.png"
                                alt="Problem Solving"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span>Problem Solving</span>
                        </div>
                        <div className="skill-item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/6171/6171939.png"
                                alt="Communication"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span>Communication</span>
                        </div>
                        <div className="skill-item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4149/4149677.png"
                                alt="Time Management"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                            <span>Time Management</span>
                        </div>
                    </div>
                </div>
                {/* Languages */}
<div className="skill-card languages">
    <h3>Languages</h3>
    <div className="skills-content">
        <div className="skill-item">
            <img
                src="C++logo.png" // C++ icon (same style)
                alt="C++ Language"
               
            />
            <span>C/C++</span>
        </div>
    </div>
    <div className="leetcode-link" style={{ marginTop: '1rem' }}>
    <a
        href="https://leetcode.com/u/sakhil_123/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
            backgroundColor: '#FFA116', // LeetCode orange
            color: '#000',
            padding: '10px 16px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block',
            transition: 'background-color 0.3s ease'
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e59400')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#FFA116')}
    >
        View LeetCode Profile
    </a>
</div>

</div>

            </div>

           
        </div>
    )
}