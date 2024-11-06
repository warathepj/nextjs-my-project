import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import DropdownMenuIcon from './dropdown-menu-icon'

export default function TopNavBar() {
  return (
    <nav className="hidden xl:flex items-center justify-around bg-primary text-primary-foreground p-4">
      <div className="flex items-center space-x-2">
        {/* Replace with your actual logo */}
        <div className="w-8 h-8 bg-secondary rounded-full">
        <Image
          src="https://warathepj.github.io/js-ai-gallery/public/image/fri10.jpeg"
          alt="CorgiDev"
          width={200}
          height={200}
          className="rounded-full"
        />
        </div>
        <span className="text-xl font-bold">CorgiDev</span>
      </div>
      <div className="flex space-x-4">
        <Button variant="ghost" asChild>
          <Link href="/">Home</Link>
        </Button>
        <DropdownMenuIcon />
        <Button variant="ghost" asChild>
          <Link href="/blog">Blog</Link>
        </Button>
      </div>
    </nav>
  )
}