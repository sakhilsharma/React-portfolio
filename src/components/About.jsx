import "./About.css";
import { FaMedal, FaLightbulb, FaCode, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import VantaHalo from './halo';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}
export default function About() {

  const array = [
    { src: "SIH.jpg", alt: "Smart India Hackathon" },
    { src: "Electrothon7.0.jpg", alt: "Electrothon 7.0" },
    { src: "group.jpg", alt: "group" },
    { src: "newImage.jpg", alt: "group" }

  ];
  return (
    <div className="about relative z-10">
      <VantaHalo id="#vanta-bg" />

      <div className="text-section text-[15px] card">
        <p>
          <h2 class="text-center underline decoration-green-500">About Me</h2>

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


            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue=""
            >
              <AccordionItem value="item-1">
                <AccordionTrigger><h2 className="text-white text-xl font-semibold mb-2">
                  Smart India Hackathon 2024 - College Level Selection
                </h2></AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="space-y-2 text-[15px] text-white">
                    <p>
                      Selected for <span className="italic font-medium text-green-400 text-[15px]">Smart India Hackathon 2023</span> as part of a{" "}
                      <span className="italic font-medium text-green-400 text-[15px]">6-member team</span>.
                    </p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Team collaboration</span> skills in a competitive environment</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Problem-solving</span> approach to address real-world challenges</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Communication and presentation</span> skills during project pitching</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Technical expertise</span> in developing prototype solutions</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Working under pressure</span> and meeting strict deadlines</p>
                  </div>


                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger><h2 className="text-white text-xl font-semibold mb-2">Electrothon 7.0 - National Hackathon (NIT Hamirpur)</h2></AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div className="space-y-2 text-[15px] text-white">
                    <p>
                      Participated in <span className="italic font-medium text-green-400 text-[15px]">Electrothon 7.0</span> organized by{" "}
                      <span className="italic font-medium text-green-400 text-[15px]">NIT Hamirpur</span>.
                    </p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Full Stack web solution</span> built and presented under time constraints</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">API integration</span> for real-time data features</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Responsive UI design</span> with intuitive user flow</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Team collaboration</span> on planning, coding, and pitching</p>
                    <p className="text-[15px] text-white">• <span className="italic text-green-400">Quick adaptability</span> to evolving project requirements</p>
                  </div>


                </AccordionContent>
              </AccordionItem>

            </Accordion>


          </div>
        </div>

      </div>
      <div className="info flex flex-col md:flex-row gap-8 items-center justify-center p-6">
        {/* Video Section */}
        <div className="media-card card max-w-md">
          <video width="400" height="225" controls loop className="rounded-lg shadow-lg w-full h-auto">
            <source src="vedio1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Carousel Section */}
        <div className="w-full max-w-[280px]">
          <Carousel className="w-full" plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}>
            <CarouselContent>
              {array.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-3">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>


    </div>

  )
}