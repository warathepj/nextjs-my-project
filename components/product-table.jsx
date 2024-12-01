"use client"
import { useEffect, useState, useContext } from "react";
import { useProjectContext } from "@/context/ProjectContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// const projects = [
//   { id: "1", name: "Laptop" },
//   { id: "2", name: "Smartphone", price: "599.99" },
//   { id: "3", name: "Headphones", price: "149.99" },
//   { id: "4", name: "Tablet" },
//   { id: "5", name: "Smartwatch", price: "199.99" },
// ]

export default function ProductTable() {
  const { projects } = useProjectContext() || {};

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects
          .filter((project) => project.price) // Filter projects with a price
          .sort((a, b) => b.id - a.id) // Sort projects by ID in descending order
          .map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.id}</TableCell>
              <TableCell>{project.name}</TableCell>
              <TableCell className="text-right">{project.price}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  )
}

