import React from 'react';


const MainContainer = () => {
  return (
    <section
    className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full bg-primary"
    id="home"
    >
        <div className="py-20 px-6 md:px-12 flex-1 flex flex-col items-start justify-center gap-6">
            <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
                This is Africa. 
                <span className="text-detailsRed text-[3rem] lg:text-[5rem]"
                >We are Africa
                </span>
            </p>

            <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
              Afrocentric brings you the best collection of authentic African products. Don't just buy 
              <span className='text-headingColor'> African</span>, <span className='text-headingColor'>connect 
              with Africa</span>. From designers to tailors and models, we have you covered. <br></br>
              <p className="py-6">Sign Up to get ready for launch!</p>
            </p>
        </div>

    </section>
  )
}

export default MainContainer;