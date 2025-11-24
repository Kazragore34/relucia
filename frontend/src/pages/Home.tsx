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
        title="Relucia - Limpieza Madrid y Aranjuez | Limpieza por Horas | Limpieza de Casas y Obras"
        description="Relucia ofrece servicios profesionales de limpieza por horas en Madrid y Aranjuez. Limpieza de casas, limpieza post-obra, limpieza de obras, oficinas y más. Llegamos a toda la Comunidad de Madrid. Profesionales certificados, materiales incluidos. Reserva ahora por WhatsApp."
        keywords="limpieza Madrid, limpieza Aranjuez, limpieza por horas, limpieza por horas Madrid, limpieza de casas, limpieza de casas Madrid, limpieza obras, limpieza post obra Madrid, limpieza post obra Aranjuez, servicios limpieza profesional Madrid, empresa limpieza Madrid, limpieza hogar Madrid, limpieza oficinas Madrid, limpieza Comunidad Madrid"
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

