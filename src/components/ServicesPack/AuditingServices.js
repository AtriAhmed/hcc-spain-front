import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function AuditingServices() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Auditing services:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            We intervene as a third-audit auditor to evaluate your systems and issue the requisite certification.
              <br />
              <br />
              Our certified auditors do their work professionally, acting impartially, and applying their know-how.
The diverse nature of our audits and our auditors’ capacity to adapt themselves to your specific
context makes them a key success factor for getting ahead of the curve.
              <br />
              <br />
              Our auditors rely on standardized method principles (ISO 19011):
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="pt-4 font-open font-normal list-none text-slate-900">
            <Li>✔ A qualified, experienced auditor</Li>
            <Li>✔ A rigorous method</Li>
            <Li>
            ✔ The auditor’s independence in relation to the activities audited
            </Li>
            <Li>✔ Transparency throughout the audit</Li>
            <Li>✔ Objectivity: the audit is based on tangible proof</Li>
            <Li>
            ✔ Reliable feedback on observations (closing meeting, audit report)
            </Li>
            <Li>✔ The information is kept confidential.</Li>
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
