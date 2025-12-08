import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function MeaningFeatures() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            What are the important characteristics of halal slaughter?
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            The main conditions of halal slaughter are:
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              The animal must be initially clean. The animal must comply with
              universal and moral health values.
            </li>
            <li>
              The animal must be treated humanely. Furthermore, it must be alive
              during the slaughter and the name of Allah (God, Creator of the
              universe) must be mentioned over it.
            </li>
            <li>
              The animal is slaughtered by means of a cut to the neck by an
              expert Islamic butcher. Sufficient time must also be given for the
              animal to bleed out before continuing with the processing.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default MeaningFeatures
