'use client'

import * as React from 'react'
import Link from 'next/link'
// import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function DropdownMenuIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Project Category</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/category/html" className="flex items-center">
            {/* <GithubIcon className="mr-2 h-4 w-4" /> */}
            <span>html</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/category/css" className="flex items-center">
            {/* <TwitterIcon className="mr-2 h-4 w-4" /> */}
            <span>css</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/category/tailwind" className="flex items-center">
            {/* <LinkedinIcon className="mr-2 h-4 w-4" /> */}
            <span>Tailwind CSS</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/category/javascript" className="flex items-center">
            {/* <LinkedinIcon className="mr-2 h-4 w-4" /> */}
            <span>Javascript</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/category/next" className="flex items-center">
            {/* <LinkedinIcon className="mr-2 h-4 w-4" /> */}
            <span>Next JS</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/category/rust" className="flex items-center">
            {/* <LinkedinIcon className="mr-2 h-4 w-4" /> */}
            <span>Rust</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}