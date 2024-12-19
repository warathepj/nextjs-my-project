"use client";

import * as React from "react";
import Link from "next/link";
// import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react'

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Centralized list of categories
const CATEGORIES = [
  {
    href: "/category/pydanticai",
    label: "PydanticAI",
    icon: null, // Optional: you can add icon components later if needed
  },
  {
    href: "/category/html",
    label: "HTML",
    icon: null, // Optional: you can add icon components later if needed
  },
  {
    href: "/category/css",
    label: "CSS",
    icon: null,
  },
  {
    href: "/category/tailwind",
    label: "Tailwind CSS",
    icon: null,
  },
  {
    href: "/category/javascript",
    label: "Javascript",
    icon: null,
  },
  {
    href: "/category/next",
    label: "Next JS",
    icon: null,
  },
  {
    href: "/category/rust",
    label: "Rust",
    icon: null,
  },
  // You can easily add more categories here
  {
    href: "/category/python",
    label: "Python",
    icon: null,
  },
  {
    href: "/category/fastapi",
    label: "FastAPI",
    icon: null,
  },
  {
    href: "/category/shadcn",
    label: "Shadcn",
    icon: null,
  },
];

export default function DropdownMenuIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Project Category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {CATEGORIES.map((category, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link href={category.href} className="flex items-center">
              {category.icon && <category.icon className="mr-2 h-4 w-4" />}
              <span>{category.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
