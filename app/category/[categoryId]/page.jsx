"use client"
import Link from 'next/link';
import { useContext } from 'react';
import { useProjectContext } from '@/context/ProjectContext';
import ProjectCard from '@/components/project-card';

const Category = ({ params }) => {
  const { projects } = useProjectContext();
  const param = params.categoryId;
  const project = projects.filter(project => project.tag.includes(param));
  // console.log("PPPPPPPProject: ", project);
  return (
    <div>
      Category
    {/* <pre>project: {project}</pre>  */}
    <pre>param: {param}</pre> 
    <pre>params.categoryId: {params.categoryId}</pre> 
    <pre>tech-stack: {projects.techStack}</pre>
    <div className="flex flex-col items-center">

    {project.map((p) => (
      <Link href={`/category/${param}/project/${p.id}`}>
      <ProjectCard 
        name={p.name}
        description={p.description}
        techStack={p.techStack}
      />
    </Link>
    ))}

    </div>
    </div>
  )
}

export default Category