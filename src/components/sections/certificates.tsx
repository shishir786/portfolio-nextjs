"use client"

import { useState } from 'react'
import { CERTIFICATES_DATA } from '../../data/certificates'
type CertificateType = typeof CERTIFICATES_DATA[number]

export default function CertificatesSection() {
  const [openCert, setOpenCert] = useState<CertificateType | null>(null)

  return (
    <section className="certificates-container">
      <h2 className="section-title">My Certifications</h2>
      <div className="certificates-grid">
        {CERTIFICATES_DATA.map((cert) => (
          <div
            className="certificate-card"
            key={cert.title}
            onClick={() => setOpenCert(cert)}
          >
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="certificate-image"
              style={{ height: '220px' }}
            />
            <div className="certificate-details">
              <div className="certificate-title">{cert.title}</div>
              <div className="certificate-issuer">{cert.issuer}</div>
              <div className="certificate-date">{cert.date}</div>
            </div>
          </div>
        ))}
      </div>
      {openCert && (
        <div className="cert-modal-overlay" onClick={() => setOpenCert(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setOpenCert(null)}>&times;</button>
            <img src={openCert.imageUrl} alt={openCert.title} className="cert-modal-image" />
            <div className="cert-modal-details">
              <div className="cert-modal-title">{openCert.title}</div>
              <div className="cert-modal-issuer">{openCert.issuer}</div>
              <div className="cert-modal-date">{openCert.date}</div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .certificates-container {
          max-width: 1350px;
          width: 100%;
          margin: 2rem auto;
          padding: 0 1rem;
        }
        .section-title {
          text-align: center;
          margin-bottom: 2rem;
          color: var(--main-color);
          font-size: 2.5rem;
        }
        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(220px, 1fr));
          gap: var(--grid-gap, 1rem);
        }
        .certificate-card {
          background-color: var(--main-color);
          border-radius: var(--card-border-radius, 8px);
          box-shadow: 0 3px 5px var(--shadow-color);
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .certificate-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 15px var(--shadow-color);
        }
        .certificate-image {
          width: 100%;
          height: var(--image-height, 220px);
          object-fit: cover;
          transition: opacity 0.3s ease;
        }
        .certificate-details {
          padding: 1rem;
          text-align: center;
        }
        .certificate-title {
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: var(--text-color);
        }
        .certificate-issuer {
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }
        .certificate-date {
          color: var(--text-color);
          font-size: 1rem;
        }
        @media (max-width: 1100px) {
          .certificates-grid {
            grid-template-columns: repeat(2, minmax(220px, 1fr));
          }
        }
        @media (max-width: 700px) {
          .certificates-grid {
            grid-template-columns: 1fr;
          }
        }
        .cert-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .cert-modal {
          background: var(--bg-color);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25);
          padding: 2rem;
          max-width: 800px;
          max-height: 95vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .cert-modal-image {
          max-width: 700px;
          max-height: 70vh;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.18);
        }
        .cert-modal-details {
          text-align: center;
        }
        .cert-modal-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: var(--main-color);
        }
        .cert-modal-issuer {
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }
        .cert-modal-date {
          color: var(--text-light);
          font-size: 1.1rem;
        }
        .cert-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          font-size: 2.2rem;
          color: var(--text-color);
          cursor: pointer;
          z-index: 10;
          transition: color 0.2s;
        }
        .cert-modal-close:hover {
          color: var(--main-color);
        }
      `}</style>
    </section>
  )
}
