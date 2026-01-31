import React, { useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = ({ title, subtitle, images }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(images.length / 2));

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const isVideo = (src) => {
    return src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov'));
  };

  return (
    <div className="hero-carousel-container">
      {/* Background Gradient */}
      <div className="hero-carousel-bg" aria-hidden="true">
        <div className="hero-carousel-gradient-1"></div>
        <div className="hero-carousel-gradient-2"></div>
      </div>

      {/* Content */}
      <div className="hero-carousel-content">
        {/* Header Section */}
        <div className="hero-carousel-header">
          <h1 className="hero-carousel-title">
            {title}
          </h1>
          <p className="hero-carousel-subtitle">
            {subtitle}
          </p>
        </div>

        {/* Main Showcase Section */}
        <div className="hero-carousel-showcase">
          {/* Carousel Wrapper */}
          <div className="hero-carousel-wrapper">
            {images.map((media, index) => {
              const offset = index - currentIndex;
              const total = images.length;
              let pos = (offset + total) % total;

              if (pos > Math.floor(total / 2)) {
                pos = pos - total;
              }

              const isCenter = pos === 0;
              const isAdjacent = Math.abs(pos) === 1;
              const videoFile = isVideo(media.src);

              return (
                <div
                  key={index}
                  className="hero-carousel-item"
                  style={{
                    transform: `
                      translateX(${(pos) * 45}%) 
                      scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                      rotateY(${(pos) * -10}deg)
                    `,
                    zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                    opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                    filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                    visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
                  }}
                >
                  {videoFile ? (
                    <video
                      src={media.src}
                      alt={media.alt}
                      className="hero-carousel-image"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={media.alt}
                      className="hero-carousel-image"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            className="hero-carousel-nav hero-carousel-nav-prev"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="hero-carousel-nav hero-carousel-nav-next"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        .hero-carousel-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow-x: hidden;
          background: #000000;
          color: #ffffff;
          padding: 4rem 1rem;
        }

        .hero-carousel-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.2;
        }

        .hero-carousel-gradient-1 {
          position: absolute;
          bottom: 0;
          left: -20%;
          right: 0;
          top: -10%;
          height: 500px;
          width: 500px;
          border-radius: 50%;
          background: radial-gradient(circle farthest-side, rgba(128, 90, 213, 0.3), rgba(255, 255, 255, 0));
        }

        .hero-carousel-gradient-2 {
          position: absolute;
          bottom: 0;
          right: -20%;
          top: -10%;
          height: 500px;
          width: 500px;
          border-radius: 50%;
          background: radial-gradient(circle farthest-side, rgba(0, 123, 255, 0.3), rgba(255, 255, 255, 0));
        }

        .hero-carousel-content {
          position: relative;
          z-index: 10;
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .hero-carousel-content {
            gap: 3rem;
          }
        }

        .hero-carousel-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .hero-carousel-title {
          font-size: clamp(2rem, 5vw, 3.75rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          max-width: 64rem;
          line-height: 1.2;
          color: #ffffff;
        }

        .hero-carousel-subtitle {
          max-width: 42rem;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.7);
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1.6;
        }

        .hero-carousel-showcase {
          position: relative;
          width: 100%;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .hero-carousel-showcase {
            height: 450px;
          }
        }

        .hero-carousel-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .hero-carousel-item {
          position: absolute;
          width: 192px;
          height: 384px;
          transition: all 0.5s ease-in-out;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .hero-carousel-item {
            width: 256px;
            height: 450px;
          }
        }

        .hero-carousel-image {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .hero-carousel-image video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
          height: 40px;
          width: 40px;
          z-index: 20;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-carousel-nav:hover {
          background: rgba(0, 0, 0, 0.7);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .hero-carousel-nav-prev {
          left: 0.5rem;
        }

        @media (min-width: 640px) {
          .hero-carousel-nav-prev {
            left: 2rem;
          }
        }

        .hero-carousel-nav-next {
          right: 0.5rem;
        }

        @media (min-width: 640px) {
          .hero-carousel-nav-next {
            right: 2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-carousel-container {
            padding: 3rem 1rem;
            min-height: auto;
          }

          .hero-carousel-showcase {
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .hero-carousel-container {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Mídias de prova social
  const resultMedia = [
    { src: '/PROVA SOCIAL 1.mp4', alt: 'Prova Social 1', type: 'video' },
    { src: '/PROVA SOCIAL 2.mp4', alt: 'Prova Social 2', type: 'video' },
    { src: '/PROVA SOCIAL 3.jpg', alt: 'Prova Social 3', type: 'image' },
  ];

  return (
    <section className="results-section" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <HeroSection
          title="Resultados dos meus alunos"
          subtitle="Veja os resultados reais de quem aplicou o método"
          images={resultMedia}
        />
      </motion.div>
    </section>
  );
};

export default Results;
