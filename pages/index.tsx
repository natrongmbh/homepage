import type { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import Footer from '../components/Footer'
import Button, { ButtonType } from '../components/general/Button'
import About from '../components/landingpage/about/About'
import Attention from '../components/landingpage/Attention'
import Herosection from '../components/landingpage/Herosection'
import References from '../components/landingpage/references/References'
import Services from '../components/landingpage/services/Services'
import Technologies from '../components/landingpage/technologies/Technologies'

const Home: NextPage = () => {
  return (
    <div
      className="scrollbar-hide"
    >
      <div
        className="sm:px-20 px-4"
      >
        <Herosection />
      </div>
      <div
        className='sm:px-20 px-4'
      >
        <Services />
      </div>
      <div
        className='sm:px-20 px-4'
      >
        <About />
      </div>
      <div
        className='sm:px-20 px-4'
      >
        <References />
      </div>
      <div
        className='bg-primary'
      >
        <Attention />
      </div>
      <div
        className='sm:px-20 px-4'
      >
        <Technologies />
      </div>
    </div>
  )
}

export default Home
