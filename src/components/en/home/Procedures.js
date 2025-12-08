import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
import ProcedureCard from "./ProcedureCard"
import ZoomInOnScroll from "../../../lib/ZoomInOnScroll"

function Procedures() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-8 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Procedure:
          </h3>
        </FadeUpOnScroll>
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {procedures.map((procedure, index) => (
            <ZoomInOnScroll key={index}>
              <ProcedureCard text={procedure.text} />
            </ZoomInOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Procedures

const procedures = [
  {
    text: "Muslims around the world find it difficult to know how their food is produced and where it comes from. Therefore, Halal Certification helps Muslims worldwide identify these products by establishing a system that verifies whether they meet halal requirements.",
  },
  {
    text: "Food certification makes it easier for consumers to make product purchasing decisions. Halal certification guarantees that the product can be consumed according to Islamic standards.",
  },
  {
    text: "Halal Correct Spain Certification has established an application system to obtain a Halal Certificate. The completion of the audit program is based on the organization's size, scope, products, processes, management system level, and results of previous audits.",
  },
]
