import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
import HalalProducer from "../../HalalProducer"

function CertificationProc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Certification Request:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal Correct Spain has developed a Halal certification procedure
              to request a Halal Certificate (see the figure below).
              <br />
              <br />
              The content of the audit program and all adjustments are based on
              the size and complexity of the organization, scope, products and
              processing. The proven level of the management system and results
              of previous audits are determined.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Correct Spain Requirements:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              All organizations sign a cooperation agreement that describes the
              procedure for both parties in a clear, recognizable and verifiable
              way. Halal Correct Spain enjoys international recognition and
              works in accordance with GSO 2055-2:2021 and ISO/IEC 17065:2012
              quality standards.
              <br />
              <br />
              Therefore, Halal Correct Spain establishes high standards for
              Halal Certification. The Halal Guidelines for slaughter
              procedures, meat processing and food processing are established in
              the Halal Standard. It is available upon request.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <HalalProducer />
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Correct Spain Certification System:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              The new edition of our certification procedure is available to all
              our clients and partners. The Halal Correct Spain Certification
              System 2021-2022 describes the most important aspects, definitions
              and procedures for optimal preparation.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default CertificationProc
