import { motion } from 'framer-motion';
import projects from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-12">
      <h2 className="font-titulo text-4xl mb-8 text-center">Proyectos Destacados</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} key={p.id}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}