import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function AuditingDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Auditing and training:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            The organization team is an expertise on their field. We set a
              high concern on our recruitment. They are selected based on their
              competency and experiences according to GSO-2055:2021 clause 7.
              Most of them have a background on food technology and food
              microbiology field.
              <br />
              <br />
              To improve and to always have an updated skills and knowledge,
              each year we send our qualified auditor to participate in
              International Halal Food training for instance the training
              program held by EIAC related to UEA.S 2055-1, UAE.S. 933, GSO
              2055-1, GSO 993, OIC / SMIIIC 1 and animal welfare.
              <br />
              <br />
              Our lead auditors are continuously working through traineeships to
              develop and to train different auditors for different scope
              application areas, so our auditors with the right knowledge will
              be more widely employable. All auditors are in possession of ISO
              19011 quality standard (auditing and audit techniques).
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default AuditingDesc
