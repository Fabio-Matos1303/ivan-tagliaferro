"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { FiX, FiCalendar, FiMapPin, FiVideo, FiGlobe, FiClock, FiExternalLink } from "react-icons/fi";
import { urlFor } from "../../../sanity/lib/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";

export type AppointmentForModal = {
  _id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  location: {
    type: string;
    address?: string;
    link?: string;
  };
  status: string;
  image?: { asset?: { _ref?: string }; alt?: string };
  featured?: boolean;
};

const typeLabels: Record<string, string> = {
  consultoria: "Consultoria",
  mentoria: "Mentoria",
  palestra: "Palestra",
  workshop: "Workshop",
  reuniao: "Reunião",
  evento: "Evento",
  outro: "Outro",
};

const statusLabels: Record<string, string> = {
  agendado: "Agendado",
  confirmado: "Confirmado",
  em_andamento: "Em Andamento",
  concluido: "Concluído",
  cancelado: "Cancelado",
};

const statusColors: Record<string, "default" | "primary" | "success" | "warning"> = {
  agendado: "default",
  confirmado: "primary",
  em_andamento: "primary",
  concluido: "success",
  cancelado: "warning",
};

interface AppointmentDetailModalProps {
  appointment: AppointmentForModal | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentDetailModal({ appointment, isOpen, onClose }: AppointmentDetailModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen || !appointment) return null;

  const imageUrl = appointment.image
    ? urlFor(appointment.image).width(900).height(500).url()
    : null;

  const formattedDate = appointment.date
    ? format(new Date(appointment.date), "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })
    : "";

  const formattedTime = appointment.date
    ? format(new Date(appointment.date), "HH:mm", { locale: ptBR })
    : "";

  const typeLabel = typeLabels[appointment.type] || appointment.type;
  const statusLabel = statusLabels[appointment.status] || appointment.status;
  const statusColor = statusColors[appointment.status] || "default";

  const LocationIcon =
    appointment.location?.type === "online"
      ? FiVideo
      : appointment.location?.type === "hibrido"
        ? FiGlobe
        : FiMapPin;

  const locationLabel =
    appointment.location?.type === "online"
      ? "Online"
      : appointment.location?.type === "hibrido"
        ? "Híbrido"
        : "Presencial";

  const whatsappMessage = `Olá! Gostaria de mais informações sobre: ${appointment.title}`;
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow-md transition hover:bg-white hover:text-gray-900"
          aria-label="Fechar"
        >
          <FiX className="h-5 w-5" />
        </button>

        {/* Image */}
        {imageUrl && (
          <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-2xl bg-gray-200">
            <Image
              src={imageUrl}
              alt={appointment.image?.alt || appointment.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-12 flex flex-wrap gap-2">
              {appointment.featured && (
                <Badge variant="primary">Destaque</Badge>
              )}
              <Badge variant={statusColor as any}>{statusLabel}</Badge>
              <Badge variant="default">{typeLabel}</Badge>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          {!imageUrl && (
            <div className="mb-4 flex flex-wrap gap-2">
              {appointment.featured && <Badge variant="primary">Destaque</Badge>}
              <Badge variant={statusColor as any}>{statusLabel}</Badge>
              <Badge variant="default">{typeLabel}</Badge>
            </div>
          )}

          <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {appointment.title}
          </h2>

          {appointment.description && (
            <div className="prose prose-gray max-w-none mb-6">
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {appointment.description}
              </p>
            </div>
          )}

          <div className="space-y-4 mb-6">
            {formattedDate && (
              <div className="flex items-center text-gray-700">
                <FiCalendar className="w-5 h-5 mr-3 text-[var(--primary)] flex-shrink-0" />
                <span className="font-medium">{formattedDate}</span>
              </div>
            )}

            {formattedTime && (
              <div className="flex items-center text-gray-700">
                <FiClock className="w-5 h-5 mr-3 text-[var(--primary)] flex-shrink-0" />
                <span>{formattedTime}</span>
              </div>
            )}

            {appointment.location && (
              <div className="flex items-start text-gray-700">
                <LocationIcon className="w-5 h-5 mr-3 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="font-medium">{locationLabel}</span>
                  {appointment.location.address && (
                    <p className="text-gray-600 mt-1">{appointment.location.address}</p>
                  )}
                  {appointment.location.link && (
                    <a
                      href={appointment.location.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--primary)] hover:underline mt-2"
                    >
                      Acessar link do evento
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button variant="primary">Entrar em contato</Button>
            </a>
            {appointment.location?.link && (
              <a
                href={appointment.location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="secondary">Acessar link do evento</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
