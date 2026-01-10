import Image from "next/image";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { FiCalendar, FiMapPin, FiVideo, FiGlobe, FiClock } from "react-icons/fi";
import { urlFor } from "../../../sanity/lib/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface AppointmentCardProps {
  appointment: {
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
    image?: any;
    featured?: boolean;
  };
}

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

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const imageUrl = appointment.image
    ? urlFor(appointment.image).width(600).height(400).url()
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

  const locationIcon = appointment.location?.type === "online" 
    ? FiVideo 
    : appointment.location?.type === "hibrido"
    ? FiGlobe
    : FiMapPin;

  const LocationIcon = locationIcon;

  return (
    <Card hover className="flex flex-col h-full">
      {imageUrl && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
          <Image
            src={imageUrl}
            alt={appointment.image?.alt || appointment.title}
            fill
            className="object-cover"
          />
          {appointment.featured && (
            <div className="absolute top-2 right-2">
              <Badge variant="primary">Destaque</Badge>
            </div>
          )}
        </div>
      )}

      {!imageUrl && appointment.featured && (
        <div className="mb-4">
          <Badge variant="primary">Destaque</Badge>
        </div>
      )}

      <div className="flex items-center justify-between mb-3">
        <Badge variant={statusColor as any}>{statusLabel}</Badge>
        <Badge variant="default">{typeLabel}</Badge>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
        {appointment.title}
      </h3>

      {appointment.description && (
        <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
          {appointment.description}
        </p>
      )}

      <div className="space-y-2 mb-4">
        {formattedDate && (
          <div className="flex items-center text-sm text-gray-700">
            <FiCalendar className="w-4 h-4 mr-2 text-[var(--primary)]" />
            <span className="font-medium">{formattedDate}</span>
          </div>
        )}

        {formattedTime && (
          <div className="flex items-center text-sm text-gray-700">
            <FiClock className="w-4 h-4 mr-2 text-[var(--primary)]" />
            <span>{formattedTime}</span>
          </div>
        )}

        {appointment.location && (
          <div className="flex items-start text-sm text-gray-700">
            <LocationIcon className="w-4 h-4 mr-2 text-[var(--primary)] mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <span className="font-medium capitalize">
                {appointment.location.type === "online" ? "Online" : 
                 appointment.location.type === "hibrido" ? "Híbrido" : "Presencial"}
              </span>
              {appointment.location.address && (
                <p className="text-gray-600 mt-1">{appointment.location.address}</p>
              )}
              {appointment.location.link && (
                <a
                  href={appointment.location.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline mt-1 block"
                >
                  Acessar link
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

