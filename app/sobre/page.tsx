import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { getWhatsAppLink, siteConfig } from "@/app/lib/constants";
import { AlanaAssistant } from "@/app/components/sections/AlanaAssistant";
import { FiMessageCircle, FiAward, FiBook, FiGlobe, FiUsers, FiTarget } from "react-icons/fi";
import Image from "next/image";

export const metadata = {
  title: "Quem Sou | Ivan Tagliaferro",
  description: "Conheça Ivan Tagliaferro, especialista em educação internacional com mais de 20 anos de experiência, prêmios internacionais e expertise em Comunicação Não-Violenta.",
};

export default function SobrePage() {
  const whatsappMessage = "Olá Ivan! Gostaria de conhecer mais sobre seu trabalho e experiência.";
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Uma Trajetória de Conexões e Transformação Global
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto">
              Especialista em educação internacional com mais de 20 anos transformando vidas através da educação e mentorias.
            </p>
          </div>
        </div>
      </section>

      {/* Biografia */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Ivan Tagliaferro
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Com mais de <strong>20 anos de atuação na educação internacional</strong>, minha carreira é dedicada a construir pontes que permitam que estudantes de todo o mundo cruzem fronteiras com segurança e propósito. Como linguista de formação e especialista em educação internacional, já facilitei a jornada de milhares de estudantes, sempre pautado por uma visão que une rigor técnico e um profundo olhar humanizado sobre o projeto de vida de cada indivíduo.
                  </p>
                  <p>
                    Esse compromisso com a inovação e a excelência me rendeu reconhecimentos internacionais de prestígio, como as <strong>duas premiações no CPIEA (Canadian Premier International Education Awards)</strong>, no Canadá, ser <strong>finalista na World Education Summit Award em Dubai</strong>, entre outras. Hoje, atuo na linha de frente do setor como diretor de relações internacionais do CLLC (Canadian Language Learning College), representante da Maritimes Immigration no Brasil e diretor comercial da ABRAPEI, conectando agências e instituições ao redor do mundo.
                  </p>
                  <p>
                    Acredito que o intercâmbio é, acima de tudo, um exercício de comunicação e empatia. Por isso, integro minha formação como pesquisador e mentor em <strong>Comunicação Não-Violenta (CNV)</strong> — sendo candidato à certificação internacional pelo CNVC — em todos os meus projetos. Atualmente, trabalho em diversos projetos que exploram como a CNV pode transformar a experiência cultural, harmonizando as relações entre intercambistas, famílias anfitriãs, agências e escolas.
                  </p>
                  <p>
                    Além do universo educacional, contribuo com o mercado corporativo como curador da Expo Gestão e RH e parte do time de conselheiros da Connect Aceleradora de Startups, trazendo insights sobre liderança e desenvolvimento humano. Sou um viajante apaixonado que já explorou <strong>mais de 100 países</strong>, e utilizo esse repertório cultural único para garantir que cada etapa do processo de um intercambista — seja para estudar, trabalhar ou imigrar — seja tratada com a exclusividade e o cuidado que o seu sonho merece.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="relative">
                  <Image
                    src="/fotos_ivan/IMG_4949.jpg"
                    alt="Ivan Tagliaferro - Especialista em Educação Internacional"
                    width={600}
                    height={400}
                    className="rounded-2xl object-cover shadow-xl w-full"
                  />
                </div>
                <div className="relative">
                  <Image
                    src="/fotos_ivan/My Photo.jpeg"
                    alt="Ivan Tagliaferro - Especialista em Educação Internacional"
                    width={600}
                    height={600}
                    className="rounded-2xl object-cover shadow-xl w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto e Autoridade */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Impacto e Autoridade
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <FiBook className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  20+ Anos de Experiência
                </h3>
                <p className="text-gray-600">
                  Mais de duas décadas transformando vidas através da educação internacional e mentorias.
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex flex-row items-center justify-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <FiAward className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <Image
                    src="/CPIEA-LOGO.png"
                    alt="CPIEA - Canadian Premier International Education Awards"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Reconhecimento Internacional
                </h3>
                <p className="text-gray-600">
                  Prêmios e indicações internacionais por inovação e excelência no setor (CPIEA, World Education Summit).
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-3">
                    <FiTarget className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Liderança Estratégica
                </h3>
                <p className="text-gray-600">
                  Diretor na CLLC (Canadá) e ABRAPEI (Brasil), Advisor na Connect Aceleradora de Startups, Curador da Expo Gestão & RH e representante da Maritimes Immigration no Brasil.
                </p>
              </Card>

              <Card className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <FiUsers className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Diferencial Humano
                </h3>
                <p className="text-gray-600">
                  Mentor em Comunicação Não-Violenta (CNV) para empresas e gestores.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[var(--primary)]/5 to-[var(--primary-dark)]/5 rounded-2xl p-8 lg:p-12 border-l-4 border-[var(--primary)]">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Propósito
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Humanizar as fronteiras e potencializar conexões globais através da ética e da empatia.</strong> Meu propósito é transformar a mobilidade internacional em um movimento consciente. Acredito que, quando conectamos as instituições certas aos parceiros ideais e preparamos as pessoas emocionalmente, criamos um mundo onde as fronteiras deixam de ser barreiras e passam a ser portais de crescimento humano e organizacional.
                </p>
                <p>
                  Potencializar jornadas globais através de conexões éticas e conscientes. Acredito que o acesso à educação internacional deve ser guiado por quem entende o sistema por dentro. Meu propósito é servir como uma bússola para aqueles que buscam transformar suas vidas no exterior, bem como suas famílias, garantindo que cada passo seja dado sobre uma base de confiança, conhecimento real e inteligência emocional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
              Missão
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
              Ser o <strong>ponto de convergência estratégico no ecossistema da educação e carreira internacional</strong>. Minha missão é oferecer curadoria independente e mentoria de alta performance para os quatro pilares do setor:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Para Estudantes e Profissionais
                </h3>
                <p className="text-gray-600">
                  Garantir segurança, clareza e acolhimento em seus projetos de vida.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Para Instituições de Ensino
                </h3>
                <p className="text-gray-600">
                  Ampliar sua presença global e excelência através de parcerias estratégicas.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Para Agências de Intercâmbio
                </h3>
                <p className="text-gray-600">
                  Atuar como o selo de confiança e o elo de conexão com as melhores instituições mundiais.
                </p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Para Empresas
                </h3>
                <p className="text-gray-600">
                  Desenvolver lideranças e culturas organizacionais através da Comunicação Não-Violenta (CNV).
                </p>
              </Card>
            </div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Atuar como elo estratégico entre o sonho do intercambista e as melhores instituições e agências do mundo. Minha missão é oferecer curadoria independente e mentoria especializada. Nosso foco é a facilitação do processo, conectando estudantes e profissionais a parceiros de comprovada excelência, sempre mediando essa relação com as ferramentas da Comunicação Não-Violenta e a expertise de duas décadas de mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mr-3">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Integridade Sistêmica e Isenção
                  </h3>
                </div>
                <p className="text-gray-600">
                  Atuo pautado pela independência e minha autoridade é sustentada pela honestidade intelectual e pelo compromisso único com o sucesso real de cada conexão que facilito.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mr-3">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Inteligência Relacional
                  </h3>
                </div>
                <p className="text-gray-600">
                  A base de qualquer transição internacional ou corporativa de sucesso é a qualidade da comunicação. Utilizo a CNV para mediar relações entre escolas, agências e famílias, garantindo que as necessidades de todas as partes sejam compreendidas e atendidas.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mr-3">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Autoridade com Visão Global
                  </h3>
                </div>
                <p className="text-gray-600">
                  Com vivência em mais de 100 países e premiações internacionais, trago a segurança de quem conhece os processos, as culturas e as tendências de mercado por dentro.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mr-3">
                    4
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Excelência em Curadoria
                  </h3>
                </div>
                <p className="text-gray-600">
                  Acredito no poder das escolhas criteriosas. Seja selecionando uma universidade de elite, uma agência de confiança ou um plano migratório, aplico o mais alto rigor técnico para garantir que cada indicação seja um selo de qualidade.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mr-3">
                    5
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Autonomia
                  </h3>
                </div>
                <p className="text-gray-600">
                  Meu compromisso primordial é com o projeto de vida do meu cliente. Como não atuo na ponta da venda direta, tenho a liberdade de selecionar e indicar apenas agências e instituições que atendam aos mais altos critérios de qualidade e segurança.
                </p>
              </Card>

              <Card>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center font-bold mr-3">
                    6
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Transparência
                  </h3>
                </div>
                <p className="text-gray-600">
                  A ética é o alicerce do meu papel como elo. Ofereço clareza total sobre processos, vistos e possibilidades reais, assegurando que o estudante tenha todas as informações necessárias para tomar decisões soberanas.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alana Assistant */}
      <AlanaAssistant />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[var(--primary)] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vamos conversar sobre seus objetivos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Estou aqui para ajudar você a transformar seu sonho de intercâmbio em realidade.
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

