import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';

const StoryDemo = () => {
  const videos = [
    '/MARCA DA AGUA PARIS.mp4',
    '/MARCA DA AGUA .mp4',
    '/MARCA DAGUA LOIRA NA PORSCHE.mp4'
  ];
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState([0, 0, 0]);
  const [isPaused, setIsPaused] = useState(true); // Começa pausado
  const [isEnded, setIsEnded] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Controla se já iniciou pelo menos uma vez
  const [isMuted, setIsMuted] = useState(true); // Começa mutado
  const videoRefs = useRef(videos.map(() => null));
  const mediaLength = videos.length;

  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        const progressPercent = (video.currentTime / video.duration) * 100;
        setProgress(prev => {
          const newProgress = [...prev];
          newProgress[currentIndex] = progressPercent;
          return newProgress;
        });
        
        // O evento 'ended' já cuida do avanço automático
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('ended', () => {
      if (currentIndex < mediaLength - 1) {
        // Avança para o próximo vídeo
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        setProgress(prev => {
          const newProgress = [...prev];
          newProgress[currentIndex] = 100;
          return newProgress;
        });
      } else {
        setIsPaused(true);
        setIsEnded(true);
        setProgress(prev => {
          const newProgress = [...prev];
          newProgress[currentIndex] = 100;
          return newProgress;
        });
      }
    });

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('ended', () => {});
    };
  }, [currentIndex, mediaLength]);

  // Detecta quando a seção entra na viewport
  useEffect(() => {
    if (isInView && !hasStarted) {
      // Quando entra na viewport pela primeira vez, inicia o vídeo e ativa o áudio
      setHasStarted(true);
      setIsPaused(false);
      setIsMuted(false); // Ativa o áudio quando entra na viewport
    } else if (!isInView && hasStarted) {
      // Quando sai da viewport, pausa todos os vídeos
      videoRefs.current.forEach(v => {
        if (v) {
          v.pause();
          v.muted = true; // Muta novamente quando sai da viewport
        }
      });
      setIsPaused(true);
      setIsMuted(true);
    }
  }, [isInView, hasStarted]);

  // Atualiza o estado muted de todos os vídeos quando isMuted muda
  useEffect(() => {
    videoRefs.current.forEach(v => {
      if (v) {
        v.muted = isMuted;
      }
    });
  }, [isMuted]);

  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (!video) return;

    // Pausa todos os vídeos
    videoRefs.current.forEach(v => {
      if (v) v.pause();
    });

    if (isPaused || !isInView) {
      video.pause();
    } else {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [isPaused, currentIndex, isInView]);

  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (!video) return;
    
    // Garante que o vídeo atual tenha o áudio configurado corretamente
    video.muted = isMuted;
    
    // Auto-play quando muda de vídeo (apenas se estiver visível e não pausado)
    if (!isPaused && isInView) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  }, [currentIndex, isPaused, isInView, isMuted]);

  const handleControl = () => {
    if (isEnded) {
      setCurrentIndex(0);
      setIsEnded(false);
      setIsPaused(false);
      setProgress([0, 0, 0]);
      const video = videoRefs.current[0];
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    } else {
      setIsPaused((prev) => !prev);
    }
  };

  const handleProgressClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(false);
    setIsEnded(false);
    setProgress(prev => {
      const newProgress = [...prev];
      newProgress[index] = 0;
      return newProgress;
    });
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  return (
    <div className="story-demo-container" ref={containerRef}>
        <motion.div
          className="story-demo-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="story-demo-title">DEMONSTRAÇÃO DO QUE VOCÊ VAI APRENDER</h2>
          
          <div className="story-viewer">
            {/* Progress Bars */}
            <div className="story-progress-container">
              {videos.map((_, index) => {
                const isActive = index === currentIndex;
                const isCompleted = index < currentIndex;
                return (
                  <div
                    key={index}
                    className="story-progress-bar-wrapper"
                    onClick={() => handleProgressClick(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleProgressClick(index);
                      }
                    }}
                  >
                    <div className="story-progress-bar">
                      <div
                        className="story-progress-fill"
                        style={{
                          width: isActive
                            ? `${progress[index]}%`
                            : isCompleted
                            ? '100%'
                            : '0%',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Story Content - só o vídeo (imagem removida) */}
            <div className="story-content">
              <div className="story-media">
                {videos.map((videoSrc, index) => (
                  <video
                    key={index}
                    ref={(el) => {
                      videoRefs.current[index] = el;
                      if (el) {
                        el.muted = isMuted;
                      }
                    }}
                    className={`story-video ${index === currentIndex ? 'active' : 'hidden'}`}
                    src={videoSrc}
                    muted={isMuted}
                    playsInline
                  />
                ))}
                
                {/* Overlay gradients */}
                <div className="story-overlay">
                  <div className="story-overlay-top" />
                  <div className="story-overlay-bottom" />
                </div>
              </div>

              {/* Controls */}
              <button
                className="story-control-btn"
                onClick={handleControl}
                aria-label={isPaused ? (isEnded ? 'Reiniciar' : 'Reproduzir') : 'Pausar'}
              >
                {isPaused ? (isEnded ? <RotateCcw size={24} /> : <Play size={24} />) : <Pause size={24} />}
              </button>
            </div>
          </div>

          <style>{`
          .story-demo-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem 1rem;
            background: transparent;
            margin-bottom: 3rem;
            width: 100%;
          }

          .story-demo-wrapper {
            max-width: 400px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .story-demo-title {
            font-size: clamp(1.2rem, 3vw, 1.5rem);
            font-weight: 800;
            color: #ffffff;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin: 0;
          }

          .story-viewer {
            position: relative;
            width: 100%;
            max-width: 400px;
            aspect-ratio: 9/16;
            background: #000;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.1);
          }

          .story-progress-container {
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            z-index: 10;
            display: flex;
            gap: 4px;
          }

          .story-progress-bar-wrapper {
            flex: 1;
            cursor: pointer;
          }

          .story-progress-bar {
            height: 3px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 3px;
            overflow: hidden;
          }

          .story-progress-fill {
            height: 100%;
            background: var(--primary);
            border-radius: 3px;
            transition: width 0.05s linear;
            box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
          }

          .story-content {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .story-media {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .story-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          }

          .story-video.active {
            z-index: 1;
          }

          .story-video.hidden {
            z-index: 0;
            opacity: 0;
          }

          .story-overlay {
            position: absolute;
            inset: 0;
            pointer-events: none;
          }

          .story-overlay-top {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent);
          }

          .story-overlay-bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 150px;
            background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
          }

          .story-control-btn {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.6);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .story-control-btn:hover {
            background: rgba(34, 197, 94, 0.3);
            border-color: var(--primary);
            transform: translateX(-50%) scale(1.1);
          }

          .story-control-btn:active {
            transform: translateX(-50%) scale(0.95);
          }

          @media (max-width: 768px) {
            .story-demo-container {
              padding: 2rem 1rem;
            }

            .story-demo-wrapper {
              gap: 1.5rem;
            }

            .story-viewer {
              max-width: 350px;
            }
          }

          @media (max-width: 480px) {
            .story-demo-container {
              padding: 1.5rem 1rem;
            }

            .story-viewer {
              max-width: 100%;
              border-radius: 15px;
            }

          }
        `}</style>
        </motion.div>
    </div>
  );
};

export default StoryDemo;

