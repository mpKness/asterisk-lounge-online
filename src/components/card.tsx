interface CardProps {
  title: string;
  subheader: string;
  description: string;
  image: string;
  link: () => void;
}

const Card = ({title, subheader, description, image, link}: CardProps) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={image} alt="Image" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{subheader}</a>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none" onClick={() => {link()}}>Read More</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2">Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;