import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import HalalProducer from "../HalalProducer"

function CertificationProc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Applying for Halal Certification:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED has designed a systematic procedure for
halal certification.
              <br />
              <br />
              All processes during the audit time is designed based on HCC Kenya Quality manual which refers to
ISO/IEC 17065:2012 and GSO 2055-2: 2021.
              <br />
              <br />
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
          HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED Requirements:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            All organizations sign a cooperation agreement, in which the procedure for both parties is described
in a clear, recognizable and verifiable manner. HCC Kenya is internationally recognized and works
according to the quality standard GSO 2055-2:2021 and ISO/IEC 17065:2012.
              <br />
              <br />
              HCC Kenya therefore sets high standards for Halal Certification. The Halal Guidelines for Halal
slaughter are laid down in the Halal Standard. This is available on request.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
      <HalalProducer />
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
          HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED Scheme:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            The new edition of our certification procedure is available to all customers and partners. The Halal
HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED to have an optimal preparation.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default CertificationProc
