import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import ProcedureCard from "./ProcedureCard"
import ZoomInOnScroll from "../../lib/ZoomInOnScroll"

function Procedures() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-8 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal procedure:
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
    text: "Muslims around the world find difficulties to know how their food is produced and where it comes from. That is why, Halal Certification helps Muslims around the world to identify these products by istablishing a system that checks if the products meet their halal requirements.",
  },
  {
    text: "Food certification help consumers make an easy decision to purchase the products. Halal certification states that the product is allowed to be consumed based on Islamic rules.",
  },
  {
    text: "An application system for a Halal Certificate has been established by Halal correct France Certification. The completion of the audit program is based on the size, scope, products, processes, level of the management system and the results of previous audits of the organization.",
  },
]
