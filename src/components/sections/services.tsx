"use client"

import { motion } from 'framer-motion'
import { BarChart3, Code, Code2 } from 'lucide-react'
import { useState } from 'react'

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Web developer skilled in Nextjs, NestJs creating dynamic, responsive, and user-friendly websites."
    },
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Software developer skilled in building smart and efficient systems for businesses."
    },
    {
      icon: BarChart3,
      title: "AI & Data Analysis",
      description:
        "AI and Data Analysis skilled in machine learning, data processing, and insights generation."
    }
  ]

  const [activeService, setActiveService] = useState<number | null>(null)
  const [activeSkill, setActiveSkill] = useState<number | null>(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900

  return (
    <section id="services" className="services" style={{ background: 'var(--bg-color)', minHeight: 'auto', paddingBottom: '7rem' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading"
        style={{ marginBottom: '5rem', paddingBottom: '10px', fontSize: '4.5rem', textAlign: 'center', color: 'var(--text-color)' }}
      >
        My <span style={{ color: 'var(--main-color)' }}>Services</span>
      </motion.h2>

      <div
        className="services-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className={`services-box${isMobile && activeService === index ? ' active' : ''}`}
            style={{
              flex: '1 1 30rem',
              background: 'var(--bg-color)',
              padding: '3rem 2rem 4rem',
              borderRadius: '2rem',
              boxShadow: '0 0.1rem 0.5rem var(--shadow-color)',
              textAlign: 'center',
              borderTop: '0.6rem solid var(--main-color)',
              borderBottom: '0.6rem solid var(--main-color)',
              borderLeft: '0.05rem solid rgb(210, 209, 209)',
              borderRight: '0.05rem solid rgb(210, 209, 209)',
              minHeight: '300px',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: '0.5s ease'
            }}
            onClick={() => {
              if (isMobile) setActiveService(activeService === index ? null : index)
            }}
            onMouseLeave={() => {
              if (isMobile) setActiveService(null)
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <service.icon
                style={{
                  fontSize: '7rem',
                  color: 'var(--main-color)',
                  width: '7rem',
                  height: '7rem'
                }}
              />
            </div>
            <h3
              style={{
                fontSize: '2.6rem',
                transition: '0.5s ease',
                color: 'var(--text-color)',
                marginBottom: '1rem'
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: '1.6rem',
                margin: '1rem 0 3rem',
                color: 'var(--text-color)'
              }}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading"
        style={{
          marginBottom: '4rem',
          marginTop: '7rem',
          fontSize: '4.5rem',
          textAlign: 'center',
          color: 'var(--text-color)'
        }}
      >
        My <span style={{ color: 'var(--main-color)' }}>Skills</span>
      </motion.h2>

      <div
        className="skills-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '2.5rem',
          padding: '0 1%'
        }}
      >
        {[
          { icon: 'bxl-java', name: 'Java' },
          { icon: 'bxl-python', name: 'Python' },
          { icon: 'bxl-c-plus-plus', name: 'C++' },
          { icon: 'bx-code-curly', name: 'C#' },
          { icon: 'bxl-javascript', name: 'JavaScript' },
          { icon: 'bxl-typescript', name: 'TypeScript' },
          { icon: 'bxl-html5', name: 'HTML' },
          { icon: 'bxl-css3', name: 'CSS' },
          { icon: 'bxl-php', name: 'PHP' },
          { icon: 'bxl-nodejs', name: 'NodeJS' },
          { icon: 'bx-data', name: 'SQL' },
          { icon: 'bxl-git', name: 'Git' },
          { icon: 'bxl-tux', name: 'Linux' },
          { icon: 'bxs-spreadsheet', name: 'Data Analysis' }
        ].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className={`skills-box${isMobile && activeSkill === index ? ' active' : ''}`}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              borderRadius: '2rem',
              boxShadow: '0 0 1rem var(--bg-color)',
              background: 'transparent',
              transition: '0.5s ease'
            }}
            onClick={() => {
              if (isMobile) setActiveSkill(activeSkill === index ? null : index)
            }}
            onMouseLeave={() => {
              if (isMobile) setActiveSkill(null)
            }}
          >
            <div className="skills-content">
              <i
                className={`bx ${skill.icon}`}
                style={{
                  fontSize: '4rem',
                  marginBottom: '1rem',
                  transition: 'color 0.4s, filter 0.4s'
                }}
              ></i>
              <h3 style={{
                fontSize: '1.6rem',
                color: 'var(--text-color)'
              }}>
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Stats Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading"
        style={{
          marginBottom: '4rem',
          marginTop: '7rem',
          fontSize: '4.5rem',
          textAlign: 'center',
          color: 'var(--text-color)'
        }}
      >
        My <span style={{ color: 'var(--main-color)' }}>GitHub Stats</span>
      </motion.h2>

      <div
        className="github-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '30px',
          marginTop: '40px',
          width: '100%'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="github-box"
          style={{
            width: '100%',
            maxWidth: '900px',
            display: 'flex',
            height: '260px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1a1a1a',
            borderRadius: '10px',
            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.2)',
            overflow: 'hidden',
            padding: '15px',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
        >
          <img
            src="https://nirzak-streak-stats.vercel.app/?user=shishir786&theme=dark"
            alt="GitHub Streak"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '5px',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="github-box"
          style={{
            width: '100%',
            maxWidth: '900px',
            display: 'flex',
            height: '260px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1a1a1a',
            borderRadius: '10px',
            boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.2)',
            overflow: 'hidden',
            padding: '15px',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=shishir786&show_icons=true&theme=dark"
            alt="GitHub Stats"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '5px',
              transition: 'transform 0.3s ease-in-out'
            }}
          />
        </motion.div>
      </div>

      <div
        className="github-container2"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          width: '100%',
          marginTop: '2rem'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="github-box2"
          style={{
            width: '100%',
            background: 'var(--bg-color)',
            borderRadius: '2rem',
            boxShadow: '0 0 1rem var(--main-color)',
            padding: '1rem',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
        >
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=shishir786&theme=github-dark"
            alt="GitHub Activity Graph"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '1rem'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="github-box2"
          style={{
            width: '100%',
            background: 'var(--bg-color)',
            borderRadius: '2rem',
            boxShadow: '0 0 1rem var(--main-color)',
            padding: '1rem',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s'
          }}
        >
          <img
            src="https://ghchart.rshah.org/shishir786"
            alt="GitHub Contribution Graph"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '1rem'
            }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .services-box.active {
          box-shadow: 0 0.1rem 0.5rem var(--shadow-color);
          transform: scale(1.02);
        }
        .services-box.active h3 {
          color: var(--main-color);
        }
        .skills-box.active {
          transform: scale(1.06);
          box-shadow: 0 0 2rem var(--main-color);
          background: rgba(95, 111, 255, 0.08);
        }

        .services-box:hover {
          box-shadow: 0 0.1rem 0.5rem var(--shadow-color);
          transform: scale(1.02);
        }

        .services-box:hover h3 {
          color: var(--main-color);
        }

        .skills-box:hover {
          transform: scale(1.02);
          box-shadow: 0 0 2rem var(--main-color);
        }

        :global(.skills-box.active) i {
          color: var(--accent-color) !important;
          filter: drop-shadow(0 0 16px var(--main-color));
        }
        :global(.skills-box:hover) i {
          color: var(--accent-color) !important;
          filter: drop-shadow(0 0 16px var(--main-color));
        }

        .github-box img:hover {
          transform: scale(1.05);
        }

        .github-box2:hover {
          box-shadow: 0 0 1rem var(--main-color);
        }

        .github-box, .github-box2 {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .github-box:hover, .github-box:active {
          transform: scale(1.04);
          box-shadow: 0 0 2rem var(--main-color);
        }
        .github-box2:hover, .github-box2:active {
          transform: scale(1.04);
          box-shadow: 0 0 2rem var(--main-color);
        }

        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
            padding: 0 3% !important;
          }

          .skills-box {
            padding: 1.5rem;
          }

          .skills-box i {
            font-size: 3rem !important;
          }

          .skills-box h3 {
            font-size: 1.4rem !important;
          }

          .github-container {
            flex-direction: column !important;
            gap: 2rem !important;
          }

          .github-box {
            max-width: 100% !important;
            height: auto !important;
          }

          .github-container2 {
            gap: 1.5rem !important;
          }

          .github-box2 {
            padding: 0.8rem !important;
          }
        }

        @media (max-width: 600px) {
          .services-container {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .services-box {
            padding: 1.2rem 0.8rem !important;
            min-height: 180px !important;
            height: auto !important;
          }
          .services-box h3 {
            font-size: 1.3rem !important;
          }
          .services-box p {
            font-size: 1rem !important;
          }
          .skills-container {
            grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)) !important;
            gap: 1rem !important;
            padding: 0 1% !important;
          }
          .skills-box {
            padding: 0.8rem !important;
          }
          .skills-box i {
            font-size: 2rem !important;
          }
          .skills-box h3 {
            font-size: 1rem !important;
          }
          .github-container {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .github-box {
            max-width: 100% !important;
            height: auto !important;
            padding: 0.5rem !important;
          }
          .github-container2 {
            gap: 1rem !important;
          }
          .github-box2 {
            padding: 0.5rem !important;
          }
        }

        :global(.skills-box) {
          position: relative;
          overflow: visible;
          z-index: 0;
          background: var(--bg-color);
          box-shadow: 0 2px 8px 0 rgba(80,80,180,0.08);
          border: 2.5px solid transparent;
          transition: transform 0.22s cubic-bezier(.4,2,.6,1), border 0.22s cubic-bezier(.4,2,.6,1);
        }
        :global(.skills-box:hover),
        :global(.skills-box.active) {
          transform: scale(1.06);
          border: 2.5px solid var(--main-color);
        }
        :global(.skills-box:hover) .skills-content,
        :global(.skills-box.active) .skills-content {
          /* Optional: add a subtle background or effect if you want */
        }
      `}</style>
    </section>
  )
}
