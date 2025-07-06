"use client"


export default function AboutSection() {
  return (
    <section id="about" className="about-section-screenshot">
      <div className="about-img-rect">
        <img src="/images/about.jpg" alt="Abdullah Shishir" className="about-img-rect-img" />
      </div>
      <div className="about-content-screenshot">
        <h2 className="about-heading">
          About <span className="about-heading-accent">Me</span>
        </h2>
        <h3 className="about-subheading">Hi, I am here to help you in your Next Project</h3>
        <p className="about-bio-screenshot">
          Enthusiastic Computer Science student with a passion for solving complex problems and a strong foundation in programming, software development, and problem-solving. Seeking an opportunity to contribute to innovative projects and enhance skills in software development, system design, and application development.
        </p>
        <h4 className="about-edu-heading">Education</h4>
        <div className="about-edu-details">
          <div className="about-edu-uni"><b>American International University Bangladesh – AIUB</b></div>
          <div className="about-edu-degree">Bachelor of Science in Computer Science and Engineering</div>
          <div className="about-edu-years">2022 – 2025</div>
        </div>
        <a href="https://www.linkedin.com/in/abdullah-shishir/" className="about-readmore-btn-screenshot" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
      <style jsx>{`
        .about-section-screenshot {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
          min-height: 80vh;
          padding: 4rem 6vw;
          background: --main-color;
        }
        .about-img-rect {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .about-img-rect-img {
          width: 420px;
          height: 420px;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
        }
        .about-content-screenshot {
          flex: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        .about-heading {
          font-size: 4.2rem;
          font-weight: 900;
          color: --font-color;
          margin-bottom: 0.5rem;
          letter-spacing: -1px;
        }
        .about-heading-accent {
          color: var(--main-color);
        }
        .about-subheading {
          font-size: 2.2rem;
          font-weight: 800;
          color: --font-color;
          margin-bottom: 1.5rem;
        }
        .about-bio-screenshot {
          font-size: 1.4rem;
          color: --font-color;
          margin-bottom: 2.5rem;
          max-width: 800px;
        }
        .about-edu-heading {
          font-size: 1.8rem;
          font-weight: 800;
          color: --font-color;
          margin-bottom: 1rem;
        }
        .about-edu-details {
          margin-bottom: 2.5rem;
        }
        .about-edu-uni {
          font-size: 1.3rem;
          font-weight: 800;
          color: --font-color;
        }
        .about-edu-degree {
          font-size: 1.15rem;
          color: --font-color;
        }
        .about-edu-years {
          font-size: 1.15rem;
          color: --font-color;
        }
        .about-readmore-btn-screenshot {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: var(--main-color);
          color: #--font-color;
          border-radius: 0.7rem;
          font-weight: 700;
          font-size: 1.3rem;
          text-decoration: none;
          box-shadow: 0 4px 0 #d1d5db;
          border: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .about-readmore-btn-screenshot:hover {
          background: #0e9488;
          color: --font-color;
          transform: translateY(-2px) scale(1.04);
        }
        @media (max-width: 1100px) {
          .about-img-rect-img {
            width: 320px;
            height: 320px;
          }
        }
        @media (max-width: 900px) {
          .about-section-screenshot {
            flex-direction: column;
            padding: 2rem 2vw;
            gap: 2rem;
          }
          .about-img-rect-img {
            width: 220px;
            height: 220px;
          }
        }
        @media (max-width: 600px) {
          .about-section-screenshot {
            padding-top: 80px;
          }
          .about-heading {
            font-size: 2.8rem;
          }
          .about-subheading {
            font-size: 1.5rem;
          }
          .about-bio-screenshot {
            font-size: 1.1rem;
          }
          .about-edu-heading {
            font-size: 1.3rem;
          }
          .about-edu-uni {
            font-size: 1.1rem;
          }
          .about-edu-degree, .about-edu-years {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
