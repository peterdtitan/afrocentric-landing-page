import React from 'react';
import { motion } from 'framer-motion';

import Logo from "../img/logo.png";
import Twitter from '../img/twitter.svg';
import Instagram from '../img/instagram.svg';
import Linkedin from '../img/linkedin.svg';
import Facebook from '../img/facebook.svg';

const Footer = () => {
  return (
    <div id='get-social' 
    className=' bg-secondary '>
        <div className='flex justify-center items-center py-6 md:py-8'>
            <h1 className='text-[1.5rem] lg:text-[2.5rem] text-textColor font-bold tracking-wide underline underline-offset-8'
            >Get Social
            </h1>
        </div>

        <div className='flex flex-col md:flex-row px-4 md:px-16 py-6 items-center gap-8 justify-between'>
            <div className="hidden md:flex flex-col items-start gap-2 cursor-pointer">
                <img src={Logo} className="w-40 object-cover" alt="logo" />
                <p>Afrocentric Kulture LLC.</p>
            </div>

            <div className='flex items-center gap-4 sm:justify-center cursor-pointer'>
                <a href='https://www.linkedin.com/company/afrocentric-kulture' target='_blank'><img src={Twitter} className='h-10 w-10' /></a>
                <a href='https://www.linkedin.com/company/afrocentric-kulture' target='_blank'><img src={Instagram} className='h-10 w-10' /></a>
                <a href='https://www.linkedin.com/company/afrocentric-kulture' target='_blank'><img src={Linkedin} className='h-10 w-10' /></a>
                <a href='https://www.linkedin.com/company/afrocentric-kulture' target='_blank'><img src={Facebook} className='h-10 w-10' /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer