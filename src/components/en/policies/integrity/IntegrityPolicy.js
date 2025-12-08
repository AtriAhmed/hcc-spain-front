import React from "react"
import FadeUpOnScroll from "../../../../lib/FadeUpOnScroll"

function IntegrityPolicy() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Integrity Policy:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            We do everything for the halal consumer, according to the motto of
            Halal Correct Certification-Group. The employees of Halal Correct
            Spain contribute to this philosophy, something to be proud of. The
            four additional work concepts that Halal Correct Spain has defined
            as company pillars are: &quot;Trust in work&quot;, &quot;Conscious
            ethics&quot;, &quot;Continuous improvement and learning&quot; and
            &quot;Objective approach&quot;. Halal Correct Spain must be reliable
            for consumers. In many ways, halal consumers depend on halal review.
            Therefore, the Halal Correct Spain organization must be ethical.
            This requires that Halal Correct Spain manages its business with
            integrity and reliability, and treats its customers fairly and
            respectfully.
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Integrity and impartiality:
              <br />
              <br />
              Halal Correct Spain Certification guarantees its policy of
              impartiality and confidentiality in providing all our services.
              The managers and auditors of Halal Correct Spain Certification are
              thoroughly evaluated and trained to ensure their integrity,
              impartiality and confidentiality. The Executive Committee and
              employees of Halal Correct Certification have no personal ties
              with the companies we certify, nor any commercial or financial
              interest in them.
              <br />
              <br />
              All information about our financial and operational transactions
              with our clients is recorded, and such records are also available
              for inspection by our independent committee of impartiality and
              confidentiality.
            </li>
            <li className="pt-3">
              Commission to ensure impartiality and confidentiality:
              <br />
              <br />
              Halal Correct Spain is supervised by an independent committee with
              balanced representation of industry stakeholders, which evaluates
              and ensures the impartiality as well as the confidentiality of the
              organization.
              <br />
              <br />
              For more information, click here.{" "}
              <a
                href={`${process.env.GATSBY_APP_URL}ES-003 Appeals and complaints handling procedure.pdf`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                click here
              </a>
              .
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default IntegrityPolicy
