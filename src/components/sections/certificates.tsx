"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { CERTIFICATES_DATA } from '../../data/certificates'

type CertificateType = typeof CERTIFICATES_DATA[number]

export default function CertificatesSection() {
  const [openCert, setOpenCert] = useState<CertificateType | null>(null)

  return (
    <section className="certificates-section" style={{
      padding: '6rem 5%',
      background: 'var(--bg-color)'
    }}>
      <div className="container" style={{
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
          style={{
            textAlign: 'center',
            fontSize: '5rem',
            marginBottom: '3rem',
            color: 'var(--text-color)'
          }}
        >
          My <span style={{ color: 'var(--main-color)' }}>Certifications</span>
        </motion.h2>

        <div className="certificates-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '1.5rem'
        }}>
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="certificate-card"
              style={{
                background: 'var(--card-bg)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                border: '1px solid var(--card-border)'
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
              }}
              onClick={() => setOpenCert(cert)}
            >
              <div className="certificate-image-container" style={{
                position: 'relative',
                width: '100%',
                height: '200px',
                overflow: 'hidden'
              }}>
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="certificate-image"
                />
              </div>

              <div className="certificate-details" style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: 'var(--text-color)'
                }}>
                  {cert.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.5rem'
                }}>
                  {cert.issuer}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-light)'
                }}>
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="cert-modal-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setOpenCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="cert-modal"
              style={{
                background: 'var(--modal-bg)',
                borderRadius: '16px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                padding: '2rem',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: '800px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--modal-border)'
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: 'var(--text-color)'
                }}
                onClick={() => setOpenCert(null)}
              >
                <X size={28} />
              </button>

              <div className="cert-modal-content" style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div className="cert-modal-image-container" style={{
                  position: 'relative',
                  width: '100%',
                  height: '65vh',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  marginBottom: '1.5rem'
                }}>
                  <Image
                    src={openCert.imageUrl}
                    alt={openCert.title}
                    fill
                    style={{
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <div className="cert-modal-details" style={{
                  textAlign: 'center',
                  padding: '0 1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem',
                    color: 'var(--main-color)'
                  }}>
                    {openCert.title}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-color)',
                    marginBottom: '0.5rem'
                  }}>
                    {openCert.issuer}
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-light)'
                  }}>
                    {openCert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        :root {
          --card-bg: #ffffff;
          --card-border: #eaeaea;
          --modal-bg: #ffffff;
          --modal-border: #e0e0e0;
          --text-secondary: #666;
          --text-light: #888;
        }

        .dark {
          --card-bg: #1e1e1e;
          --card-border: #333;
          --modal-bg: #1e1e1e;
          --modal-border: #444;
          --text-secondary: #aaa;
          --text-light: #777;
        }

        .certificate-card:hover .certificate-image {
          transform: scale(1.05);
        }

        @media (max-width: 1200px) {
          .certificates-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
          }
        }

        @media (max-width: 768px) {
          .certificates-section {
            padding: 4rem 5% !important;
          }

          .cert-modal-image-container {
            height: 50vh !important;
          }
        }

        @media (max-width: 480px) {
          .certificates-grid {
            grid-template-columns: 1fr !important;
          }

          .cert-modal {
            padding: 1.5rem !important;
            width: 95vw !important;
          }

          .cert-modal-details h3 {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </section>
  )
}
