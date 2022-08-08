import React from 'react';
import { motion } from 'framer-motion';
import Logo  from '../img/logo.png';
import background from '../img/redabstract.png';

const MainContainer = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', }}
    className="flex flex-col gap-8 items-center bg-offWhite px-4 py-10 md:px-16 pb-14 md:pb-28">
       <div id='about'>
        <h1 className='text-[1.5rem] lg:text-[2.5rem]  bg-brightAmber p-2 border-0 rounded-lg text-secondary font-bold tracking-wide underline underline-offset-8'
        >About Us
        </h1>
       </div>

       <div className='grid grid-cols-1 gap-6 md:gap-y-20 md:gap-2 md:grid-cols-2 mt-6'>
            <div className='md:col-start-2 md:row-start-1 rounded-lg' style={{ background: 'rgba(0, 0, 0, 0.55)'}}>
                <div className="flex items-center justify-center p-16">
                    <img src={Logo} className=""/>
                </div>
            </div>

            <div className='md:col-start-1 md:row-start-1' >
                <div className='flex flex-col items-center text-base text-left text-textColor rounded-lg cursor-pointer duration-100 transition-all ease-in-out bg-logoGreen p-4'>
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
       </div> 

        <div></div>

    </div>
  )
}

export default MainContainer