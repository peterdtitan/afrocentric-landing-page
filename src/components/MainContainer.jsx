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

       <div className='grid grid-cols-1 gap-6 md:gap-y-20 md:gap-2 md:grid-cols-2 mt-6'>
            <div className="flex items-center justify-center">
                    <img src={Logo}>
                    </img>
            </div>

            <motion.div
            whileHover={{ scale: 1.05, rotate: [3, -3, 0] }}
            whileTap={{ scale: 1.05, rotate: [3, -3, 0] }}
            >
                <div className='flex flex-col items-center text-base text-left text-textColor rounded-lg cursor-pointer duration-100 transition-all ease-in-out bg-logoGreen p-4'>
                    <p>Afrocentric was founded in 2019 with the aim of making authentic African fashion accessible 
                    on <span className='text-brightAmber'>a global scale.</span> What exactly do we want to do? Well, it is simple...</p>
                    
                    <div className='p-4 mt-2 rounded-lg text-primary bg-brightAmber' >
                        <ul className='list-disc p-2'>
                            <li>Bring African fashion to the global center stage</li>
                            <li>Connect designers to skilled labor</li>
                            <li>Open opportunities for models and craftsmen to reach designers</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            <motion.div
            whileHover={{ scale: 1.05, rotate: [3, -3, 0] }}
            whileTap={{ scale: 1.05, rotate: [3, -3, 0] }}
            >
                <div className='flex flex-col items-center text-base text-left text-textColor rounded-lg cursor-pointer duration-100 transition-all ease-in-out bg-logoGreen p-4'>
                    <p>Afrocentric was founded in 2019 with the aim of making authentic African fashion accessible 
                    on <span className='text-brightAmber'>a global scale.</span> What exactly do we want to do? Well, it is simple...</p>
                    
                    <div className='p-4 mt-2 rounded-lg text-primary bg-brightAmber' >
                        <ul className='list-disc p-2'>
                            <li>Bring African fashion to the global center stage</li>
                            <li>Connect designers to skilled labor</li>
                            <li>Open opportunities for models and craftsmen to reach designers</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

       </div> 

        <div></div>

    </div>
  )
}

export default MainContainer