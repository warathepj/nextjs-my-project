"use client";
import { useEffect, useState, useContext } from "react";
import { useProjectContext } from "@/context/ProjectContext";
import ProjectDetailCard from "@/components/project-detail-card";

const Project = ({ params }) => {
  console.log("params.projectId: ", params.projectId);
  const param = params.projectId;
  const [data, setData] = useState(null);
  const { projects } = useProjectContext();
  const project = projects.filter((project) => project.id.includes(param));
  // console.log("@@@@@@@@@@project: ", project);
  // const image = images.filter(image => image.tag.includes(param));
  // useEffect(() => {
  //   // Fetch the JSON data
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://warathepj.github.io/nextjs-my-project-json/project-detail.json');
  //       const result = await response.json();
  //       console.log(result); // Log the data to the console
  //       setData(result);

  //     } catch (error) {
  //       console.error('Error fetching the data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {/* Project
      <p>param: {param}</p>
      <p>project.name: {project.name}</p> */}
      {project.map((p) => (
        <ProjectDetailCard
          name={p.name}
          description={p.description}
          techStack={p.techStack}
          functions={p.function}
          images={p.images}
          web={p.web}
          github={p.github}
          sell={p.sell}
        />
      ))}
      {/* <ul> */}
        {/* {project.map((p) => (
          <li key={p.id}>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <p>Tech Stack: {p?.["techStack"].join(", ")}</p>
            <ul>
              {p?.["function"].map((func) => (
                <li key={func}>
                  <p>&#x2699; {func}</p>
                </li>
              ))}
            </ul>
            <p>Function: {p?.["function"].join(", ")}</p>
          </li>
        ))} */}
      {/* </ul> */}
      {/* <p>project name: {projectName}</p>
      <p>description: {description}</p>
      <ul>
        <li>{techStack}</li>
        <li>{techStack}</li>
        <li>{techStack}</li>
      </ul> */}
    </div>
  );
};

export default Project;
