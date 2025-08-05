"use client"

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { PROJECTS_DATA, Project } from '../../data/projects';
import LoaderProject from '../LoaderProject';

export default function ProjectsSection() {
  const projects: Project[] = PROJECTS_DATA;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        background: 'var(--bg-color)',
        padding: '8rem 5%',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <motion.h2 className="section-title" style={{
            fontSize: '5rem',
            textAlign: 'center',
            color: 'var(--text-color)',
            marginBottom: '1rem'
          }}>
            My <span style={{ color: 'var(--main-color)' }}>Projects</span>
          </motion.h2>
          <p className="section-subtitle" style={{
            fontSize: '1.2rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            margin: '0 auto 2.5rem auto',
            lineHeight: '1.6'
          }}>
            Here are some of my recent projects. Use the filters or search to explore.
          </p>

          {/* Filter Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 32 }}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ padding: '0.9rem 1.2rem', borderRadius: 20, border: '2px solid var(--main-color)', minWidth: 220, fontSize: 16, marginRight: 8, outline: 'none', color: 'var(--text-color)', background: 'var(--white-color)', boxShadow: '0 1px 6px rgba(0,0,0,0.03)' }}
            />
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.9rem 1.6rem',
                  borderRadius: 20,
                  border: '2px solid var(--main-color)',
                  background: selectedCategory === category ? 'var(--main-color)' : 'var(--white-color)',
                  color: selectedCategory === category ? 'white' : 'var(--main-color)',
                  fontWeight: selectedCategory === category ? 800 : 600,
                  fontSize: 16,
                  cursor: 'pointer',
                  marginRight: 4,
                  transition: 'all 0.2s',
                  boxShadow: selectedCategory === category ? '0 2px 8px var(--shadow-color)' : 'none',
                }}
              >
                {category}
              </button>
            ))}
          </div>
          <div style={{ marginBottom: 20, textAlign: 'center', color: 'var(--text-light)', fontSize: 16 }}>
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </motion.div>

        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
          gap: '2rem',
          alignItems: 'stretch'
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
              style={{
                background: 'var(--card-bg)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                border: '1px solid var(--card-border)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)'
              }}
            >
              <div className="project-image-container" style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                minHeight: '180px',
                overflow: 'hidden',
                background: '#f0f4ff'
              }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="project-image"
                />
              </div>

              <div className="project-content" style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <div className="project-tags" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.2rem'
                }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'var(--tag-bg)',
                      color: 'var(--tag-text)',
                      padding: '0.4rem 1rem',
                      borderRadius: '20px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      letterSpacing: '0.01em'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 style={{
                  fontSize: '1.7rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--text-color)',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.3
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '1.15rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '1.7rem',
                  lineHeight: '1.7',
                  fontWeight: 500,
                  flex: 1
                }}>
                  {project.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '0.8rem',
                  marginTop: 'auto'
                }}>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--github-bg)',
                        color: 'var(--github-text)',
                        borderRadius: '6px',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--main-color)',
                        color: 'white',
                        borderRadius: '6px',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none'
                      }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: filteredProjects.length * 0.1 }}
            className="project-card work-in-progress"
            style={{
              background: 'var(--card-bg)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '300px',
              border: '1px solid var(--card-border)',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, #A2A8D3 0%, #38598B 100%)',
              opacity: 0.1,
              zIndex: 1
            }} />
            <div style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              padding: '2rem'
            }}>
              <div style={{ transform: 'scale(1.5)', display: 'inline-block' }}>
                <LoaderProject />
              </div>
              <h3 style={{
                fontSize: '2.1rem', // 1.4rem * 1.5
                fontWeight: '700',
                marginTop: '2.2rem', // 1.5rem * 1.5
                color: 'var(--text-color)'
              }}>
                Work in Progress
              </h3>
              <p style={{
                fontSize: '1.425rem', // 0.95rem * 1.5
                color: 'var(--text-secondary)',
                marginTop: '0.8rem',
                fontWeight: 500
              }}>
                More exciting projects coming soon!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        :root {
          --card-bg: #ffffff;
          --card-border: #eaeaea;
          --tag-bg: #f0f4ff;
          --tag-text: #3a6bff;
          --text-secondary: #666;
          --github-bg: #24292e;
          --github-text: #ffffff;
          --github-bg-hover: #2d333b;
          --main-color-dark: #0056b3;
        }

        .dark {
          --card-bg: #1e1e1e;
          --card-border: #333;
          --tag-bg: #2a2a3a;
          --tag-text: #a0a0ff;
          --text-secondary: #aaa;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        .project-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .github-link:hover {
          background: var(--github-bg-hover) !important;
        }

        .demo-link:hover {
          background: var(--main-color-dark) !important;
        }

        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 5rem 5% !important;
          }

          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .section-subtitle {
            font-size: 1rem !important;
            margin-bottom: 3rem !important;
          }

          .project-content {
            padding: 1.25rem !important;
          }

          .project-card h3 {
            font-size: 1.25rem !important;
          }

          .project-link {
            padding: 0.4rem 0.8rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}
