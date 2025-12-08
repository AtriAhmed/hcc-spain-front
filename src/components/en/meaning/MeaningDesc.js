import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function MeaningDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Correct Spain Quality Guarantee:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal means what is permitted for Muslims who practice Islam. It
              encompasses not only the final product, but also every step prior
              to its delivery.
              <br />
              <br />
              Halal is a dietary practice governed by clear rules and guidelines
              that Muslims are obligated to observe. It goes beyond meat
              products; according to Islamic principles, everything that is
              considered Halal is beneficial for people, animals, the
              environment and society. The same applies to what is considered
              haram (forbidden).
              <br />
              <br />
              These religious dietary guidelines are based on:
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default MeaningDesc
