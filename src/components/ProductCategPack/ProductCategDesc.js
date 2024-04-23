import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function ProductCategDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-teal-500 capitalize transition-all duration-1000 ">
            Product categories:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open text-base text-center md:text-left text-slate-900 font-semibold">
              Currently we work with a wide range of product categories. we are
              also trusted by many International companies which have become our
              clients for more than 20 years.
              <br />
              <br />
              Halal correct France categorizes the products according to its scope :
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default ProductCategDesc
