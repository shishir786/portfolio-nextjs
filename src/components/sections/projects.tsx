"use client"

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import LoaderProject from '../LoaderProject'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Employee Management System FrontEnd",
      description: "The Online Employee Management System FrontEnd Build with Next Js Rest API",
      image: "/images/EMS-frontend.png",
      link: "https://ems-next-js.vercel.app/"
    },
    {
      title: "Employee Management System BackEnd",
      description: "Employee Management System BackEnd Build with Nest Js and PostgresSQL",
      image: "/images/EMS-Nest.jpg",
      link: "https://github.com/shishir786/employee-management-system-Nest-Js.git"
    },
    {
      title: "Employee Management System Spring Boot BackEnd",
      description: "Employee Management System BackEnd Build with Java Spring Boot and PostgresSQL",
      image: "/images/EMS-springboot.png",
      link: "https://github.com/shishir786/employee-management-system-spring-boot.git"
    },
    {
      title: "Tech Shop",
      description: "Tech Shop Website using Html, CSS, JavaScript, PHP and MySQL as database",
      image: "/images/techshop.jpg",
      link: "https://github.com/shishir786/Online-Tech-Shop.git"
    },
    {
      title: "Restaurant Management System",
      description: "The Restaurant Management System is a desktop application Built with C# Forms and the .NET Framework 4.72",
      image: "/images/resturent.jpg",
      link: "https://github.com/shishir786/Resturent-Manegement-System.git"
    },
    {
      title: "Tech Shop Java Project",
      description: "The Tech Shop Java Project is a simple yet comprehensive shopping and inventory management system built using Java",
      image: "/images/techjava.jpg",
      link: "https://github.com/shishir786/Shop-java-project.git"
    },
    {
      title: "Train Journey View",
      description: "This project simulates a train journey using OpenGL, creating a visually engaging 3D environment",
      image: "/images/train.png",
      link: "https://github.com/shishir786/Train-journy-view-using-open_gl-.git"
    },
    {
      title: "Tour Data Collect",
      description: "This project helps store and process travel details efficiently using PHP and MySQL as database",
      image: "/images/tour.jpg",
      link: "https://github.com/shishir786/Tour-Data-Collect.git"
    }
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900

  return (
    <>
      <section id="projects" className="projects" style={{ background: 'var(--bg-color)', paddingBottom: '10rem' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="heading"
          style={{
            marginBottom: '4rem',
            fontSize: '4.5rem',
            textAlign: 'center',
            color: 'var(--text-color)'
          }}
        >
          Latest <span style={{ color: 'var(--main-color)' }}>Projects</span>
        </motion.h2>

        <div
          className="projects-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            alignItems: 'center',
            gap: '2.5rem'
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="projects-box"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (isMobile) setActiveIndex(activeIndex === index ? null : index)
              }}
              onMouseLeave={() => {
                if (isMobile) setActiveIndex(null)
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: '0.5s ease'
                }}
              />
              <div
                className={`projects-layer${isMobile && activeIndex === index ? ' visible' : ''}`}
              >
                <div className="projects-layer-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link redesigned bottom-right"
                  onClick={e => { e.stopPropagation(); }}
                >
                  <ArrowUpRight size={26} />
                </a>
              </div>
            </motion.div>
          ))}
          <div className="projects-box work-in-progress-box">
            <div className="projects-layer visible">
              <div className="projects-layer-content">
                <LoaderProject />
                <div className="work-in-progress-text">Work in progress ...</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
          .projects-box:hover .projects-layer,
          .projects-layer.visible {
            opacity: 1 !important;
            z-index: 10;
          }
          .projects-layer {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
            opacity: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: opacity 0.5s ease;
            z-index: 10;
          }
          .projects-layer-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 2.5rem 2rem 1.5rem 2rem;
          }
          .projects-layer-content h4 {
            font-size: 2.4rem;
            font-weight: 700;
            margin-bottom: 1.2rem;
            color: inherit;
            text-shadow: 0 2px 8px rgba(0,0,0,0.25);
          }
          .projects-layer-content p {
            font-size: 1.4rem;
            color: inherit;
            max-width: 90%;
            margin: 0 auto 0.5rem auto;
            text-shadow: 0 2px 8px rgba(0,0,0,0.18);
          }
          .project-link.redesigned.bottom-right {
            left: auto;
            right: 2.2rem;
            bottom: 2.2rem;
            transform: none;
          }
          .project-link.redesigned {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 50%;
            bottom: 2.2rem;
            transform: translateX(-50%);
            width: 3.8rem;
            height: 3.8rem;
            background: rgba(30, 30, 30, 0.55);
            border-radius: 50%;
            box-shadow: 0 4px 16px rgba(0,0,0,0.18);
            color: #fff;
            z-index: 2;
            border: 2px solid rgba(255,255,255,0.7);
            transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
          }
          .project-link.redesigned:hover {
            background: rgba(30, 30, 30, 0.85);
            box-shadow: 0 8px 24px rgba(0,0,0,0.28);
            transform: translateX(-50%) scale(1.08);
          }
          @media (max-width: 1200px) {
            .projects-container {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 900px) {
            .projects-container {
              grid-template-columns: 1fr !important;
            }
            .projects-box {
              min-width: 0;
            }
          }
          @media (max-width: 600px) {
            .projects-layer-content h4 {
              font-size: 1.5rem !important;
            }
            .projects-layer-content p {
              font-size: 1rem !important;
            }
            .project-link.redesigned.bottom-right {
              right: 1.2rem !important;
              bottom: 1.2rem !important;
            }
          }
          .projects-box {
            min-width: 0;
            width: 100%;
            max-width: 100%;
            min-height: 220px !important;
            height: 220px !important;
          }
          .projects-box img {
            height: 220px !important;
            min-height: 220px !important;
            max-height: 220px !important;
            object-fit: cover;
          }
          .projects-box.work-in-progress-box,
          .projects-box.work-in-progress-box .projects-layer {
            background: #A2A8D3 !important;
            background-image: none !important;
          }
          .work-in-progress-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
          }
          .work-in-progress-text {
            font-weight: 700;
            font-size: 1.6rem;
            color: black;
            text-align: center;
            margin-top: 1.2rem;
          }
        `}</style>
    </>
  )
}
