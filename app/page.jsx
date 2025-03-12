"use client";

// import NavBar from './components/NavBar'
import { useContext } from "react";
import { useProjectContext } from "@/context/ProjectContext";
import ProjectCard from "@/components/project-card";
import Tag from "../components/Tag";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  const { projects } = useProjectContext();

  return (
    // Add flex and justify-center classes to center the content horizontally
    <>
      <Link href={`/tag`}>
        <Button>All Tag</Button>
      </Link>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center">
        {/* md min768 */}
        {/* <div className='grid grid-cols-2 gap-0'>  */}
        {projects.map((p) => (
          // Add a key prop to the Link component for better performance
          // <Link key={p.id} href={`/category/all/project/${p.id}`} className="w-full max-w-2xl">
          <Link key={p.id} href={`/category/all/project/${p.id}`}>
            <ProjectCard
              name={p.name}
              description={p.description}
              techStack={p.techStack}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
