"use client"

import { CERTIFICATES_DATA } from '../../data/certificates'

export default function CertificatesSection() {
  return (
    <section className="certificates-container">
      <h2 className="section-title">My Certifications</h2>
      <div className="certificates-grid">
        {CERTIFICATES_DATA.map((cert) => (
          <div className="certificate-card" key={cert.title}>
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
      `}</style>
    </section>
  )
}
