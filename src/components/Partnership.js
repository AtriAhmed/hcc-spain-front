import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import sfda from "../images/sfda.jpg"
import moiat from "../images/moiat.jpg"
import eiac from "../images/eiac.jpg"
import hcc from "../images/logo2.png"

import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"

function Partnership() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-16 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="capitalize font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary  transition-all duration-1000 ">
            Acreditación y colaboración:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <Swiper
            slidesPerView={2}
            breakpoints={{
              800: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
            }}
            className="my-10"
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.src}
                  alt=""
                  className="h-28 scr600:h-40 mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default Partnership

const slides = [
  {
    src: sfda,
  },
  {
    src: moiat,
  },
  {
    src: eiac,
  },
  {
    src: hcc,
  },
]
