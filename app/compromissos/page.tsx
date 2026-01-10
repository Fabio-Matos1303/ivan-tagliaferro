import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { getAppointments, getPastAppointments } from "@/app/lib/sanity/queries";
import { AppointmentCard } from "@/app/components/appointments/AppointmentCard";
import { FiMessageCircle, FiCalendar } from "react-icons/fi";

export const metadata = {
  title: "Compromissos Agendados | Ivan Tagliaferro",
  description: "Confira os próximos compromissos, eventos e agendamentos de Ivan Tagliaferro.",
};

// Revalidar a página a cada 60 segundos para buscar novos compromissos
export const revalidate = 60;

export default async function CompromissosPage() {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os compromissos e eventos agendados.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  // Buscar compromissos do Sanity
  let appointments = [];
  let pastAppointments = [];

  try {
    appointments = await getAppointments();
    pastAppointments = await getPastAppointments();
  } catch (error) {
    console.error("Erro ao buscar compromissos do Sanity:", error);
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Compromissos Agendados
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Confira os próximos eventos, consultorias, mentorias e compromissos agendados
            </p>
          </div>
        </div>
      </section>

      {/* Compromissos Futuros */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Próximos Compromissos
              </h2>
              <div className="flex items-center text-gray-600">
                <FiCalendar className="w-5 h-5 mr-2" />
                <span className="text-sm">
                  {appointments.length} {appointments.length === 1 ? "compromisso" : "compromissos"}
                </span>
              </div>
            </div>

            {appointments.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {appointments.map((appointment: any) => (
                  <AppointmentCard key={appointment._id} appointment={appointment} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mb-6">
                  <FiCalendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                </div>
                <p className="text-gray-600 mb-6 text-lg">
                  Não há compromissos agendados no momento.
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
          </div>
        </div>
      </section>

      {/* Compromissos Passados (se houver) */}
      {pastAppointments.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
                Compromissos Recentes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pastAppointments.map((appointment: any) => (
                  <AppointmentCard key={appointment._id} appointment={appointment} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Quer agendar um compromisso?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Entre em contato para agendar uma consultoria, mentoria ou participar de nossos eventos.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              <FiMessageCircle className="mr-2" />
              Entrar em Contato
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

