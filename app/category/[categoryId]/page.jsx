"use client"
import Link from 'next/link';
import { useContext } from 'react';
import { useProjectContext } from '../../../context/ProjectContext';
import Card from '@/app/components/Card'

const Category = ({ params }) => {
  const { projects } = useProjectContext();
  const param = params.categoryId;
  const project = projects.filter(project => project.tag.includes(param));
  console.log("PPPPPPPProject: ", project);
  return (
    <div>
      Category
    {/* <pre>project: {project}</pre>  */}
    <pre>param: {param}</pre> 
    <pre>params.categoryId: {params.categoryId}</pre> 
    <p>tech-stack: {projects.techStack}</p>
    {project.map((p) => (
      <Link href={`/category/${param}/project/${p.id}`}>
      <Card 
        name={p.name}
        description={p.description}
      />
    </Link>
    ))}
    
    </div>
  )
}

export default Category