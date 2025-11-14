"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { FiMessageCircle, FiDownload, FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];
  const whatsappUrl = getWhatsAppLink("Olá! Gostaria de saber mais sobre os serviços de intercâmbio.");

  return (
    <section
      className="relative bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white min-h-[540px] lg:min-h-[630px] flex items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagem de fundo (se houver) */}
      {currentSlide.image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={currentSlide.image}
            alt={currentSlide.imageAlt || currentSlide.title}
            fill
            className="object-cover opacity-20"
            priority={currentIndex === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/90 to-[var(--primary-dark)]/90" />
        </div>
      )}

      {/* Conteúdo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Título com animação - altura fixa */}
          <div className="min-h-[108px] sm:min-h-[126px] lg:min-h-[144px] flex items-center justify-center mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              {currentSlide.title}
            </h1>
          </div>
          
          {/* Descrição com animação - altura fixa */}
          <div className="min-h-[72px] sm:min-h-[90px] lg:min-h-[108px] flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed animate-fade-in-delay">
              {currentSlide.description}
            </p>
          </div>

          {/* CTAs - altura fixa */}
          <div className="min-h-[60px] flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            {currentSlide.ctaPrimary ? (
              <a
                href={currentSlide.ctaPrimary.href}
                target={currentSlide.ctaPrimary.external ? "_blank" : undefined}
                rel={currentSlide.ctaPrimary.external ? "noopener noreferrer" : undefined}
              >
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <FiMessageCircle className="mr-2" />
                  {currentSlide.ctaPrimary.text}
                </Button>
              </a>
            ) : (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <FiMessageCircle className="mr-2" />
                  Falar no WhatsApp
                </Button>
              </a>
            )}

            {currentSlide.ctaSecondary ? (
              <a
                href={currentSlide.ctaSecondary.href}
                target={currentSlide.ctaSecondary.external ? "_blank" : undefined}
                rel={currentSlide.ctaSecondary.external ? "noopener noreferrer" : undefined}
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[var(--primary)]">
                  {currentSlide.ctaSecondary.text}
                </Button>
              </a>
            ) : (
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[var(--primary)]">
                <FiDownload className="mr-2" />
                Baixar E-book Grátis
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Setas de navegação */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Slide anterior"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Próximo slide"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicadores */}
      {showIndicators && slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                index === currentIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

