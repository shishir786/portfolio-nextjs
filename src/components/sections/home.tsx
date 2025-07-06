"use client"

import {
  BarChart3,
  Code,
  Database,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Search,
  Twitter
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function HomeSection() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/abdullah.shishir786",
      label: "Facebook"
    },
    {
      icon: Twitter,
      href: "https://x.com/a_shishir786",
      label: "X (formerly Twitter)"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/abdullah__shishir",
      label: "Instagram"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/abdullah-shishir",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/shishir786",
      label: "GitHub"
    }
  ]

  const professions = [
    { icon: Code, title: "Web Developer" },
    { icon: Database, title: "Software Developer" },
    { icon: BarChart3, title: "Data Analyst" },
    { icon: Search, title: "Research Enthusiast" }
  ]

  // Typewriter animation state (letter by letter)
  const [professionIndex, setProfessionIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const current = professions[professionIndex].title
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 900)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
      } else {
        timeout = setTimeout(() => {
          setTyping(true)
          setProfessionIndex((professionIndex + 1) % professions.length)
        }, 300)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, professionIndex])

  const ProfessionIcon = professions[professionIndex].icon;

  return (
    <section id="home" className="home-section">
      <div className="home-left">
        <h3
          className='mask-b-from-neutral-300 font-bold'
          style={{ fontSize: '3.8rem' }}
        >
          Hello, I'm
        </h3>

        <h1>Md. Abdullah Shishir</h1>
        <h2 style={{ minHeight: '3.5rem', marginBottom: 0 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', fontWeight: 900, fontSize: '2.7rem', lineHeight: 1 }}>
            <span style={{ fontSize: '2.7rem', fontWeight: 900, lineHeight: 1 }}>I am interested to work as</span>
            <span className="profession-mobile-break" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.7rem' }}>
              <ProfessionIcon size={46} style={{ color: 'var(--profession-icon-color, #111)', verticalAlign: 'middle', transition: 'all 0.5s' }} />
              <span key={professions[professionIndex].title} style={{ fontSize: '2.7rem', fontWeight: 900, transition: 'all 0.5s', minWidth: 120, letterSpacing: '0.5px', borderRight: '2.5px solid var(--main-color)', paddingRight: 2, lineHeight: 1 }}>
                {displayed}
              </span>
            </span>
          </span>
        </h2>
        <p>
          Passionate about programming, software development, and problem-solving.<br />
          Seeking opportunities to contribute to innovative projects and grow my skills.
        </p>
        <div className="home-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-btn"
              aria-label={social.label}
            >
              <span className="home-tooltip">{social.label}</span>
              <social.icon size={32} />
            </a>
          ))}
        </div>
        <a href="/pdf/Abdullah-Shishir-Resume.pdf" className="home-cv-btn">Download CV</a>
      </div>
      <div className="home-right">
        <img src="/images/home.jpg" alt="Abdullah Shishir" className="home-img" />
      </div>
      <style jsx>{`
        .home-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 80vh;
          padding: 8rem 6vw 4rem 6vw;
          background: var(--bg-color);
          gap: 6rem;
        }
        .home-left, .home-right {
          position: relative;
          z-index: 1;
        }
        .home-left {
          flex: 1.3;
          max-width: 800px;
        }
        .home-left h1 {
          font-size: 5rem;
          font-weight: 800;
          margin: 0.5rem 0 1rem;
          color: var(--main-color);
        }
        .home-left h2 {
          min-height: 3.5rem;
          display: flex;
          align-items: center;
          font-weight: 800;
          color: var(--text-color);
          margin-bottom: 1.5rem;
          font-size: 2.8rem;
        }
        .home-left p {
          font-size: 1.5rem;
          color: var(--text-color);
          margin-bottom: 2rem;
        }
        .home-socials {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .home-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.6rem;
          height: 3.6rem;
          border-radius: 50%;
          background: transparent;
          color: var(--main-color);
          font-size: 2.2rem;
          border: 2.5px solid var(--main-color);
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
          box-shadow: 0 4px 0 #d1d5db;
          cursor: pointer;
          border: none;
          outline: none;
          position: relative;
        }
        .home-social-btn:hover, .home-social-btn:focus {
          background: var(--main-color);
          color: #fff;
          border: 2.5px solid var(--main-color);
          transform: scale(1.12);
        }
        .home-social-btn svg {
          transition: color 0.2s;
        }
        .home-tooltip {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          background: var(--main-color);
          color: #fff;
          padding: 0.5rem 1.2rem;
          border-radius: 1.2rem;
          font-size: 1.1rem;
          white-space: nowrap;
          pointer-events: none;
          transition: opacity 0.2s, visibility 0.2s;
          z-index: 10;
          font-weight: 600;
        }
        .home-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 7px;
          border-style: solid;
          border-color: var(--main-color) transparent transparent transparent;
        }
        .home-social-btn:hover .home-tooltip, .home-social-btn:focus .home-tooltip {
          visibility: visible;
          opacity: 1;
        }
        .home-cv-btn {
          display: inline-block;
          padding: 0.8rem 2.2rem;
          background: var(--main-color);
          color: var(--white-color);
          border-radius: 0.5rem;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          border: none;
          transition: background 0.2s, color 0.2s;
        }
        .home-cv-btn:hover {
          background: var(--white-color);
          color: var(--main-color);
        }
        .home-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .home-img {
          width: 400px;
          height: 400px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          border: 6px solid var(--main-color);
        }
        @media (max-width: 900px) {
          .home-section {
            flex-direction: column;
            padding: 2rem 2vw;
            gap: 2rem;
          }
          .home-right {
            margin-top: 2rem;
            justify-content: center;
          }
          .home-img {
            width: 300px;
            height: 300px;
          }
        }
        @media (max-width: 600px) {
          .home-left h1 {
            font-size: 2.5rem;
          }
          .home-left h2 {
            font-size: 1.5rem;
          }
          .home-img {
            width: 180px;
            height: 180px;
          }
          .home-section {
            display: block;
            gap: 1rem;
            padding: 80px 1vw 1rem 1vw;
          }
          .home-right {
            display: none;
          }
          .profession-mobile-break {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.7rem;
            margin-top: 0.5rem;
            margin-left: 0;
            width: 100%;
          }
          .home-left h2 > span {
            display: block !important;
            font-size: 1.5rem !important;
          }
        }
        .profession-mobile-break {
          display: inline-flex;
          align-items: center;
          gap: 1.2rem;
        }
      `}</style>
    </section>
  )
}
