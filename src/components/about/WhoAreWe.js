import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

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
            Halal correct France is a member of halal correct certification-Group. 
            </p>
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            Halal correct France provides certification of manufacturers and suppliers of halal products. With our experience of many years, Halal Correct France has a reputation for being a professional, and expert organization in France and Europe.
            </p>
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            Halal Correct France does not actively seek clients but is approached by different companies around Europe to do business. Over the past ten years, Halal Correct France has become one of the most knowledgeable Halal organizations in Europe. 
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default WhoAreWe
