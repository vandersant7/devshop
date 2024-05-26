import Slider from 'react-slick'
import Image1 from '../../assets/hero/headphone.png'
import Image2 from '../../assets/hero/headphone.png'
import Image3 from '../../assets/hero/headphone.png'
import Button from '../Shared/Buttom'

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitle: 'Smartphone Retrô 5G',
    title: 'Smartphone Vintage',
    title2: 'Nostalgia Digital',
    description:
      'Mergulhe no passado com este smartphone retrô, que combina design clássico com tecnologia de ponta. Uma experiência única de usabilidade e estilo.',
  },
  {
    id: 2,
    img: Image2,
    subtitle: 'Laptop Ultrafino',
    title: 'Leveza Revolucionária',
    title2: 'Poder em Movimento',
    description:
      'Descubra a mobilidade sem compromissos com nosso laptop ultrafino. Desempenho potente em um design elegante e portátil.',
  },
  {
    id: 3,
    img: Image3,
    subtitle: 'Fone de Ouvido Bluetooth',
    title: 'Audição Aprimorada',
    title2: 'Headphone',
    description:
      'Mergulhe em uma experiência de áudio imersiva com nossos fones de ouvido Bluetooth. Desfrute de som de qualidade e liberdade de movimento.',
  },
  // {
  //   id: 4,
  //   img: 'Image4',
  //   subtitle: 'Smartwatch Fitness',
  //   title: 'Seu Companheiro Digital',
  //   title2: 'Saúde',
  //   description:
  //     'Mantenha-se ativo e saudável com nosso smartwatch fitness. Acompanhe suas atividades, monitore sua saúde e conecte-se com facilidade.',
  // },
  // {
  //   id: 5,
  //   img: 'Image5',
  //   subtitle: 'Tablet Híbrido',
  //   title: 'Versatilidade Sem Limites',
  //   title2: 'Produtividade',
  //   description:
  //     'Experimente a versatilidade do nosso tablet híbrido. Alterne entre modo tablet e modo laptop para atender a todas as suas necessidades.',
  // },
  // {
  //   id: 6,
  //   img: 'Image6',
  //   subtitle: 'Câmera 4K Avançada',
  //   title: 'Capturando Momentos Inesquecíveis',
  //   title2: 'Qualidade',
  //   description:
  //     'Eleve sua criatividade com nossa câmera 4K avançada. Capture vídeos e fotos com resolução e detalhes impressionantes.',
  // },
]

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.subtitle}
                    </h1>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>

                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <Button
                        text="Shop by category"
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* Img section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow=[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero
