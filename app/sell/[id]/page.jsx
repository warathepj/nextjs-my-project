"use client";
import { useEffect, useState, useContext } from "react";
import { useProjectContext } from "@/context/ProjectContext";
import LicenseRender from "@/components/license";



const Id = ({ params }) => {
  const { projects } = useProjectContext() || {};
  // const project =
  //   projects && projects.length > 0
  //     ? projects.filter((project) => project.sellId?.includes(params.id))
  //     : [];
  const project =
  projects && projects.length > 0
    ? projects.filter((project) => project.sellId?.includes(params.id))[0]  // Access first element
    : null;  // or {} if you prefer an empty object

  // const { projects } = useProjectContext();
  console.log("projects fm sell/id: ", projects); // ok
  // const project = projects.filter((project) => project.sellId.includes(params.id));
  console.log("project fm sell/id: ", project); // ok
  // console.log("project.name fm sell/id: ", project.name); // 
  const id = project ? project.id : 'Unknown Project';
  console.log("id fm sell/id: ", id); // 
  const price = project ? project.price : 'Unknown Project';
  console.log("price fm sell/id: ", price); // 
  const projectName = project ? project.name : 'Unknown Project';
  console.log("projectName fm sell/id: ", projectName); // 
  const version = project ? project.version : 'Unknown Version';
  console.log("version fm sell/id: ", version); // 

  const currentYear = new Date().getFullYear();

const sampleLicense = {
  name: "ใบอนุญาตซอฟต์แวร์",
  description: "ใบอนุญาตซอฟต์แวร์แบบย่อ",
  permissions: [
    "ศึกษาซอร์สโค้ด",
    "แก้ไขโค้ดสำหรับการใช้งานของตนเอง",
    "พัฒนาต่อยอดจากโค้ดต้นฉบับ",
  ],
  limitations: [
    "ไม่สามารถแจกจ่าย",
    "ไม่สามารถขายต่อ",
    "ผู้ขายไม่รับผิดชอบความเสียหาย",
  ],
  conditions: ["License and copyright notice"],
  fullText: `ใบอนุญาตซอฟต์แวร์
  
  ลิขสิทธิ์ (c) ${currentYear} ${projectName}
  
  นี่คือใบอนุญาตซอฟต์แวร์แบบกรรมสิทธิ์สำหรับ repository ส่วนตัว
  
  อนุญาตให้ผู้ซื้อซอฟต์แวร์ใช้งานภายใต้เงื่อนไขดังต่อไปนี้:
  
  1. ซอฟต์แวร์และเอกสารที่เกี่ยวข้องมีไว้สำหรับการซื้อขายเท่านั้น
  2. ผู้ซื้อได้รับสิทธิ์ในการ:
     - ศึกษาซอร์สโค้ด
     - แก้ไขโค้ดสำหรับการใช้งานของตนเอง
     - พัฒนาต่อยอดจากโค้ดต้นฉบับ
  3. ผู้ซื้อไม่สามารถ:
     - แจกจ่ายโค้ดต้นฉบับหรือเวอร์ชันที่แก้ไข
     - ขายหรือให้สิทธิ์การใช้งานต่อแก่บุคคลที่สาม
     - ใช้โค้ดในลักษณะที่แข่งขันโดยตรงกับผลิตภัณฑ์ต้นฉบับ
  
  ข้อจำกัดความรับผิดชอบ:
  ซอฟต์แวร์นี้จัดทำขึ้นในลักษณะ "ตามสภาพที่เป็นอยู่" โดยไม่มีการรับประกันใดๆ ทั้งสิ้น 
  ไม่ว่าจะโดยชัดแจ้งหรือโดยนัย ในทุกกรณี ผู้ถือลิขสิทธิ์หรือผู้ขายจะไม่รับผิดชอบต่อการเรียกร้อง 
  ความเสียหาย หรือความรับผิดอื่นใด ไม่ว่าจะเป็นการกระทำตามสัญญา การละเมิด 
  หรือการกระทำอื่นใดที่เกิดขึ้นจาก เกี่ยวข้องกับซอฟต์แวร์ หรือการใช้งานหรือการดำเนินการอื่นๆ ในซอฟต์แวร์
  `,
};

  return (
    <main className="container mx-auto py-8">
      <p>{params.id}</p>
      <h1 className="text-3xl font-bold mb-6 text-center">ใบอนุญาตซอฟต์แวร์ {projectName}</h1>
      {/* <LicenseRender {...sampleLicense} /> */}
      <LicenseRender 
        {...sampleLicense} 
        idProp={id} 
        priceProp={price} 
        projectNameProp={projectName} 
        versionProp={version}  
      />
    </main>
  );
};

export default Id;
