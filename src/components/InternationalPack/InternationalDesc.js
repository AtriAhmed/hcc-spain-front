import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function InternationalDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            International approval:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Did you know that Halal Correct Germany is the Halal organization with the most international approvals in France?
              <br />
              <br />
              Halal Correct Germany is accredited and recognized by many international Islamic authorities such us SFDA, EIAC and MOIAT.
              <br />
              <br />

            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default InternationalDesc
