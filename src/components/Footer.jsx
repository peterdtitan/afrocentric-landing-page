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
    className='bg-secondary '>
        <div className='flex justify-center items-center py-6 md:py-8'>
            <h1 className='text-[1.5rem] lg:text-[2.5rem] text-textColor font-bold tracking-wide underline underline-offset-8'
            >Get Social
            </h1>
        </div>

        <div className='flex flex-col md:flex-row px-4 md:px-16 py-6 items-center md:items-start gap-8 justify-between'>
            <div className="hidden md:flex md:flex-col items-start gap-2 cursor-pointer">
                <img src={Logo} className="w-48 object-cover" alt="logo" />
                <div className='text-textColor text-sm py-6'>
                    <p>Afrocentric Kulture LLC.</p>
                    <p>Licensed, registered in the US</p>
                </div>
            </div>

            <div className='flex flex-col'>
                <h2>CONTACT US</h2>

            </div>

            <div className='flex flex-col'>
                <h2>FOLLOW US</h2>
                <div className='flex items-center gap-4 sm:justify-center cursor-pointer'>
                    <a href='https://twitter.com/AfrocentricKul1' target='_blank' rel="noreferrer"><img src={Twitter} className='h-10 w-10' alt='twitter' /></a>
                    <a href='https://www.instagram.com/afrocentrickulture/' target='_blank' rel="noreferrer"><img src={Instagram} className='h-10 w-10' alt='instagram' /></a>
                    <a href='https://www.linkedin.com/company/afrocentric-kulture' target='_blank' rel="noreferrer"><img src={Linkedin} className='h-10 w-10' alt='linkedin' /></a>
                    <a href='https://www.facebook.com/AFKulture' target='_blank' rel="noreferrer"><img src={Facebook} className='h-10 w-10' alt='facebook'/></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer