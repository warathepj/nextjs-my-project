import Image from 'next/image'

export default function PydanticAI() {
  return (
    <Image 
      className="w-16 bg-[#000033] hover:bg-[#c9c9fa]"
      src="/pydantic-ai.jpg" 
      alt="Pydantic AI Logo" 
      width={70}  // Adjust width as needed
      height={70} // Adjust height as needed
    />
  )
}