import { useEffect, useState, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './home.css';
import VantaRings from './rings'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
export default function Home() {
 
  useEffect(() => {
    const typed = new Typed('.animate', {
      strings: ['Web Developer', "MERN Stack Developer", "Electronics Student"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
  
    return () => {
      typed.destroy();
    };
  }, []);
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);
  
  

  return (
    <>


 <VantaRings id="vanta-bg" />
      <div className="home-wrapper" >
       <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: { onClick: { enable: true }, onHover: { enable: true, mode: "bubble" }, resize: true },
              modes: { bubble: { distance: 200, duration: 2, opacity: 0.8, size: 8 } }
            },
            particles: {
              color: { value: "#ffffff" },
              links: { enable: false },
              move: {
                direction: "bottom-right",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: 6,
                straight: true,
              },
              number: { density: { enable: true, area: 800 }, value: 120 },
              opacity: { value: 0.3 },
              shape: { type: "star" },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
        />

        {/* Your existing content */}
        <div className="home-container">
          <div className="image-section">
            <div className="image-container">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="image2.jpg" alt="profile" />
                  </div>
                  <div className="flip-card-back">
                    <img src="newImage.jpg" alt="profile-back" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>SAKHIL SHARMA</h2>
            <p>I'm A <span className="animate"></span></p>
            <div className="resume-section">
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://drive.google.com/file/d/14nXsjLPxy8TBhC1jn__342NvdK4ZGv9R/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 p-1 rounded-md" style={{ padding: "1rem" }}>
                      <i class="fas fa-file-pdf"></i> RESUME
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Updated June 2025</p>
                </TooltipContent>
              </Tooltip>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
