import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CorgidevCard() {
  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-center">CorgiDev</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src="https://warathepj.github.io/js-ai-gallery/public/image/fri10.jpeg"
          alt="CorgiDev"
          width={200}
          height={200}
          className="rounded-full"
        />
      </CardContent>
    </Card>
  )
}