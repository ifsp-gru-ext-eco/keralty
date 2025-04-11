function Card ({ title, src }) {
  return (
    <div>
      <h3 className='font-bold text-sm'>{title}</h3>
      <img className='h-auto max-w-full rounded-lg' src={src} />
    </div>
  )
}

function Stats ({ value, description }) {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='font-black text-4xl'>{value}</h3>
      <p className='font-bold text-lg capitalize'>{description}</p>
    </div>
  )
}

function GalleryItem ({ src }) {
  return (
    <div>
      <img className='h-auto max-w-full rounded-lg' src={src} />
    </div>
  )
}

export default function AboutUs () {
  return (
    <div className='max-w-full bg-gray-100 flex flex-col py-24 px-12'>
      <div className='mb-8'>
        <h1 className='font-bold text-2xl'>Sobre nós</h1>
        <p className='leading-normal text-base text-justify'>
          Engajamos a comunidade para oferecer suporte emocional, social e recreativo aos pacientes e suas famílias, promovendo uma rede de cuidado e acolhimento. Espalhamos palavras de amor e carinho a quem mais precisa! Em cinco anos, mais de 16 mil voluntários se uniram a essa causa.
          Levamos alegria e esperança aos hospitais por meio de apresentações musicais, intervenções de palhaços e diversas atividades lúdicas, criando momentos de leveza e conforto para os pacientes e suas famílias.
        </p>
      </div>
      <div className='w-full flex items-center justify-between mb-8'>
        <div className='flex flex-col items-center'>
          <h2 className='font-bold text-2xl text-center'>Contribua com nosso projeto</h2>
          <p className='text-xl mb-2 text-center'>Nos ajude a continuar nossa missão</p>
          <a className='cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Faça uma doação
            <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
            </svg>
          </a>
        </div>
        <div className='flex items-center justify-between w-1/2 gap-x-4'>
          <Stats value='+10K' description='cartas escritas' />
          <Stats value='+16K' description='voluntarios' />
          <Stats value='+100' description='hospitais parceiros' />
        </div>
      </div>
      <div className='mb-8'>
        <h1 className='font-bold text-2xl'>Venha visitar uma de nossas sedes</h1>
        <div className='flex items-center justify-between gap-4'>
          <Card title='Belo Horizonte, Minas Gerais' src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' />
          <Card title='Santo André, São Paulo' src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' />
          <Card title='Curitiba, Paraná' src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' />
        </div>
      </div>
      <div className=''>
        <h2 className='font-bold text-2xl'>Veja nossas últimas ações</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          <GalleryItem src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' />
          <GalleryItem src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' />
          <GalleryItem src='https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' />
        </div>
      </div>
    </div>
  )
}
