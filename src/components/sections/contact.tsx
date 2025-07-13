"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import Button from '../Button'
import Loader from '../Loader'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('https://formspree.io/f/manqjgqw', {
        method: 'POST',
        body: new FormData(e.target as HTMLFormElement),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('Thanks for Contacting Me!!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('Oops! There was a problem submitting your form')
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form')
    }
  }

  const contactLinks = [
    {
      icon: Mail,
      label: 'abdullahshishir786@gmail.com',
      href: 'mailto:abdullahshishir786@gmail.com'
    },
    {
      icon: Github,
      label: 'github.com/shishir786',
      href: 'https://github.com/shishir786'
    },
    {
      icon: Linkedin,
      label: 'linkedin.com/in/abdullah-shishir',
      href: 'https://www.linkedin.com/in/abdullah-shishir'
    }
  ]

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="heading"
        style={{
          marginBottom: '1rem',
          textAlign: 'center',
          fontSize: '5rem',
          color: 'var(--text-color)'
        }}
      >
        Contact <span style={{ color: 'var(--main-color)' }}>Me!</span>
      </motion.h2>

      <section id="contact" className="contact" style={{ background: 'var(--bg-color)' }}>
        <div
          className="contact_container"
          style={{
            display: 'flex',
            gap: '2rem'
          }}
        >
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/manqjgqw"
            method="POST"
            id="contactForm"
            style={{
              maxWidth: '70rem',
              width: '100%',
              marginRight: '2rem',
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            <div
              className="input-box"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
              }}
            >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  fontSize: '1.6rem',
                  color: 'var(--text-color)',
                  background: 'var(--bg-color)',
                  border: '0.1rem solid rgb(210, 209, 209)',
                  borderRadius: '0.8rem',
                  margin: '0.7rem 0',
                  boxShadow: '0 0.1rem 0.5rem var(--shadow-color)'
                }}
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  fontSize: '1.6rem',
                  color: 'var(--text-color)',
                  background: 'var(--bg-color)',
                  border: '0.1rem solid rgb(210, 209, 209)',
                  borderRadius: '0.8rem',
                  margin: '0.7rem 0',
                  boxShadow: '0 0.1rem 0.5rem var(--shadow-color)'
                }}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  fontSize: '1.6rem',
                  color: 'var(--text-color)',
                  background: 'var(--bg-color)',
                  border: '0.1rem solid rgb(210, 209, 209)',
                  borderRadius: '0.8rem',
                  margin: '0.7rem 0',
                  boxShadow: '0 0.1rem 0.5rem var(--shadow-color)'
                }}
              />
            </div>
            <div className="input-box">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                cols={30}
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  fontSize: '1.6rem',
                  color: 'var(--text-color)',
                  background: 'var(--bg-color)',
                  border: '0.1rem solid rgb(210, 209, 209)',
                  borderRadius: '0.8rem',
                  margin: '0.7rem 0',
                  boxShadow: '0 0.1rem 0.5rem var(--shadow-color)',
                  resize: 'none'
                }}
              ></textarea>
            </div>

            {status && (
              <p
                id="my-form-status"
                style={{
                  textAlign: 'center',
                  fontSize: '1.6rem',
                  color: status.includes('Thanks') ? 'green' : 'red',
                  margin: '1rem 0'
                }}
              >
                {status}
              </p>
            )}

            <Button />
          </motion.form>

          {/* Loader and Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '120rem', width: '100%' }}
          >
            {/* Loader always visible at the top of contact links */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Loader size={160} />
            </div>
            <div
              className="contact-links"
              style={{
                maxWidth: '120rem',
                width: '100%',
                margin: '1rem auto',
                textAlign: 'center',
                marginBottom: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="contact-link"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    backgroundColor: 'var(--bg-light)',
                    borderRadius: '0.5rem',
                    color: 'var(--text-color)',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s',
                    fontSize: '1.6rem'
                  }}
                >
                  <link.icon style={{ width: '2.4rem', height: '2.4rem', color: 'var(--main-color)' }} />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
        }

        .btn:active {
          transform: scale(0.95);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        }

        .btn:hover .svg-wrapper {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .btn:hover svg {
          transform: rotate(45deg);
        }

        .contact-link:hover {
          background-color: #e5e7eb;
          color: var(--main-color);
        }

        @keyframes startround {
          0% {
            filter: brightness(500%);
            box-shadow: none;
          }
          75% {
            filter: brightness(500%);
            box-shadow: none;
          }
          100% {
            filter: brightness(100%);
            box-shadow: inset 0em 0.5em rgb(255, 255, 255, 0.25), inset 0em -0.5em rgb(0, 0, 0, 0.25);
          }
        }

        @media (max-width: 617px) {
          .contact_container {
            flex-direction: column;
          }
        }

        @media (max-width: 450px) {
          .contact form .input-box input {
            width: 100%;
          }
          .contact_container {
            flex-direction: column;
          }
        }

        @media (max-width: 365px) {
          .contact_container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  )
}
