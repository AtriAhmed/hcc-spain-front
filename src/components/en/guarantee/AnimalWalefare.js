import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function AnimalWalefare() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Animal Welfare:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              The welfare of animals destined for halal slaughter is a
              fundamental part of the traditional halal certification process of
              Halal Correct Spain. The traditional and ritual halal slaughter
              system requires a holistic approach to ensure that all
              traditionally slaughtered halal meat meets high animal welfare
              standards. Additionally, supervisors and technical auditors with
              traditional halal training will work closely with traditional
              halal certified slaughterhouses to ensure that the Tayyib (health)
              component of halal is carried out correctly. This will provide
              safe, high-quality meat that safeguards animal welfare standards.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default AnimalWalefare
