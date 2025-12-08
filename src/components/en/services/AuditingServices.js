import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function AuditingServices() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Auditing Services:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              We intervene as an external auditor to evaluate your systems and
              issue the necessary certification.
              <br />
              <br />
              Our certified auditors perform their work with professionalism,
              impartiality and applying their knowledge. The diversity of our
              audits and the ability of our auditors to adapt to your specific
              context make them a key factor for success and position us at the
              forefront.
              <br />
              <br />
              Our auditors are based on the principles of standardized methods
              (ISO 19011):
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="pt-4 font-open font-normal list-none text-slate-900">
            <Li>A qualified and experienced auditor</Li>
            <Li>A rigorous method</Li>
            <Li>Auditor independence in relation to the activities audited</Li>
            <Li>Transparency throughout the audit</Li>
            <Li>Objectivity: the audit is based on tangible evidence</Li>
            <Li>
              Reliable feedback on observations (closing meeting, audit report)
            </Li>
            <Li>Information is kept confidential.</Li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default AuditingServices

function Li({ children }) {
  return (
    <li className="flex items-center gap-3">
      <span>✔</span>
      {children}
    </li>
  )
}
