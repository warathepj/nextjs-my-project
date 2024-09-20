"use client"
import React, { useEffect, useState, useContext } from 'react';
import { useProjectContext } from '../../context/ProjectContext';
import Link from 'next/link';
import Button from './Button';

const Card = ({ className, projectName, description, techStack }) => {
  const { projects } = useProjectContext();
  console.log("projects", projects);
  
  const [data, setData] = useState(null);

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
    <div className={className}>
      Card
      <div>
      <h1>Projects from context</h1>
      <ul>
        {projects.map((project) => (
          <li 
            className='bg-red-300 mb-4'
            key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Tech Stack: {project?.['tech-stack'].join(', ')}</p>
            {/* <p>Tech Stack: {project.['tech-stack'].join(', ')}</p> */}
          </li>
        ))}
      </ul>
    </div>
{/* <p>...............</p>
      <p>Rendered JSON Data</p>
      {data && (
        <pre>
          {data.projectDetail.map((project) => (
            <p key={project.id}>
              <strong>Project Name:</strong> {project.name}
              <strong>Description:</strong> {project.description}
            </p>
          ))}
        </pre>
      )} */}

      {/* {data && (
        <p>{JSON.stringify(data, null, 2)}</p> // Render the JSON data inside a <pre> tag
      )} */}
      {/* <p>project name: {projectName}</p>
      <p>description: {description}</p>
      <p>tech stack: {techStack}</p> */}
    </div>
  )
}

export default Card

//////////////////




// const Tag = () => {
//   const msg = "test";

//   const [nameClass, setNameClass] = useState('');
//   const nameClass1 = "bg-green-500";

  


  // return (
  //   <div>
  //       NavBar
  //       <p>--------------DEBUG START--------------</p>
  //       <div>
      
    //    <p>className: {nameClass}</p>
    // </div>
    