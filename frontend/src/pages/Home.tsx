import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { AboutSection } from '../components/sections/AboutSection';
import { QuickContact } from '../components/sections/QuickContact';
import { FAQ } from '../components/sections/FAQ';
import { SEO } from '../components/SEO';

export function Home() {
  return (
    <>
      <SEO
        title="Relucia - Servicios de Limpieza Profesional en Madrid | Limpieza por Horas"
        description="Relucia ofrece servicios profesionales de limpieza por horas en Madrid. Limpieza de casas, post-obra, oficinas y más. Llegamos a todo Madrid. Profesionales certificados, materiales incluidos. Reserva ahora por WhatsApp."
        keywords="limpieza Madrid, limpieza por horas Madrid, limpieza casas Madrid, limpieza post obra Madrid, servicios limpieza profesional Madrid, empresa limpieza Madrid, limpieza hogar Madrid, limpieza oficinas Madrid"
        canonical="https://www.relucia.es/"
      />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutSection />
        <FAQ />
        <QuickContact />
      </main>
    </>
  );
}

