import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import satisfied from "../../images/satisfied_customers.jpg"

function SatisfiedCustomers() {
  return (
    <div className="w-full py-10">
      <div className="w-full max-w-w1300 mx-auto px-8 ">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary capitalize transition-all duration-1000 ">
            Some of our satisfied customers:
          </h3>
        </FadeUpOnScroll>
      </div>
      <FadeUpOnScroll>
        <img src={satisfied} alt="Satisfied customers" className="py-6" />
      </FadeUpOnScroll>
    </div>
  )
}

export default SatisfiedCustomers
