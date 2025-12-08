import { Link } from "gatsby"
import React from "react"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"

function HalalProducer() {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl py-10 mx-auto px-8">
        <FadeUpOnScroll>
          <section className="max-w-[800px] mx-auto px-5 lg:px-20 py-10 border border-[#9dbc98] rounded-[100px] relative before:border-4 before:border-[#9dbc98] before:rounded-[105px] before:absolute before:inset-[-7px] before:z-[-1]">
            <h3 className="pb-4 px-6 font-poppins font-normal text-xl md:text-2xl text-center text-[#9dbc98]">
              Are you a Halal producer or supplier?
              <br />
              If you are interested in international Halal certifications
            </h3>
            <Link
              to="/contact/apply"
              className="w-fit mx-auto block font-poppins font-semibold text-md text-white rounded-full border-2 border-[#9dbc98] px-5 py-1 bg-[#C4EBBE] hover:bg-[#9dbc98] transition duration-500 uppercase"
            >
              Apply now
            </Link>
          </section>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default HalalProducer
