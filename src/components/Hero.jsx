import React from 'react';
import HeroImg from '../img/hero.png';
import {motion} from 'framer-motion';
import Form from '../components/Form';
import { imageData } from '../utils/data';
import Slider from './Slider';
import  background from '../img/heroForm.jpg';


const Hero = () => {

  return (
    <div>
      <Slider slides={imageData} />
      <section
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', }}
    >
    <div className='bg-black/20 backdrop-blur-[1px] grid grid-cols-1 px-4 md:px-0 md:pt-16 md:grid-cols-2 gap-2 w-full pb-24'>
      <div className="md:pt-12 md:px-8">
        <div className='flex flex-col items-center text-base text-left text-textColor rounded-lg cursor-pointer duration-100 transition-all ease-in-out bg-black p-4'>
          <p className='mb-2' >Afrocentric was founded in 2019 with the aim of making authentic African fashion accessible 
          on <span className='text-brightAmber'>a global scale.</span> What exactly do we want to do? Well, it is simple...</p>

          <div className='p-4 mt-2 rounded-lg bg-offWhite text-primary' >
              <ul className='list-disc p-2'>
                  <li>Bring African fashion to the global center stage</li>
                  <li>Connect designers to skilled labor</li>
                  <li>Open opportunities for models and craftsmen to reach designers</li>
              </ul>
          </div>

          <p className='mt-4'
          >Since the idea of Afrocentric was conceived, we have been working on building a platform like never seen before. Now, the wait is almost over.</p>
        </div>
      </div>

      <div className="md:pt-12  md:px-8 flex-1 flex flex-col items-start justify-center gap-4cursor-default">
        <div className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
            <p>This is Africa.</p>
            <p className="text-detailsRed md:text-[3rem] lg:text-[5rem]">We're Africa.</p>
        </div>

        <h6 className="text-base font-montserrat text-left md:w-[80%]" id='cta'>
          Afrocentric brings you the best collection of authentic African products. Don't just buy 
          <span className='text-headingColor'> African</span>, <span className='text-headingColor'>connect 
          with Africa</span>. From designers to tailors and models, we have you covered. <br></br>
          <p className="py-6">Subscribe and get ready for launch 😉</p>
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