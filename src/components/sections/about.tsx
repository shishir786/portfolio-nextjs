'use client';

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
          Enthusiastic Computer Science student with a passion for solving complex problems and a
          strong foundation in programming, software development, and problem-solving. Seeking an
          opportunity to contribute to innovative projects and enhance skills in software
          development, system design, and application development.
        </p>

        {/* Timeline Grid */}
        <div className="timeline-grid">
          {/* Experience Timeline (Left) */}
          <div className="timeline-column">
            <h4 className="about-edu-heading">Experience</h4>
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="about-edu-uni">
                  <b>Sparkteck Agency</b>
                </div>
                <div className="about-edu-degree">Trainee Full Stack Developer</div>
                <div className="about-edu-years">August 2025 – Present</div>
              </div>
            </div>
          </div>

          <div className="timeline-column">
            <h4 className="about-edu-heading">Education</h4>

            {/* Entry 1 */}
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="about-edu-uni">
                  American International University Bangladesh – <b>AIUB</b>
                </div>
                <div className="about-edu-degree">B.Sc. in Computer Science & Engineering</div>
                <div className="about-edu-years">2022 – 2025</div>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="about-edu-uni">Varendra College</div>
                <div className="about-edu-degree">Higher Secondary Certificate (HSC)</div>
                <div className="about-edu-years">2018 – 2020</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <a
          href="https://www.linkedin.com/in/abdullah-shishir/"
          className="about-readmore-btn-screenshot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Connect Me</span>
          <span
            className="about-btn-icon"
            aria-hidden="true"
            style={{ display: 'inline-flex', verticalAlign: 'middle', marginLeft: '0.5em' }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 11H17M17 11L11 5M17 11L11 17"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      </div>

      {/* Style */}
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
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
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
          margin-bottom: 1.5rem;
        }

        /* Timeline Layout */
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          width: 100%;
        }

        .timeline-column {
          display: flex;
          flex-direction: column;
        }

        .timeline-entry {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 2rem;
          border-left: 2px solid var(--main-color);
        }

        .timeline-dot {
          position: absolute;
          left: -6px;
          top: 0.25rem;
          width: 12px;
          height: 12px;
          background-color: var(--main-color);
          border-radius: 50%;
        }

        .timeline-content {
          color: --font-color;
        }

        .about-edu-uni {
          font-size: 1.3rem;
          font-weight: 700;
          color: --font-color;
        }

        .about-edu-degree {
          font-size: 1.15rem;
          color: --font-color;
        }

        .about-edu-years {
          font-size: 1rem;
          color: --font-color;
          margin-top: 0.2rem;
        }

        .about-readmore-btn-screenshot {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: var(--main-color);
          color: var(--font-color);
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

        @media (max-width: 900px) {
          .about-section-screenshot {
            flex-direction: column;
            padding: 2rem 2vw;
            gap: 2rem;
          }

          .timeline-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
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

          .about-edu-degree,
          .about-edu-years {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
