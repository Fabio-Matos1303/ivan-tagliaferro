"use client";

import { useState, useCallback } from "react";
import { FiCalendar, FiMessageCircle } from "react-icons/fi";
import { AppointmentCard } from "./AppointmentCard";
import { Button } from "@/app/components/ui/Button";
import { AppointmentDetailModal, type AppointmentForModal } from "./AppointmentDetailModal";

interface CompromissosListProps {
  appointments: AppointmentForModal[];
  pastAppointments: AppointmentForModal[];
  whatsappUrl: string;
}

export function CompromissosList({
  appointments,
  pastAppointments,
  whatsappUrl,
}: CompromissosListProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentForModal | null>(null);

  const openModal = useCallback((appointment: AppointmentForModal) => {
    setSelectedAppointment(appointment);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSelectedAppointment(null);
  }, []);

  return (
    <>
      {/* Próximos Eventos */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Próximos Eventos
        </h2>
        <div className="flex items-center text-gray-600">
          <FiCalendar className="w-5 h-5 mr-2" />
          <span className="text-sm">
            {appointments.length} {appointments.length === 1 ? "compromisso" : "eventos"}
          </span>
        </div>
      </div>

      {appointments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appointments.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              appointment={appointment}
              onClick={() => openModal(appointment)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mb-6">
            <FiCalendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            Não há eventos agendados no momento.
          </p>
          <p className="text-gray-500 mb-8">
            Fique atento para futuros eventos e agendamentos!
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">
              <FiMessageCircle className="mr-2" />
              Entre em Contato
            </Button>
          </a>
        </div>
      )}

      {/* Eventos Passados */}
      {pastAppointments.length > 0 && (
        <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
              Eventos Recentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment._id}
                  appointment={appointment}
                  onClick={() => openModal(appointment)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <AppointmentDetailModal
        appointment={selectedAppointment}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </>
  );
}
