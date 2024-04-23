import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function Structure() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Company structure:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            Mr. Ben Ali-Salah and Mr. Ali Boukhelifa (رحمه الله) are the founders of Halal Correct France which is a member of halal correct certification-Group  and is one of the leading pioneers in the Halal food market in France and Europe.
              <br />
              <br /> Our departments work daily on achieving the organizational goals, with the purpose to make Halal food accessible to everyone. The organization chart below shows a simple representation of the departments in the organization. The blue lines represent external departments.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default Structure
