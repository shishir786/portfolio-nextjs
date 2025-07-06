"use client"

import { motion } from 'framer-motion'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="footer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '2rem 7%',
        background: 'var(--main-color)'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="footer-text"
      >
        <p style={{ fontSize: '1.6rem', color: 'var(--white-color)' }}>
          Copyright © 2025 by Abdullah Shishir | All Rights Reserved.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="footer-iconTop"
      >
        <button
          className="button"
          onClick={scrollToTop}
        >
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
      </motion.div>

      <style jsx>{`
        /* From Uiverse.io by vinodjangid07 */
        .button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgb(20, 20, 20);
          border: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
          cursor: pointer;
          transition-duration: 0.3s;
          overflow: hidden;
          position: relative;
        }
        .svgIcon {
          width: 12px;
          transition-duration: 0.3s;
        }
        .svgIcon path {
          fill: white;
        }
        .button:hover {
          width: 140px;
          border-radius: 50px;
          transition-duration: 0.3s;
          background-color: rgb(11, 160, 555);
          align-items: center;
        }
        .button:hover .svgIcon {
          transition-duration: 0.3s;
          transform: translateY(-200%);
        }
        .button::before {
          position: absolute;
          bottom: -20px;
          content: "Back to Top";
          color: white;
          font-size: 0px;
        }
        .button:hover::before {
          font-size: 13px;
          opacity: 1;
          bottom: unset;
          transition-duration: 0.3s;
        }

        @media (max-width: 365px) {
          .footer {
            flex-direction: column-reverse;
          }
          .footer p {
            text-align: center;
            margin-top: 2rem;
          }
        }
      `}</style>
    </footer>
  )
}
