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
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED provides certification to
the Halal slaughterhouses. With our experience of many years, HCC EAST AFRICAN
HALAL CONFIRMATION CENTER LIMITED has a reputation for being a unique,
professional, and expert organization in Kenya and Africa.

              <br />
              <br /> HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED does not actively seek
clients but is approached by different companies around Africa to do business. Over the last
years, HCC Kenya has become one of the most knowledgeable Halal organizations in Africa.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default WhoAreWe
