import React from 'react';
import Delivery  from '../img/delivery.png';
import background from '../img/greenabstract.png';

const Services = () => {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', }}
    className='flex flex-col' id='services'>
      <div className='flex items-center justify-center pt-6'>
        <h1 className='text-[1.5rem] lg:text-[2.5rem] bg-brightAmber p-2 border-0 rounded-lg text-primary font-bold tracking-wide underline underline-offset-8'
        >Services
        </h1>
      </div>

      <div className='flex flex-col md:grid md:grid-cols-3 gap-2 px-4 py-10 md:px-16'>
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className='flex items-center justify-center pt-6'>
            <img class="rounded-t-lg w-40" src={Delivery} alt="" />
          </div>
        
        
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services