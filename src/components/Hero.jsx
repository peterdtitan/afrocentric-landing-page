import React from 'react';
import HeroImg from '../img/hero.png';
import {motion} from 'framer-motion';
import Form from '../components/Form';


const Hero = () => {

  return (
    <section
    className="grid grid-cols-1 px-4 md:px-0 md:pt-16 md:grid-cols-2 gap-2 w-full bg-primary pb-10"
    id="home"
    >
        <motion.div 
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.8 }}
        className="pt-8 flex-1 flex items-center relative">
            <img
              src={HeroImg}
              className="h-full w-full lg:w-auto"
              alt="hero-bg"
            />
        </motion.div>

        <div className="md:pt-12  md:px-8 flex-1 flex flex-col items-start justify-center gap-4 cursor-default">
            <div className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
                <p>This is Africa.</p>
                <p className="text-detailsRed md:text-[3rem] lg:text-[5rem]">We're Africa.</p>
            </div>

            <h6 className="text-base text-textColor text-left md:w-[80%]" id='cta'>
              Afrocentric brings you the best collection of authentic African products. Don't just buy 
              <span className='text-headingColor'> African</span>, <span className='text-headingColor'>connect 
              with Africa</span>. From designers to tailors and models, we have you covered. <br></br>
              <p className="py-6">Subscribe and get ready for launch 😉</p>
            </h6>

            <div className='w-full'>
                <Form />

            </div>

        </div>


    </section>
  )
}

export default Hero;