import "./About.css";
import { FaMedal, FaLightbulb, FaCode, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const AchievementCard = ({ title, icon, date, highlights, points }) => (
  <motion.div
   className="
    achievement-card
    max-w-md
    p-4
    bg-gray-800
    bg-opacity-90
    rounded-lg
    border-2
    border-gray-600
    shadow-lg
    backdrop-blur-sm
    text-white
    transition
    duration-200
    hover:scale-105
    hover:border-green-400
    hover:shadow-[0_0_12px_rgba(74,222,128,0.8)]
    cursor-pointer
    select-none
  "
  whileHover={{ scale: 1.05 }}
>
  <div className="flex items-center gap-3 mb-2">
    <div className="text-2xl text-green-400">{icon}</div>
    <h4 className="text-lg font-semibold">{title}</h4>
  </div>
  <div className="achievement-details text-gray-300 text-sm">
    <p className="mb-2 flex items-center gap-2 text-green-300 font-medium">
      <FaCalendarAlt /> {date}
    </p>
    <p className="mb-3">{highlights}</p>
    <ul className="list-disc ml-5 space-y-1">
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
</motion.div>

);
export default function About({ title, icon, date, highlights, points }) {
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

  <div className="grid gap-6 md:grid-cols-2 mt-8 ">
          <AchievementCard
          title="Smart India Hackathon 2024 - College Level Selection"
          icon={<FaMedal  style={{ color: "#4ade80" , marginTop:"15px" }}/>}
          date="March 2024"
          highlights={
            <>
              Selected for <span className="font-semibold text-green-400">Smart India Hackathon 2023</span> as part of a{" "}
              <span className="font-semibold text-green-400">6-member team</span>.
            </>
          }
          points={[
            "Strong team collaboration skills in a competitive environment",
            "Innovative problem-solving approach to address real-world challenges",
            "Effective communication and presentation skills during project pitching",
            "Technical expertise in developing prototype solutions",
            "Ability to work under pressure and meet strict deadlines",
          ]}
        />

        <AchievementCard
          title="Electrothon 7.0 - National Hackathon (NIT Hamirpur)"
          icon={<FaLightbulb style={{ color: "#4ade80" }} />}
          date="April 2025"
          highlights={
            <>
              Participated in <span className="font-semibold text-green-400">Electrothon 7.0</span> organized by{" "}
              <span className="font-semibold text-green-400">NIT Hamirpur</span>.
            </>
          }
          points={[
            "Built and presented a full-stack web solution under time constraints",
            "Integrated APIs for real-time data features",
            "Designed a responsive UI with intuitive user flow",
            "Collaborated on planning, coding, and pitching",
            "Adapted quickly to evolving project requirements",
          ]}
        />
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
                <div className="media-card card ">
                    <img src="Electrothon &.0.jpg" alt="profile" />
                </div>
            </div>
        </div>
        
    )
}