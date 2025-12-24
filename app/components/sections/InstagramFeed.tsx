"use client";

import { useEffect, useRef, useState } from "react";
import { FiInstagram } from "react-icons/fi";
import { siteConfig } from "@/app/lib/constants";

interface InstagramFeedProps {
  username?: string;
  postsCount?: number;
  variant?: "footer" | "full";
  widgetId?: string; // ID do widget do SnapWidget (opcional)
}

export function InstagramFeed({ 
  username = "ivantagliaferro",
  postsCount = 6,
  variant = "full",
  widgetId = "" // Configure este valor após criar o widget no SnapWidget
}: InstagramFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Se não houver widgetId configurado, mostra placeholder
    if (!widgetId) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    // Widget do SnapWidget - requer widgetId gerado em snapwidget.com
    const iframe = document.createElement('iframe');
    iframe.src = `https://snapwidget.com/embed/${widgetId}`;
    iframe.className = 'snapwidget-widget';
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.style.border = 'none';
    iframe.style.overflow = 'hidden';
    iframe.style.width = '100%';
    iframe.style.height = variant === 'footer' ? '300px' : '600px';
    
    iframe.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };
    
    iframe.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
    
    container.appendChild(iframe);
    setIsLoading(false);

    return () => {
      // Cleanup seguro
      if (container && iframe && container.contains(iframe)) {
        try {
          container.removeChild(iframe);
        } catch (error) {
          // Ignora erros se o elemento já foi removido pelo React
        }
      }
    };
  }, [username, postsCount, variant, widgetId]);

  if (variant === "footer") {
    return (
      <div className="w-full">
        <div 
          ref={containerRef}
          className="w-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden"
        >
          {isLoading && !hasError && (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">
              Carregando feed...
            </div>
          )}
          {hasError && (
            <div className="flex flex-col items-center justify-center h-full p-4 text-center">
              <FiInstagram className="w-12 h-12 text-gray-400 mb-3" />
              <p className="text-sm text-gray-600 mb-2">
                Configure o widget do Instagram
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-pink-600 hover:underline"
              >
                Ver perfil no Instagram →
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center">
          <FiInstagram className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Instagram</h3>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
          >
            @{username}
          </a>
        </div>
      </div>
      
      <div 
        ref={containerRef}
        className="w-full min-h-[600px] bg-gray-100 rounded-lg overflow-hidden"
      >
        {isLoading && !hasError && (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <p className="mb-2">Carregando feed do Instagram...</p>
              <p className="text-sm">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  Ver perfil completo no Instagram →
                </a>
              </p>
            </div>
          </div>
        )}
        {hasError && (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center mb-4">
              <FiInstagram className="w-8 h-8 text-white" />
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2">
              @{username}
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Configure o widget do Instagram para ver as últimas publicações
            </p>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline font-medium"
            >
              Ver perfil completo no Instagram →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

