import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import ClientsSection from '@/components/ClientsSection';
import ContactCTA from '@/components/ContactCTA.tsx';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <ClientsSection />
      <ContactCTA />
    </>
  );
}
