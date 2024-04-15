import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import swiper3 from "../images/swiper_3.jpg"
import swiper7 from "../images/swiper_7.jpg"
import hccLogo from "../images/logo2.png"
import sasoLogo from "../images/sasoLogo.jpg"

import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay } from "swiper"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"

function Partnership() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-16 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="capitalize font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98]  transition-all duration-1000 ">
            Accreditation and partnerships:
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
                  className="h-28 sm:h-40 mx-auto"
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
    src: swiper3,
  },
  {
    src: swiper7,
  },
  {
    src: sasoLogo
  },
  {
    src: hccLogo
  },

]
