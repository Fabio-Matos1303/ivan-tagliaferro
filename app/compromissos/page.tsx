import { Button } from "@/app/components/ui/Button";
import { getWhatsAppLink } from "@/app/lib/constants";
import { getAppointments, getPastAppointments } from "@/app/lib/sanity/queries";
import { CompromissosList } from "@/app/components/appointments/CompromissosList";
import { FiMessageCircle } from "react-icons/fi";

export const metadata = {
  title: "Eventos Agendados | Ivan Tagliaferro",
  description: "Confira os próximos Eventos, eventos e agendamentos de Ivan Tagliaferro.",
};

// Revalidar a página a cada 60 segundos para buscar novos Eventos
export const revalidate = 60;

export default async function EventosPage() {
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os Eventos e eventos agendados.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  // Buscar Eventos do Sanity
  let appointments = [];
  let pastAppointments = [];

  try {
    appointments = await getAppointments();
    pastAppointments = await getPastAppointments();
  } catch (error) {
    console.error("Erro ao buscar Eventos do Sanity:", error);
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Eventos Agendados
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Confira os próximos eventos, consultorias, mentorias e Eventos agendados
            </p>
          </div>
        </div>
      </section>

      {/* Eventos Futuros e Recentes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <CompromissosList
              appointments={appointments}
              pastAppointments={pastAppointments}
              whatsappUrl={whatsappUrl}
            />
          </div>
        </div>
      </section>

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

