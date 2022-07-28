import React from 'react';
import { motion } from 'framer-motion';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';

import Logo from "../img/logo.png";
import Twitter from '../img/twitter.svg';
import Instagram from '../img/instagram.svg';
import Linkedin from '../img/linkedin.svg';
import Facebook from '../img/facebook.svg';

const Footer = () => {
  return (
    <div id='get-social' 
    className='bg-primary pt-10'>
        <div className='flex flex-col md:flex-row px-4 md:px-16 py-6 items-center md:items-start gap-12 justify-between'>
            <div className=" md:flex md:flex-col items-start gap-2 cursor-pointer">
                <img src={Logo} className="w-48 object-cover" alt="logo" />
                <div className='text-textColor text-xs py-6'>
                    <p>Afrocentric Kulture LLC.</p>
                    <p>Licensed, registered in the US</p>
                </div>
            </div>

            <div className='flex flex-col text-textColor gap-8'>
                <h2 className='flex justify-center underline underline-offset-8'>CONTACT US</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2'>
                        <BsTelephone className='text-xl'/>
                        <a href="tel:+2348026515880" className="text-sm align-text-bottom hover:text-brightAmber">+234-802-651-5880</a>
                    </div>

                    <div className='flex gap-2 items-center justify-center'>
                        <HiOutlineMailOpen className='text-2xl align-text-bottom'/>
                        <a href="mailto:afrocentrickulture@gmail.com" target="_blank">
                            <p className="text-sm align-text-bottom hover:text-brightAmber">afrocentrickulture@gmail.com</p>
                        </a>
                    </div>  
                </div>
            </div>

            <div className='flex flex-col text-textColor gap-8'>
                <h2 className='flex justify-center underline underline-offset-8'>FOLLOW US</h2>
                <div className='flex items-center gap-4 sm:justify-center cursor-pointer'>
                    <a href='https://twitter.com/AfrocentricKul1' target='_blank' rel="noreferrer"><motion.img whileHover={{ scale: 1.35}} whileTap={{ scale: 1.35}} src={Twitter} className='h-8 w-8' alt='twitter' /></a>
                    <a href='https://www.instagram.com/afrocentrickulture/' target='_blank' rel="noreferrer"><motion.img whileHover={{ scale: 1.35}} whileTap={{ scale: 1.35}} src={Instagram} className='h-8 w-8' alt='instagram' /></a>
                    <a href='https://www.linkedin.com/company/afrocentric-kulture' target='_blank' rel="noreferrer"><motion.img whileHover={{ scale: 1.35}} whileTap={{ scale: 1.35}} src={Linkedin} className='h-8 w-8' alt='linkedin' /></a>
                    <a href='https://www.facebook.com/AFKulture' target='_blank' rel="noreferrer"><motion.img whileHover={{ scale: 1.35}} whileTap={{ scale: 1.35}} src={Facebook} className='h-8 w-8' alt='facebook'/></a>
                </div>
            </div>
        </div>

        <p className='flex justify-center text-xs text-textColor pt-6 pb-6'>Copyright © 2022</p>

    </div>
  )
}

export default Footer