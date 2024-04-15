import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

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
              Our customer relationship management handles any questions as soon
              as possible within 24 hours.
            </li>
            <li>
              Spread and maintain the network with the international
              authorities.
            </li>
            <li>Apply halal audit standard during the certification.</li>
            <li>
              Join national and international halal and food safety conferences
              or workshop.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default ProtectServices
