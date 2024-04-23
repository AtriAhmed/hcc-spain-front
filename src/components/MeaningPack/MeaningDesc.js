import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function MeaningDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
          Halal correct France Quality guarantee:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal means Permissible. Related to food, it is the permissible
              food to be consumed based on Islamic rule. It does not only focus
              on an end-product, but also to all actions take place prior the
              delivery to our table.
              <br />
              <br />
              Halal is not only limited to meat products, but according to Islam
              everything Halal is good for people, animals, the environment and
              society and vice versa. This also applies to haram. These
              religious rules regarding food are based on:
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default MeaningDesc
