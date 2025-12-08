import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function Structure() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Company Structure:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Mr. A. Ali-Salah and Mr. T. Maatoug are the founders of Halal
              Correct Spain, a proud member of the Halal Correct Certification
              Group and a leading company in the Halal food market in Europe.
              <br />
              <br /> Our departments work daily to fulfill the organization's
              objectives, with the goal of making Halal food accessible to
              everyone. The organizational chart below offers a simplified
              overview of our departments. The blue lines indicate external
              departments.
              <br />
              <br />
              Our departments work daily to achieve the organization's
              objectives, with the goal of making Halal food accessible to
              everyone. The organizational chart below shows a simple
              representation of the organization's departments. The blue lines
              represent external departments.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default Structure
