import { Marquee } from '@/components/ui/Marquee';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Works } from '@/components/sections/Works';
import { Product } from '@/components/sections/Product';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import projectsData from '@/data/projects.json';

const MARQUEE_ITEMS = [
  'Azure AI',
  'Generative AI',
  'Cloud Architecture',
  'Full-Stack Engineering',
  'Consulting',
];

export function Home() {
  return (
    <>
      <Hero />
      <Marquee items={MARQUEE_ITEMS} />
      <About />
      <Works projects={projectsData.projects} />
      <Product />
      <Skills />
      <Contact />
    </>
  );
}
