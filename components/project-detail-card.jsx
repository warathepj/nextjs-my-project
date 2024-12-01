"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SliderCard from "@/components/slider-card";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function ProjectDetailCard({
  name,
  description,
  techStack,
  functions,
  images,
  web,
  github,
  sell,
  sellId
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <pre className="text-lg font-semibold mb-2">Tech Stack</pre>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <pre className="text-lg font-semibold mb-2">Key Functions</pre>
          <ul className="list-disc list-inside space-y-1">
            {functions.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
        </div>
        <div>
          <pre className="text-lg font-semibold mb-2">Project Images</pre>
          <SliderCard images={images} />
          <div className="flex flex-row justify-evenly mt-12">
            {web && (
              <Link href={web} target="_blank" rel="noopener noreferrer">
                <Button>Demo</Button>
              </Link>
            )}
            {github && (
              <Link href={`${github}`} target="_blank" rel="noopener noreferrer">
                <Button>Github</Button>
              </Link>
            )}
          </div>

          {sell && (
            <Link href={`/sell/${sellId}`}>
            <Button>{sell}</Button>
          </Link>
          )}
          {/* {sell && (
            <Link href='/sell'>
            <Button>{sell}</Button>
          </Link>
          )} */}
        </div>
      </CardContent>
    </Card>
  );
}
