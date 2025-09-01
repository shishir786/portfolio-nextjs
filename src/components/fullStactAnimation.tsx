"use client"

import { Database, Monitor, Server } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FullStackAnimation() {
  const [activeLayer, setActiveLayer] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const layers = [
    {
      name: "Frontend",
      icon: Monitor,
      color: "var(--main-color)",
      description: "Modern web interfaces",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "linear-gradient(135deg, var(--main-color), var(--accent-color))"
    },
    {
      name: "Backend",
      icon: Server,
      color: "var(--accent-color)",
      description: "Robust server solutions",
      technologies: ["Node.js", "Express", "NestJS", "Spring Boot", "REST APIs", "JWT Auth"],
      gradient: "linear-gradient(135deg, var(--accent-color), var(--main-color))"
    },
    {
      name: "Database",
      icon: Database,
      color: "var(--main-color)",
      description: "Data management systems",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Prisma ORM", "SQL"],
      gradient: "linear-gradient(135deg, var(--main-color), var(--accent-color))"
    }
  ];

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setActiveLayer(prev => (prev + 1) % layers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  return (
    <div className="fullstack-container">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-circle circle-4"></div>
      </div>

      {/* Main content */}
      <div className="stack-content">

        {/* Stack layers */}
        <div className="layers-container">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isActive = activeLayer === index;

            return (
              <div
                key={layer.name}
                className={`layer-card ${isActive ? 'active' : ''}`}
                style={{
                  '--layer-color': layer.color,
                  '--layer-gradient': layer.gradient,
                  '--layer-index': index
                } as React.CSSProperties}
                onMouseEnter={() => {
                  setActiveLayer(index);
                  setIsAnimating(false);
                }}
                onMouseLeave={() => setIsAnimating(true)}
              >
                {/* Card background */}
                <div className="card-bg"></div>

                {/* Icon and title */}
                <div className="card-header">
                  <div className="icon-wrapper">
                    <Icon size={32} />
                  </div>
                  <h4>{layer.name}</h4>
                </div>

                {/* Description */}
                <p className="card-description">{layer.description}</p>

                {/* Technology badges */}
                <div className="tech-badges">
                  {layer.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="tech-badge"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Active indicator */}
                <div className="active-indicator"></div>
              </div>
            );
          })}
        </div>

        {/* Connection lines */}
        <div className="connection-lines">
          <svg width="100%" height="100%" viewBox="0 0 800 400" className="connection-svg">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--main-color)" />
                <stop offset="50%" stopColor="var(--accent-color)" />
                <stop offset="100%" stopColor="var(--main-color)" />
              </linearGradient>
            </defs>
            <path
              d="M 200 120 Q 400 120 600 120 Q 400 200 200 280 Q 400 280 600 280"
              stroke="url(#connectionGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,8"
              className="connection-path"
            />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="floating-elements">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="floating-element"
              style={{
                animationDelay: `${i * 0.6}s`,
                left: `${10 + (i * 8)}%`,
                top: `${15 + (i % 3 * 25)}%`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
                        .fullstack-container {
          position: relative;
          width: 100%;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: transparent;
          border-radius: 40px;
          border: 1px solid var(--shadow-color);
          box-shadow:
            0 30px 60px var(--shadow-color),
            inset 0 1px 0 var(--shadow-color);
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: var(--shadow-color);
          animation: float 10s ease-in-out infinite;
        }

        .circle-1 {
          width: 180px;
          height: 180px;
          top: -90px;
          right: -90px;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          bottom: -60px;
          left: -60px;
          animation-delay: 2s;
        }

        .circle-3 {
          width: 100px;
          height: 100px;
          top: 40%;
          right: 15%;
          animation-delay: 4s;
        }

        .circle-4 {
          width: 80px;
          height: 80px;
          top: 20%;
          left: 10%;
          animation-delay: 6s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(90deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
          75% { transform: translateY(-25px) rotate(270deg); }
        }

        .stack-content {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
        }

        .stack-title {
          text-align: center;
          margin-bottom: 3rem;
        }

        .stack-title h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--main-color);
          margin: 0 0 0.8rem 0;
          letter-spacing: -0.5px;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: var(--main-color);
          border-radius: 2px;
          margin: 0 auto;
          animation: expand 2.5s ease-out;
        }

        @keyframes expand {
          from { width: 0; }
          to { width: 80px; }
        }

        .layers-container {
          display: flex;
          gap: 2.5rem;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 1000px;
        }

                        .layer-card {
          position: relative;
          width: 320px;
          height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          box-shadow:
            0 12px 40px var(--shadow-color),
            0 4px 12px var(--shadow-color);
          transform: scale(0.9) translateY(20px);
          opacity: 0.7;
          border: 1px solid var(--shadow-color);
        }

                        .layer-card.active {
          transform: scale(1.08) translateY(-15px);
          opacity: 1;
          box-shadow:
            0 35px 70px var(--shadow-color),
            0 0 40px rgba(var(--layer-color), 0.3);
          border-color: var(--layer-color);
        }

        .card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--layer-gradient);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .layer-card.active .card-bg {
          opacity: 0.08;
        }

        .card-header {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 1.8rem 2rem 1rem;
        }

        .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: var(--layer-gradient);
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(var(--layer-color), 0.3);
        }

        .layer-card.active .icon-wrapper {
          transform: scale(1.15);
          box-shadow: 0 8px 30px rgba(var(--layer-color), 0.4);
        }

        .card-header h4 {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-color);
          transition: color 0.3s ease;
        }

        .layer-card.active .card-header h4 {
          color: var(--layer-color);
        }

        .card-description {
          margin: 0 0 1.5rem 0;
          padding: 0 2rem;
          font-size: 1rem;
          color: var(--text-light);
          font-weight: 500;
          line-height: 1.5;
          opacity: 0.8;
        }

        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 2rem 1.8rem;
        }

        .tech-badge {
          padding: 6px 14px;
          background: var(--bg-light);
          color: var(--main-color);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid var(--shadow-color);
          transition: all 0.3s ease;
          animation: slideInUp 0.5s ease forwards;
          opacity: 0;
          transform: translateY(10px);
        }

        .layer-card.active .tech-badge {
          background: rgba(var(--layer-color), 0.15);
          border-color: rgba(var(--layer-color), 0.3);
          color: var(--layer-color);
          transform: translateY(0);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .active-indicator {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--layer-gradient);
          transform: scaleX(0);
          transition: transform 0.6s ease;
        }

        .layer-card.active .active-indicator {
          transform: scaleX(1);
        }

        .connection-lines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
        }

        .connection-svg {
          width: 100%;
          height: 100%;
        }

        .connection-path {
          animation: dash 4s linear infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -30;
          }
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          width: 8px;
          height: 8px;
          background: var(--accent-color);
          border-radius: 50%;
          animation: floatElement 8s ease-in-out infinite;
          opacity: 0.4;
        }

        @keyframes floatElement {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px) scale(1.8);
            opacity: 0.8;
          }
        }

        /* Responsive design */
        @media (max-width: 1200px) {
          .fullstack-container {
            height: 550px;
          }

          .layers-container {
            gap: 2rem;
          }

          .layer-card {
            width: 280px;
            height: 220px;
          }
        }

        @media (max-width: 768px) {
          .fullstack-container {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .fullstack-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
