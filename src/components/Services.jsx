import React from 'react';
import background from '../img/yellowabstract.png';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { serviceData } from "../utils/data";

import Delivery  from '../img/delivery.png';
import Community from '../img/community.png';
import Authentic from '../img/authentic.png';

const Services = () => {
  return (
    <BrowserRouter>
    <div
    className='flex flex-col p-6 md:pt-12 font-bold  bg-white' id='services'>
      <div className='flex items-center justify-center pt-6'>
        <h1 className='text-[1.5rem] lg:text-[2.5rem] p-2 border-0 rounded-lg text-black font-bold tracking-wide underline underline-offset-8'
        >Services
        </h1>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-3 gap-2 px-4 py-10 md:px-16'>
        <div class="max-w-sm bg-white rounded-lg border shadow-md border-">
          <div className='flex items-center justify-center pt-6'>
            <img class="rounded-t-lg w-40" src={Community} alt="" />
          </div>
          <div class="p-5 items-center ">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90 text-black">Close Community</h5>
              </a>
              <p class="mb-3 font-normal text-black">We have integrated a community function which gets everyone social. Shopping should be easy and fun, but who says it has to end there? Now you can interact with the community via reviews, provide direct feedback to designers, and upvote or downvote items. This helps us improve your experience. Awesome right?</p>
              <Link to="#cta" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-textGrey">
                Get Updates 
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
        </div>

        <div class="max-w-sm bg-white rounded-lg border shadow-md border-">
          <div className='flex items-center justify-center pt-6'>
            <img class="rounded-t-lg w-40" src={Authentic} alt="" />
          </div>
          <div class="p-5 items-center ">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90 text-black">Shop Authentic Items</h5>
              </a>
              <p class="mb-3 font-normal text-black">With all our quality checks in place, we are giving you our gauarantee that you will only get authentic items. We will not sell fake items, nor would we will sell any items that are not certified to our standards. This way, we make sure the best products across Africa gain the attention and patronage they deserve.</p>
              <Link to="#cta" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-textGrey">
                Get Updates 
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
        </div>

        <div class="max-w-sm bg-white rounded-lg border shadow-md border-">
          <div className='flex items-center justify-center pt-6'>
            <img class="rounded-t-lg w-40" src={Delivery} alt="" />
          </div>
          <div class="p-5 mt-4 items-center ">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90 text-black">Global Delivery</h5>
              </a>
              <p class="mb-3 font-normal text-black">In order to bring our vision to life, we have optimized our delivery process to ensure we handle and deliver your products in the safest and fastest way possible. Best global routes, safe shipment handling, and quick delivery are the key to our success. From premium to standard, we have the best delivery options available.</p>
              <Link to="#cta" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-textGrey">
                Get Updates 
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Services