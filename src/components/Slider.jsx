import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ slides }) => {
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      transitionTime={1000}
      autoPlay={true}
      showStatus={false}
      showArrows={false}
    >
      {slides.map((slide) => {
        return (
          <section
            className="relative h-[400px] md:h-[600px] w-full"
            key={slide.id}
          >
            <img
              src={slide.image}
              layout="fill"
              alt=""
              className="flex items-center justify-center rounded-lg"
            />

            <div className="absolute bottom-0 w-full p-4 md:p-6 text-left bg-black/50 backdrop-blur-sm">
              <h3 className="text-3xl md:text-5xl text-white font-medium tracking-wide">
                {slide.title}
              </h3>
              <p className="text-sm md:text-xl md:max-w-[40%] pt-4 pb-2 text-white font-medium tracking-wide">
                {slide.desc}
              </p>
            </div>
          </section>
        )
      })}
    </Carousel>
  );
};

export default Slider;