import Image from 'next/image'

export default function Shadcn() {
  return (
    <Image 
      className="w-16 bg-[#000033] hover:bg-[#c9c9fa]"
      src="/shadcn.jpg" 
      alt="Shadcn Logo" 
      width={70}  // Adjust width as needed
      height={70} // Adjust height as needed
    />
  )
}