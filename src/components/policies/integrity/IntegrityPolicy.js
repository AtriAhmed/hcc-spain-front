import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function IntegrityPolicy() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Integrity policy:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            We do it all for the halal consumer, according to Halal Correct Certification- Group's
            motto. Employees at Halal correct Germany contribute to this philosophy,
            which is something to be proud of. The four additional work concepts
            that Halal correct Germany has particularly named as being the cornerstone
            of Halal correct Germany are "Confidence in workmanship," "Consciously
            ethical," "Improving and learning continuously," and "Objective
            approach." Halal correct Germany must be trustworthy to consumers. In many
            ways, Halal consumers depend on the Halal review. The Halal correct Germany
            organization must be moral as a result. This calls for Halal correct Germany
            to conduct its business with integrity and dependability and to
            treat its customers fairly and respectfully.
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Integrity and impartiality:
              <br />
              <br />
              Halal correct Germany Certification (Halal correct Germany Certification)
              guarantees its impartiality policy and confidentiality with
              respect to the delivery of all our services. The Halal correct Germany
              Certification managers and auditors are thoroughly screened and
              trained to ensure their integrity, impartiality, and
              confidentiality. The Executive Board and employees of Halal
              Correct Certification have no personal connections with the
              companies we certify, nor do they have any commercial or financial
              interest in our certified companies.
              <br />
              <br />
              All information about our financial and operational transactions
              with our clients are recorded, and such records are also available
              for inspection by our independent impartiality and confidentiality
              committee.
            </li>
            <li className="pt-3">
              Commission to guarantee Impartiality and Confidentiality:
              <br />
              <br />
              Halal Correct Germany is supervised by an
              independent committee of balanced representation of interested
              stakeholders in the sector who test and guarantee the impartiality
              and confidentiality of the organization.
              <br />
              <br />
              To read more kindly{" "}
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
