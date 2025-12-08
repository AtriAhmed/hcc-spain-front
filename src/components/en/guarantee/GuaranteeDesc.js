import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function GuaranteeDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Correct Spain Quality Guarantee:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Quality and continuity guarantee is a priority in the Halal
              Correct Spain system. We use a structured procedure to select,
              train and authorize our auditor and expert in Islamic affairs to
              perform the audit. We also focus on investing in our team to help
              us achieve our future goals.
              <br />
              <br />
              Halal Correct Spain Certification activities are governed by ISO
              17065, ISO 17021:1-2012 and Gulf Standard 2055:2-2021 to ensure
              the quality and services we offer to our clients. Therefore, Halal
              Correct Spain Certification constantly strives to improve our own
              quality management.
              <br />
              <br />
              Our lead auditors continuously conduct practices to develop and
              train different auditors in different areas of application, so
              that our auditors with the appropriate knowledge have greater
              employability. All auditors possess the ISO 19011 quality standard
              (auditing and audit techniques).
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default GuaranteeDesc
