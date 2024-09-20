
const Card = ({ name, description }) => {
  return (
    <div className="mb-4 bg-[#9999ff] text-[#000033]">Card
        <pre>Project Name: {name}</pre>
        <pre>Project Description: {description}</pre>

    </div>
  )
}

export default Card