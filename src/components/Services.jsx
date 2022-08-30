import React from 'react';
import Delivery  from '../img/delivery.png';
import background from '../img/yellowabstract.png';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { serviceData } from "../utils/data";

const Services = () => {
  return (
    <BrowserRouter>
    <div
    className='flex flex-col p-6 md:pt-12 font-sans bg-white' id='services'>
      <div className='flex items-center justify-center pt-6'>
        <h1 className='text-[1.5rem] lg:text-[2.5rem] p-2 border-0 rounded-lg text-black font-bold tracking-wide underline underline-offset-8'
        >Services
        </h1>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-3 gap-2 px-4 py-10 md:px-16'>
        {serviceData.map((n) => (
          <div class="max-w-sm bg-white rounded-lg border shadow-md border-">
            <div className='flex items-center justify-center pt-6'>
              <img class="rounded-t-lg w-40" src={n.imageSrc} alt="" />
            </div>
            <div class="p-5 items-center ">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90 text-black">{n.title}</h5>
                </a>
                <p class="mb-3 font-normal text-black">{n.desc}</p>
                <Link to="#cta" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-textGrey">
                  Get Updates 
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
    </BrowserRouter>
  )
}

export default Services