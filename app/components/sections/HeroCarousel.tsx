"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { FiMessageCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

export interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
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

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number; // em milissegundos
  showIndicators?: boolean;
  showArrows?: boolean;
}

export function HeroCarousel({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showArrows = true,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Função para ir para o próximo slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Função para ir para o slide anterior
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Função para ir para um slide específico
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isPaused || slides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isPaused, autoPlayInterval, goToNext, slides.length]);

  // Handlers para touch (swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

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
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section
        className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white h-[540px] lg:h-[630px] flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Carrossel de slides"
        role="region"
      >

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full h-full">
          {/* Imagem destacada (se houver) */}
          {currentSlide.image && (
            <div className="flex items-center justify-center order-2 lg:order-1 w-full h-full max-h-[400px] lg:max-h-[500px] px-2 lg:px-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    key={currentSlide.id}
                    src={currentSlide.image}
                    alt={currentSlide.imageAlt || currentSlide.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-2xl transition-all duration-700 ease-in-out"
                    style={{ 
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      animation: 'fadeIn 0.7s ease-in-out',
                      willChange: 'opacity, transform',
                    }}
                    loading={currentIndex === 0 ? 'eager' : 'lazy'}
                    onLoad={(e) => {
                      e.currentTarget.style.opacity = '1';
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Texto */}
          <div className={`text-center lg:text-left ${currentSlide.image ? 'order-1 lg:order-2' : 'max-w-3xl mx-auto'} flex flex-col justify-center h-full`}>
            {/* Título com animação */}
            <div className="min-h-[108px] sm:min-h-[126px] lg:min-h-[144px] flex items-center justify-center lg:justify-start mb-4 lg:mb-6">
              <h1 
                key={`title-${currentSlide.id}`}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white transition-opacity duration-500"
                style={{ 
                  animation: 'fadeInUp 0.6s ease-out',
                  willChange: 'opacity, transform',
                }}
                aria-live="polite"
                aria-atomic="true"
              >
                {currentSlide.title}
              </h1>
            </div>
            
            {/* Descrição com animação */}
            <div className="min-h-[72px] sm:min-h-[90px] lg:min-h-[108px] flex items-center justify-center lg:justify-start mb-6 lg:mb-8">
              <p 
                key={`desc-${currentSlide.id}`}
                className="text-xl sm:text-2xl leading-relaxed text-blue-100 transition-opacity duration-500"
                style={{ 
                  animation: 'fadeInUp 0.6s ease-out 0.2s both',
                  willChange: 'opacity, transform',
                }}
                aria-live="polite"
              >
                {currentSlide.description}
              </p>
            </div>

            {/* CTAs - opcionais */}
            {(currentSlide.ctaPrimary || currentSlide.ctaSecondary) && (
              <div 
                key={`cta-${currentSlide.id}`}
                className="min-h-[60px] flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                style={{ 
                  animation: 'fadeInUp 0.6s ease-out 0.4s both',
                  willChange: 'opacity, transform',
                }}
              >
              {currentSlide.ctaPrimary && (
                <a
                  href={currentSlide.ctaPrimary.href}
                  target={currentSlide.ctaPrimary.external ? "_blank" : undefined}
                  rel={currentSlide.ctaPrimary.external ? "noopener noreferrer" : undefined}
                  className="transition-transform duration-300 hover:scale-105 active:scale-95"
                >
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
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
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[var(--primary)] shadow-lg hover:shadow-xl transition-all duration-300">
                    {currentSlide.ctaSecondary.text}
                  </Button>
                </a>
              )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Setas de navegação */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Slide anterior"
            disabled={slides.length <= 1}
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full p-2 sm:p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-110 active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Próximo slide"
            disabled={slides.length <= 1}
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Indicadores */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <div 
            className="flex gap-2"
            role="tablist"
            aria-label="Indicadores de slides"
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-controls={`slide-${index}`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 hover:scale-125 ${
                  index === currentIndex
                    ? "w-8 bg-white shadow-lg"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ir para slide ${index + 1} de ${slides.length}`}
              />
            ))}
          </div>
          {/* Indicador de pausa */}
          {isPaused && autoPlay && (
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <div className="w-2 h-2 bg-white/50 rounded-full"></div>
              <span>Pausado</span>
            </div>
          )}
        </div>
      )}
      </section>
    </>
  );
}

