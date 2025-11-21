import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { QuickContact } from '../components/sections/QuickContact';

export function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <QuickContact />
    </main>
  );
}

