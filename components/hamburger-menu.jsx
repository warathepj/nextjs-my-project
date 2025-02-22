"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { House } from "lucide-react";
import FastAPI from "@/components/(icon)/FastAPI";
import PydanticAI from "@/components/(icon)/PydanticAI";
import Shadcn from "@/components/(icon)/Shadcn";
import Css from "@/components/(icon)/Css";
import Html from "@/components/(icon)/Html";
import Next from "@/components/(icon)/Next";
import Rust from "@/components/(icon)/Rust";
import Tailwind from "@/components/(icon)/Tailwind";
import Javascript from "@/components/(icon)/Javascript";
import Python from "./(icon)/Python";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Services" },
    { href: "#", label: "Portfolio" },
    { href: "#", label: "Contact" },
  ];

  return (
    <div 
      className="
        fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 
        bg-[#000033] px-[40rem] pt-2 pb-5 mb-[-1.5rem]"
    >
      <Sheet className="bg-[#000033]" open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg"
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[100dvh] pt-16">
          {/* <nav className="flex flex-col items-center justify-center h-full gap-4"> */}
          <nav className="flex flex-row flex-wrap items-center justify-center h-full gap-1">
            <SheetTrigger asChild>
              <Link href="/">
                <House className="w-10 h-10 hover:bg-[#c9c9fa]" />
              </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/blog">
              <Button>Blog</Button>
            </Link>
            </SheetTrigger>

            {/* <Link href="/category/all">
              <Button>All Project</Button>
            </Link> */}

            {/* https://techicons.dev/?fbclid=IwAR04u5oWj1d_7Q4P1Ma-wGrsTSvEudYtiBfjgsxb49Ju4GltdYgG_qwgFTk */}

            <SheetTrigger asChild>
            <Link href="/category/python">
              <Python />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/category/pydanticai">
              <PydanticAI />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/category/fastapi">
              <FastAPI />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/category/shadcn">
              <Shadcn />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/category/html">
              <Html />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/category/css">
              <Css />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/category/tailwind">
              <Tailwind />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
            <Link href="/category/javascript">
              <Javascript />
            </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Link href="/category/next">
                <Next />
              </Link>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Link href="/category/rust">
                <Rust />
              </Link>
            </SheetTrigger>

            {/* {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-2xl font-bold py-4 hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))} */}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
