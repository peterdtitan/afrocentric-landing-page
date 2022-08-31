import React from 'react';
import HeroImg from '../img/hero.png';
import {motion} from 'framer-motion';
import Form from '../components/Form';
import { imageData } from '../utils/data';
import Slider from './Slider';
import  background from '../img/about.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Hero = () => {

  return (
    <div>
      <Slider slides={imageData} />
      <section
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', }}
    >
    <div className='bg-black/20 backdrop-blur-[1px] grid grid-cols-1 px-4 md:px-8 md:pt-16 md:grid-cols-2 gap-2 w-full pb-24 pt-6'>

      <div className="pt-2 md:px-8 bg-black/30 backdrop-blur-[1px] flex flex-col justify-center gap-6 p-4" id='about'>
        <div className='flex items-center gap-4 text-white font-bold'><p>CALLING ALL </p><AiOutlineArrowRight/></div>
    
        <div className="font-bold tracking-wide text-white">
          <p className="text-white md:text-[3rem] text-[1rem]">Fashion Enthusiasts, Designers, Models and Craftsmen</p>
        </div>
      </div>

      <div className="md:pt-12 md:px-8 pb-8 p-4 flex-1 flex flex-col items-start justify-center gap-4cursor-default bg-black/30 backdrop-blur-[1px]">
        <div className="text-[2.5rem] md:text-[2.5rem] font-bold tracking-wide text-white">
            <p>Sign-Up to Our Newsletter</p>
        </div>

        <h6 className="text-base text-white text-left md:w-[80%]" id='cta'>
          Afrocentric brings you the best collection of authentic African products. 
          <span className='text-headingColor'> Don't just buy from Africa, connect with Africa</span>. From designers to tailors and models, we have you covered. <br></br>
          <p className="py-6">Subscribe and get ready for launch.</p>
        </h6>

        <div className='w-full'>
          <Form />
        </div>

      </div>



  </div>

      </section>
    </div>

  )
}

export default Hero;