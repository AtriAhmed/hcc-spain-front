import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function ProductCategDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary capitalize transition-all duration-1000 ">
            Product categories:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open text-base text-center md:text-left text-slate-900 font-semibold">
            Halal Correct France is the partner with a strong global network that has more than 20 years of experience in serving producers and suppliers in the Halal market.
              <br />
              <br />
              Halal Correct France currently certifies the following products:
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default ProductCategDesc
