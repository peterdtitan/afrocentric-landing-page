import React from 'react';
import { motion } from 'framer-motion';
import Logo  from '../img/logo.png';

const MainContainer = () => {
  return (
    <div className="flex flex-col gap-8 items-center mt-2 py-8 px-4 md:py-8 md:px-16">
       <div>
        <h1 className='text-[1.5rem] lg:text-[2.5rem] text-secondary font-bold tracking-wide underline underline-offset-8'
        >About Us
        </h1>
       </div>

       <div className='grid grid-cols-1 gap-8 md:gap-2 md:grid-cols-2 mt-6'>
            <div className="flex items-center justify-center">
                    <img src={Logo}>
                    </img>
            </div>

            <div>
                <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.8 }}
                className='flex items-center text-3xl text-secondary rounded-lg cursor-pointer bg-brightAmber p-6'>
                    <p className='text-base text-primary text-left' >Afrocentric was founded in 2019 with the aim of making authentic African fashion accessible 
                    on <span className='text-detailsRed'>a global scale.</span></p>
                </motion.div>
            </div>
            <div>
                <motion.div
                whileHover={{ scale: 1.1, rotate: -5}}
                whileTap={{ scale: 0.8 }}      
                className='flex items-center text-3xl text-textColor rounded-lg cursor-pointer bg-detailsRed p-6'>
                    <p className='text-base text-left' >Afrocentric was founded in 2019 with the aim of making authentic African fashion accessible 
                    on <span className='text-detailsRed'>a global scale.</span></p>
                </motion.div>
            </div>
       </div> 

        <div></div>

    </div>
  )
}

export default MainContainer