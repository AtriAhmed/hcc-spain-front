import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function MeaningFeatures() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            What are the important features of halal slaughter?
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            The main conditions of halal slaughter are:
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              The animal must be originally clean. The animal must comply with
              universal and moral health values.
            </li>
            <li>
              The animal must be treated humanely. Also, the animal must be
              alive during the slaughter and the name of Allah (God, the Creator
              of the universe) must be mentioned over the animal.
            </li>
            <li>
              The animal is slaughtered through a cut on the neck by an Islamic
              skilled butcher. The animal should also be given sufficient time
              to bleed out before continuing processing.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default MeaningFeatures
