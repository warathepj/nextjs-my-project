"use client"
import { useProjectContext } from '@/context/ProjectContext';
import ProjectCard from '@/components/project-card';
import Link from 'next/link';

const SeparateByTag = ({ params }) => {
  const { projects } = useProjectContext();
  const tagName = params.tag;
  
  // Filter projects that have the selected tag
  const filteredProjects = projects.filter(project => 
    project.tag.includes(tagName)
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Projects tagged with: {tagName}</h1>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
        {filteredProjects.map((project) => (
          <Link key={project.id} href={`/category/${tagName}/project/${project.id}`}>
            <ProjectCard
              name={project.name}
              description={project.description}
              techStack={project.techStack}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SeparateByTag;