"use client"

import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import LoaderNavbar from './LoaderNavbar'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleClick = () => {
    setIsOpen(false)
  }

  if (!mounted) return null

  // Overlay click handler for mobile menu
  const handleOverlayClick = () => setIsOpen(false)

  return (
    <header
      className={`header ${isSticky ? 'sticky' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 9%',
        background: isSticky ? 'var(--bg-color)' : 'transparent',
        boxShadow: isSticky ? '0.1rem 1rem var(--shadow-color)' : '0.1rem 0.1rem 0.5rem var(--shadow-color)',
        display: 'flex',
        zIndex: 9999,
        transition: '0.5s'
      }}
    >
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div className="mobile-overlay" onClick={handleOverlayClick}></div>
      )}
      {/* Logo with LoaderNavbar */}
      <a
        href="#"
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1.1rem', marginRight: 'auto', minWidth: 0 }}>
        <span className="logo-mobile-menu">
          <LoaderNavbar />
        </span>
        <span className="logo" style={{ fontSize: '2.5rem', color: 'var(--main-color)', fontWeight: 600, cursor: 'default', textDecoration: 'none', whiteSpace: 'nowrap', minWidth: 0 }}>
          Portfolio
        </span>
      </a>

      {/* Desktop Navigation */}
      <nav
        className={`navbar ${isOpen ? 'active' : ''}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 700,
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={activeSection === item.href.slice(1) ? 'active' : ''}
            onClick={() => { handleClick(); setIsOpen(false); }}
            style={{
              position: 'relative',
              fontSize: '1.7rem',
              color: 'var(--navbar-text-color, #fff)',
              fontWeight: 700,
              marginRight: '3.5rem',
              textDecoration: 'none'
            }}
          >
            {item.name}
            {activeSection === item.href.slice(1) && (
              <div
                style={{
                  content: '',
                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  height: '0.2rem',
                  bottom: '-6px',
                  backgroundColor: isSticky ? 'var(--main-color)' : 'var(--white-color)',
                  opacity: isSticky ? 0.7 : 1
                }}
              />
            )}
          </a>
        ))}
      </nav>

      {/* Dark Mode Toggle */}
      <div
        id="darkMode-icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          fontSize: '2.4rem',
          color: 'var(--navbar-text-color, #111)',
          fontWeight: 900,
          cursor: 'pointer',
          opacity: isSticky ? 0.9 : 1,
          marginRight: '2rem',
          marginTop: '10px',
        }}
      >
        {theme === 'dark' ? <Sun size={24} style={{ verticalAlign: 'middle', fontWeight: 900 }} /> : <Moon size={24} style={{ verticalAlign: 'middle', fontWeight: 900 }} />}
      </div>

      {/* Mobile Menu Button */}
      <div
        id="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          fontSize: '3.6rem',
          color: 'var(--text-color)',
          display: 'none',
          cursor: 'pointer'
        }}
        className={isOpen ? 'bx-x' : ''}
      >
        {isOpen ? <X size={36} /> : <Menu size={36} />}
      </div>

      <style jsx>{`
        .mobile-overlay {
          display: none;
        }
        @media (max-width: 768px) {
          .mobile-overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(20, 20, 30, 0.55);
            z-index: 10000;
            animation: fadeInOverlay 0.3s;
          }
          #menu-icon {
            display: block !important;
            font-size: 4.2rem !important;
            padding: 1.2rem !important;
            margin-left: 1rem;
            border-radius: 0.8rem;
            background: rgba(255,255,255,0.15);
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            z-index: 10001;
          }
          .navbar {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 80vw;
            max-width: 350px;
            min-width: 220px;
            background: rgba(255,255,255,0.97);
            color: #222;
            backdrop-filter: blur(16px);
            box-shadow: -2px 0 24px 0 rgba(0,0,0,0.13);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 7rem 0 2rem 0;
            transform: translateX(100%);
            transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
            z-index: 10001;
          }
          .navbar.active {
            transform: translateX(0);
            display: flex !important;
          }
          .navbar a {
            display: block;
            font-size: 2.2rem;
            margin: 2.2rem 0;
            color: #222;
            padding: 1.2rem 0;
            border-radius: 0.7rem;
            width: 90%;
            text-align: center;
            transition: background 0.2s, color 0.2s;
          }
          .navbar a:active, .navbar a:focus {
            background: var(--main-color);
            color: #fff;
          }
          .navbar a.active {
            color: var(--main-color);
            background: rgba(95,111,255,0.08);
          }
          .navbar a.active::before {
            display: none;
          }
          :global(.dark) .navbar {
            background: rgba(20, 20, 30, 0.97) !important;
            color: #fff !important;
            box-shadow: -2px 0 24px 0 rgba(0,0,0,0.45);
          }
          :global(.dark) .navbar a {
            color: #fff !important;
          }
          :global(.dark) .navbar a.active {
            color: var(--main-color) !important;
            background: rgba(227,100,20,0.10) !important;
          }
          #menu-icon {
            background: rgba(30,30,30,0.15);
            color: #fff;
          }
          :global(.dark) #menu-icon {
            background: rgba(255,255,255,0.10) !important;
            color: #fff !important;
          }
        }
        @keyframes fadeInOverlay {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @media (max-width: 600px) {
          .logo {
            font-size: 2rem !important;
            font-weight: 700 !important;
            min-width: 0;
            max-width: 90vw;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .logo-mobile-menu {
            display: none !important;
          }
          a[style*='display: flex'][style*='align-items: center'] {
            gap: 0.3rem !important;
            min-width: 0;
          }
        }
        .debug-border {
          border: 2px solid red !important;
        }
        .dark .logo {
          color: var(--main-color) !important;
        }
        .dark .logo-mobile-menu {
          /* LoaderNavbar uses var(--main-color) for border, so it stays visible */
        }
      `}</style>
    </header>
  )
}
