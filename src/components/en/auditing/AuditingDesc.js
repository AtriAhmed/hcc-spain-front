import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function AuditingDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Auditing and Training:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Our organizational team is expert in their field. We prioritize
              hiring. We select our auditors for their competence and
              experience, in accordance with clause 7 of the GSO-2055:2021
              standard. Most have training in food technology and food
              microbiology.
              <br />
              <br />
              To improve and always keep their skills and knowledge up to date,
              each year we send our qualified auditors to participate in
              international Halal food training, such as the training program
              taught by EIAC in relation to the UAE.S 2055-1, UAE.S. 933, GSO
              2055-1, GSO 993, OIC/SMIIIC 1 and animal welfare standards.
              <br />
              <br />
              Our lead auditors continuously practice to develop and train
              different auditors in different areas of application, so that
              auditors with the appropriate knowledge have greater
              employability. All auditors possess the ISO 19011 quality standard
              (auditing and auditing techniques).
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default AuditingDesc
