import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function WhoAreWe() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Who are we?
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col gap-4">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal Correct Spain is a proud member of the Halal Correct
              Certification Group. We specialize in providing certification
              services to manufacturers and suppliers of halal products.
            </p>
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              With years of experience, Halal Correct Spain has earned a
              reputation as a professional and expert organization in Germany
              and throughout Europe.
            </p>
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Unlike other certification bodies, Halal Correct Spain does not
              actively seek clients; instead, companies from all over Europe
              seek us out for our expertise and quality service. Over the past
              decade, we have consolidated our position as one of the most
              experienced halal organizations in Europe. Choose Halal Correct
              Spain for reliable certification services that meet the highest
              standards of excellence and integrity.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default WhoAreWe
