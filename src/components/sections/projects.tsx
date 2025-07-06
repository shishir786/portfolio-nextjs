"use client"

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Employee Management System FrontEnd",
      description: "The Online Employee Management System FrontEnd Build with Next Js.",
      image: "/images/EMS-frontend.png",
      link: "https://github.com/shishir786/EMS-frontend-Next-Js.git"
    },
    {
      title: "Employee Management System BackEnd",
      description: "Employee Management System BackEnd Build with Nest Js.",
      image: "/images/EMS-Nest.jpg",
      link: "https://github.com/shishir786/employee-management-system-Nest-Js.git"
    },
    {
      title: "Employee Management System Spring Boot BackEnd",
      description: "Employee Management System BackEnd Build with Java Spring Boot.",
      image: "/images/EMS-springboot.png",
      link: "https://github.com/shishir786/employee-management-system-spring-boot.git"
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
            style={{
              position: 'relative',
              display: 'flex',
              borderRadius: '2rem',
              boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
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
              className="projects-layer"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(rgba(20, 20, 20, 0.75), var(--main-color))',
                color: 'var(--white-color)',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '0 4rem',
                transition: 'opacity 0.5s ease',
                opacity: isMobile ? (activeIndex === index ? 1 : 0) : undefined,
                pointerEvents: isMobile ? (activeIndex === index ? 'auto' : 'none') : undefined
              }}
            >
              <h4 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>{project.title}</h4>
              <p style={{ fontSize: '1.6rem', margin: '0.3rem 0 1rem', textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '5rem',
                  height: '5rem',
                  background: 'var(--white-color)',
                  borderRadius: '50%',
                  margin: '0 auto',
                  textDecoration: 'none',
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                  transition: 'transform 0.2s',
                  transform: 'scale(1)'
                }}
                className="project-link"
              >
                <ExternalLink size={24} style={{ color: 'var(--main-color)', fontWeight: 700 }} />
                <span
                  className="link-text"
                  style={{
                    position: 'absolute',
                    bottom: '-3rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'var(--white-color)',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.5px',
                    textShadow: '0 2px 8px rgba(0,0,0,0.15)'
                  }}
                >
                  Open
                </span>
              </a>
            </div>
          </motion.div>
        ))}

      </div>
      <style jsx>{`
        .projects-box:hover .projects-layer {
          opacity: 1 !important;
          pointer-events: auto;
        }
        .projects-layer {
          opacity: 0;
          pointer-events: none;
        }
        .projects-box:hover .projects-layer .project-link {
          transform: scale(1.1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
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
          .projects-layer {
            padding: 0 1.2rem;
          }
          .projects-box {
            border-radius: 1rem;
          }
          .projects-layer h4 {
            font-size: 2rem !important;
          }
          .projects-layer p {
            font-size: 1.1rem !important;
          }
          .project-link {
            width: 3.5rem !important;
            height: 3.5rem !important;
          }
          .link-text {
            font-size: 1rem !important;
            bottom: -2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
