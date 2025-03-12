"use client"
import { useProjectContext } from '@/context/ProjectContext';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

const Tag = () => {
  const { projects } = useProjectContext();

  // Extract unique tags from all projects
  const uniqueTags = [...new Set(
    projects.flatMap(project => project.tag)
  )].sort();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">All Tags</h1>
      <div className="flex flex-wrap gap-2">
        {uniqueTags.map((tag) => (
          <Link key={tag} href={`/separate-by-tag/${tag}`}>
            <Badge 
              variant="secondary" 
              className="cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700"
            >
              {tag}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tag