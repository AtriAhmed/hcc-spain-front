import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function ProtectServices() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            How we protect our services:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Our customer relationship management team responds to any inquiry
              as soon as possible within 24 hours.
            </li>
            <li>
              We expand and maintain the network with international authorities.
            </li>
            <li>We apply the halal audit standard during certification.</li>
            <li>
              We participate in national and international conferences or
              workshops on halal and food safety.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default ProtectServices
