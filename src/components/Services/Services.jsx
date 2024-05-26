import {
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
  FaCarSide,
} from 'react-icons/fa'

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl = md:text-5xl text-primary" />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Order',
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl = md:text-5xl text-primary" />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Order',
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl = md:text-5xl text-primary" />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Order',
  },
  {
    id: 1,
    icon: <FaHeadphonesAlt className="text-4xl = md:text-5xl text-primary" />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Order',
  },
]

const Services = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div className='flex flex-col items-center' key={data.id}>
                {data.icon}
                <h1>{data.title}</h1>
                <h1>{data.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
