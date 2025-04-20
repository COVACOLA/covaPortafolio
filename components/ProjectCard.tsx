import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl bg-fondo p-4 shadow-md hover:shadow-lg transition-shadow border-2 border-contraste/10">
      <div className="relative h-40 w-full mb-4 overflow-hidden rounded-xl">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
      </div>
      <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
      <p className="mb-4 text-sm text-contraste/80 line-clamp-3">{project.description}</p>
      <Link href={project.url} className="text-primario hover:underline" target="_blank" rel="noopener noreferrer">
        Ver más →
      </Link>
    </article>
  );
}

