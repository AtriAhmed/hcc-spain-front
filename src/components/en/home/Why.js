import { Link } from "../../../contexts/TranslationContext"
import React from "react"
import { useUIToolsContext } from "../../../contexts/UIToolsProvider"
import ZoomInOnScroll from "../../../lib/ZoomInOnScroll"
import heroImg from "../../../images/handshake.jpeg"

function Why() {
  const { setVideoOpen } = useUIToolsContext()

  return (
    <div
      className={`min-h-screen w-full whyBackground relative flex items-center justify-center`}
    >
      <div className="absolute w-full h-full overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="object-cover h-full w-full z-0 relative"
        />
      </div>
      <ZoomInOnScroll className="w-full">
        <div className="w-full max-w-7xl m-auto px-8 py-32 flex flex-col lg:flex-row relative z-10">
          <div className="p-10 w-full md:w-[900px] lg:w-[600px] mx-auto lg:mx-0 flex flex-col gap-6 lg:gap-12 items-center lg:items-start bg-[rgba(0,0,0,0.2)]">
            <h1 className="capitalize font-poppins font-bold text-white text-4xl transition-all duration-1000 lg:text-5xl text-center lg:text-left">
              <span>Offering Trusted</span>
              <span className="text-[#9dbc98] block">Halal Certification</span>
              <span className="block">Services Since 2005 </span>
              <div className="text-sm font-normal text-justify mt-2">
                Halal Correct Spain is committed to being your trusted partner
                for halal certification. With our expertise and unwavering
                dedication to upholding halal integrity, we guarantee that your
                products will meet the highest standards of halal certification.
              </div>
            </h1>
            <div className="flex gap-4 z-50">
              <Link
                to="/policies/guarantee"
                className="text-white font-bold px-5 py-2 border-2 border-[#9dbc98] rounded-full hidden min-[950px]:block font-open text-sm  uppercase hover:bg-[#9dbc98] hover:text-white transition duration-500"
              >
                read more
              </Link>
              <Link
                to="/contact/apply"
                className="text-white font-bold px-5 py-2 border-2 border-[#9dbc98] rounded-full hidden min-[950px]:block font-open text-sm  uppercase hover:bg-[#9dbc98] hover:text-white transition duration-500"
              >
                apply now
              </Link>
            </div>
          </div>
        </div>
      </ZoomInOnScroll>
    </div>
  )
}

export default Why
