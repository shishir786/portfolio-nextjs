"use client"

import { motion } from 'framer-motion'
import { BarChart3, Code, Code2, Cpu, Database, Globe, Server, Smartphone } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Creating dynamic, responsive, and user-friendly websites using modern frameworks like Next.js, Vite, React, Express and NestJS.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning"]
    },
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Building smart and efficient systems for businesses with clean architecture and scalable solutions.",
      features: ["System Architecture", "API Development", "Database Design"]
    },
    {
      icon: BarChart3,
      title: "AI & Data Analysis",
      description:
        "Leveraging machine learning, data processing, and insights generation to solve complex problems.",
      features: ["Machine Learning", "Data Visualization", "Predictive Analytics"]
    }
  ]

  const [activeService, setActiveService] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <section id="services" className="services-section" style={{
      background: 'var(--bg-color)',
      padding: '6rem 5%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'var(--main-color)',
        opacity: '0.05',
        filter: 'blur(40px)'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'var(--main-color)',
        opacity: '0.05',
        filter: 'blur(40px)'
      }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="section-header"
        style={{ textAlign: 'center', marginBottom: '6rem', position: 'relative' }}
      >
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: 'var(--text-color)'
        }}>
          My <span style={{ color: 'var(--main-color)' }}>Services</span>
        </h2>
        <p style={{
          fontSize: '1.6rem',
          maxWidth: '600px',
          margin: '0 auto',
          color: 'var(--text-color-secondary)',
          lineHeight: '1.6'
        }}>
          Comprehensive solutions tailored to your needs, from web development to AI-powered analytics.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        marginBottom: '8rem'
      }}>
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="service-card"
            style={{
              background: 'var(--card-bg)',
              borderRadius: '1.5rem',
              padding: '3rem 2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseEnter={() => !isMobile && setActiveService(index)}
            onMouseLeave={() => !isMobile && setActiveService(null)}
            onClick={() => isMobile && setActiveService(activeService === index ? null : index)}
          >
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '5px',
              background: 'var(--main-color)',
              transform: activeService === index ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'left',
              transition: 'transform 0.3s ease'
            }}></div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2.5rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: activeService === index ? 'var(--main-color)' : 'rgba(95, 111, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}>
                <service.icon style={{
                  fontSize: '3.5rem',
                  color: activeService === index ? '#fff' : 'var(--main-color)',
                  width: '3.5rem',
                  height: '3.5rem',
                  transition: 'all 0.3s ease'
                }} />
              </div>
            </div>

            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'var(--text-color)',
              textAlign: 'center',
              transition: 'color 0.3s ease'
            }}>
              {service.title}
            </h3>

            <p style={{
              fontSize: '1.6rem',
              color: 'var(--text-color-secondary)',
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              flexGrow: 1,
              textAlign: 'center'
            }}>
              {service.description}
            </p>

            <div style={{
              height: activeService === index ? 'auto' : '0',
              overflow: 'hidden',
              transition: 'height 0.3s ease'
            }}>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0 0 2rem 0'
              }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    fontSize: '1.4rem',
                    color: 'var(--text-color-secondary)'
                  }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--main-color)',
                      marginRight: '1rem',
                      flexShrink: 0
                    }}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'var(--main-color)',
                  color: '#fff',
                  border: 'none',
                  padding: '1.2rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.4rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'all 0.3s ease'
                }}
              >
                Learn More
              </motion.button>
            </div>

            {activeService !== index && (
              <div style={{
                textAlign: 'center',
                marginTop: 'auto',
                paddingTop: '2rem'
              }}>
                <span style={{
                  fontSize: '1.4rem',
                  color: 'var(--main-color)',
                  fontWeight: '500'
                }}>
                  {isMobile ? 'Tap to explore' : ''}
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="section-header"
        style={{ textAlign: 'center', marginBottom: '6rem' }}
      >
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: 'var(--text-color)'
        }}>
          My <span style={{ color: 'var(--main-color)' }}>Skills</span>
        </h2>
        <p style={{
          fontSize: '1.6rem',
          maxWidth: '600px',
          margin: '0 auto',
          color: 'var(--text-color-secondary)',
          lineHeight: '1.6'
        }}>
          Technologies and tools I use to bring ideas to life and solve complex problems.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '2.5rem',
        marginBottom: '8rem'
      }}>
        {[
          { icon: 'bxl-java', name: 'Java', category: 'Language' },
          { icon: 'bxl-python', name: 'Python', category: 'Language' },
          { icon: 'bxl-c-plus-plus', name: 'C++', category: 'Language' },
          { icon: 'bx-code-curly', name: 'C#', category: 'Language' },
          { icon: 'bxl-javascript', name: 'JavaScript', category: 'Language' },
          { icon: 'bxl-typescript', name: 'TypeScript', category: 'Language' },
          { icon: 'bxl-html5', name: 'HTML', category: 'Frontend' },
          { icon: 'bxl-css3', name: 'CSS', category: 'Frontend' },
          { icon: 'bxl-react', name: 'React', category: 'Frontend' },
          { icon: 'bxl-vuejs', name: 'Vite', category: 'Frontend' },
          { icon: 'bxl-nodejs', name: 'Node.js', category: 'Backend' },
          { icon: 'bx-code', name: 'Express.js', category: 'Backend' },
          { icon: 'bx-data', name: 'SQL', category: 'Database' },
          { icon: 'bxl-mongodb', name: 'MongoDB', category: 'Database' },
          { icon: 'bxl-git', name: 'Git', category: 'Tools' },
          { icon: 'bx-brain', name: 'AI/ML', category: 'Specialty' },
        ].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              type: "spring",
              stiffness: 100
            }}
            className="skill-card"
            style={{
              background: 'var(--card-bg)',
              borderRadius: '1.2rem',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{
              y: -5,
              scale: 1.2,
              boxShadow: '0 10px 25px rgba(95, 111, 255, 0.15)'
            }}
          >
            <motion.i
              className={`bx ${skill.icon}`}
              style={{
                fontSize: '3.5rem',
                marginBottom: '1.2rem',
                color: 'var(--main-color)',
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
            ></motion.i>
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '500',
              color: 'var(--text-color)',
              textAlign: 'center',
              margin: '0'
            }}>
              {skill.name}
            </h3>
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              padding: '0.3rem',
              background: 'var(--main-color)',
              opacity: '0.1',
              fontSize: '0.8rem',
              textAlign: 'center'
            }}>
              {skill.category}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="section-header"
        style={{ textAlign: 'center', marginBottom: '6rem' }}
      >
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: 'var(--text-color)'
        }}>
          My <span style={{ color: 'var(--main-color)' }}>GitHub</span> Activity
        </h2>
        <p style={{
          fontSize: '1.6rem',
          maxWidth: '600px',
          margin: '0 auto',
          color: 'var(--text-color-secondary)',
          lineHeight: '1.6'
        }}>
          Tracking my coding journey, contributions, and progress over time.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        marginBottom: '5rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'var(--card-bg)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            gridColumn: '1 / -1'
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


      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          background: 'var(--card-bg)',
          borderRadius: '1.5rem',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          marginBottom: '3rem'
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

      <style jsx>{`
        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .service-card:hover h3 {
          color: var(--main-color);
        }

        .skill-card:hover i {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 4rem 5%;
          }

          .service-card {
            padding: 2.5rem 2rem;
          }
        }

        @media (max-width: 480px) {
          .services-section {
            padding: 3rem 5%;
          }

          .service-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
