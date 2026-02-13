"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui/Button";
import { FiMessageCircle, FiChevronLeft, FiChevronRight, FiPlay, FiPause } from "react-icons/fi";

export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  videoUrl?: string;
  ctaPrimary?: {
    text: string;
    href: string;
    external?: boolean;
  };
  ctaSecondary?: {
    text: string;
    href: string;
    external?: boolean;
  };
}

interface HeroVideoBackgroundProps {
  slides?: HeroSlide[];
  title?: string;
  description?: string;
  ctaPrimary?: {
    text: string;
    href: string;
    external?: boolean;
  };
  ctaSecondary?: {
    text: string;
    href: string;
    external?: boolean;
  };
  videoUrl?: string;
  image?: {
    src: string;
    alt: string;
  };
  overlayOpacity?: number; // 0 a 1
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  showProgress?: boolean;
}

export function HeroVideoBackground({
  slides,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  videoUrl,
  image = {
    src: "/fotos_ivan/IMG_5053.jpg",
    alt: "Ivan Tagliaferro - Especialista em Educação Internacional",
  },
  overlayOpacity = 0.6,
  autoPlay = true,
  autoPlayInterval = 6000,
  showIndicators = true,
  showArrows = true,
  showProgress = true,
}: HeroVideoBackgroundProps) {
  // Se slides foram fornecidos, usar modo carrossel
  const isCarouselMode = slides && slides.length > 0;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [useVideo, setUseVideo] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Determinar slide atual
  const currentSlide = isCarouselMode 
    ? slides[currentIndex]
    : {
        id: "single",
        title: title || "Transforme seu sonho em realidade internacional",
        description: description || "Mais de 20 anos facilitando intercâmbios, vistos e imigração. Acompanhamento personalizado em cada etapa da sua jornada global.",
        image: image?.src,
        imageAlt: image?.alt,
        videoUrl: videoUrl,
        ctaPrimary: ctaPrimary,
        ctaSecondary: ctaSecondary,
      };

  // Função para ir para o próximo slide
  const goToNext = useCallback(() => {
    if (!isCarouselMode || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isCarouselMode, slides?.length, isTransitioning]);

  // Função para ir para o slide anterior
  const goToPrevious = useCallback(() => {
    if (!isCarouselMode || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isCarouselMode, slides?.length, isTransitioning]);

  // Função para ir para um slide específico
  const goToSlide = useCallback((index: number) => {
    if (!isCarouselMode || isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setProgress(0);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [isCarouselMode, currentIndex, isTransitioning]);

  // Auto-play com barra de progresso
  useEffect(() => {
    if (!isCarouselMode || !autoPlay || isPaused || slides.length <= 1) {
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
      return;
    }

    setProgress(0);
    const progressInterval = 50;
    const totalSteps = autoPlayInterval / progressInterval;
    let currentStep = 0;

    progressRef.current = setInterval(() => {
      currentStep++;
      setProgress((currentStep / totalSteps) * 100);
    }, progressInterval);

    intervalRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [isCarouselMode, autoPlay, isPaused, autoPlayInterval, goToNext, slides?.length]);

  // Verificar se o vídeo está disponível
  useEffect(() => {
    if (currentSlide.videoUrl) {
      const isMobile = window.innerWidth < 768;
      setUseVideo(!isMobile);
    } else {
      setUseVideo(false);
    }
  }, [currentSlide.videoUrl]);

  // Handlers para touch (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isCarouselMode) return;
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isCarouselMode) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isCarouselMode || !touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  // Pausar auto-play ao passar o mouse
  const handleMouseEnter = () => {
    if (isCarouselMode) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (isCarouselMode) {
      setIsPaused(false);
    }
  };

  // Navegação por teclado
  useEffect(() => {
    if (!isCarouselMode) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCarouselMode, goToNext, goToPrevious]);

  return (
    <>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes gradient-animation {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .glass-effect-strong {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }
        
        .animate-scale-in {
          animation: scale-in 0.6s ease-out 0.6s both;
        }
        
        .gradient-animated {
          background: linear-gradient(
            135deg,
            var(--primary) 0%,
            var(--primary-dark) 50%,
            #1e3a8a 100%
          );
          background-size: 200% 200%;
          animation: gradient-animation 15s ease infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .gradient-animated {
            animation: none;
          }
          .animate-fade-in-up,
          .animate-fade-in-up-delay-1,
          .animate-fade-in-up-delay-2,
          .animate-scale-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
      
      <section
        className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Vídeo ou Imagem de Fundo */}
        <div className="absolute inset-0 z-0">
          {useVideo && currentSlide.videoUrl ? (
            <>
              <video
                ref={videoRef}
                key={currentSlide.id}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setIsVideoLoaded(true)}
                onError={() => {
                  setUseVideo(false);
                }}
              >
                <source src={currentSlide.videoUrl} type="video/mp4" />
              </video>
              {!isVideoLoaded && (
                <div className="absolute inset-0 gradient-animated"></div>
              )}
            </>
          ) : (
            <div className="absolute inset-0">
              <Image
                key={currentSlide.id}
                src={currentSlide.image || image.src}
                alt={currentSlide.imageAlt || image.alt}
                fill
                className="object-cover transition-opacity duration-700"
                priority={currentIndex === 0}
                sizes="100vw"
                quality={90}
              />
              {/* Gradiente animado como fallback/overlay adicional */}
              <div className="absolute inset-0 gradient-animated opacity-30"></div>
            </div>
          )}
        </div>

        {/* Overlay escuro */}
        <div
          className="absolute inset-0 z-10 bg-black"
          style={{ opacity: overlayOpacity }}
        ></div>

        {/* Conteúdo centralizado */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Título */}
            <h1
              key={`title-${currentSlide.id}`}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 lg:mb-8 animate-fade-in-up-delay-1"
              aria-live="polite"
            >
              {currentSlide.title}
            </h1>

            {/* Descrição */}
            <p
              key={`desc-${currentSlide.id}`}
              className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto mb-8 lg:mb-12 animate-fade-in-up-delay-2"
              aria-live="polite"
            >
              {currentSlide.description}
            </p>

            {/* CTAs com glassmorphism */}
            <div
              key={`cta-${currentSlide.id}`}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-16 animate-scale-in"
            >
              {currentSlide.ctaPrimary && (
                <a
                  href={currentSlide.ctaPrimary.href}
                  target={currentSlide.ctaPrimary.external ? "_blank" : undefined}
                  rel={currentSlide.ctaPrimary.external ? "noopener noreferrer" : undefined}
                  className="transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="glass-effect-strong shadow-2xl hover:shadow-3xl min-w-[200px] border-white/30"
                  >
                    <FiMessageCircle className="mr-2" />
                    {currentSlide.ctaPrimary.text}
                  </Button>
                </a>
              )}

              {currentSlide.ctaSecondary && (
                <a
                  href={currentSlide.ctaSecondary.href}
                  target={currentSlide.ctaSecondary.external ? "_blank" : undefined}
                  rel={currentSlide.ctaSecondary.external ? "noopener noreferrer" : undefined}
                  className="transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="glass-effect border-2 border-white/40 text-white hover:bg-white/20 shadow-2xl hover:shadow-3xl min-w-[200px]"
                  >
                    {currentSlide.ctaSecondary.text}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Setas de navegação */}
        {isCarouselMode && showArrows && slides.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 glass-effect rounded-full p-3 sm:p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Slide anterior"
              disabled={slides.length <= 1 || isTransitioning}
            >
              <FiChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 glass-effect rounded-full p-3 sm:p-4 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Próximo slide"
              disabled={slides.length <= 1 || isTransitioning}
            >
              <FiChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>
          </>
        )}

        {/* Controles inferiores */}
        {isCarouselMode && slides.length > 1 && (
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-4">
              {/* Indicadores */}
              {showIndicators && (
                <div className="flex items-center gap-2 sm:gap-3" role="tablist" aria-label="Indicadores de slides">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      role="tab"
                      aria-selected={index === currentIndex}
                      aria-controls={`slide-${index}`}
                      className={`
                        h-2 rounded-full transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-125
                        ${
                          index === currentIndex
                            ? "w-8 bg-white shadow-lg"
                            : "w-2 bg-white/40 hover:bg-white/70"
                        }
                      `}
                      aria-label={`Ir para slide ${index + 1} de ${slides.length}`}
                      disabled={isTransitioning}
                    />
                  ))}
                </div>
              )}

              {/* Barra de progresso */}
              {showProgress && autoPlay && (
                <div className="w-full max-w-md h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              )}

              {/* Controle de play/pause */}
              {autoPlay && (
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="glass-effect rounded-full p-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={isPaused ? "Retomar reprodução" : "Pausar reprodução"}
                >
                  {isPaused ? (
                    <FiPlay className="w-4 h-4 text-white" />
                  ) : (
                    <FiPause className="w-4 h-4 text-white" />
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
