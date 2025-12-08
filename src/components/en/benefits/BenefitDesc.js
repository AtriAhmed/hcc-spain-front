import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
import BenefitCards from "./BenefitCards"

function BenefitDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary capitalize transition-all duration-1000 ">
            The Added Value of Halal Correct Spain Certification:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <div className="font-open font-normal text-base text-center md:text-left text-slate-900">
              <h2 className="font-poppins font-bold text-xl mb-4">
                References to Indonesian Halal Standards & Regulations
              </h2>
              <p className="mb-4">
                Halal Correct Spain operates in full compliance with the
                official Indonesian halal regulations, including but not limited
                to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Law No. 33 of 2014 on Halal Product Assurance (UU JPH)</li>
                <li>
                  Government Regulation No. 39 of 2021 on the Implementation of
                  Halal Product Assurance
                </li>
                <li>
                  BPJPH Regulations and Decrees, covering the halal
                  certification scheme, Halal Correct Spain requirements, halal
                  auditor qualifications, and compliance assessment processes
                </li>
                <li>
                  MUI Fatwa and Provisions related to halal product
                  determination
                </li>
              </ul>
              <p>
                All certification processes, quality manuals, internal
                procedures, and Halal Correct Spain services refer to these
                standards and regulations to ensure full compliance with the
                Indonesian halal assurance system.
              </p>
            </div>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal certification is only issued by a trusted and legally
              recognized halal certification body. Halal Correct Spain has been
              recognized nationally and internationally for its halal
              certification services. We work with more than a hundred clients
              each year!
              <br />
              <br />
              Processes, procedures, work instructions, responsibilities and
              information flows are the main concern of our system.
              <br />
              <br />
              Additionally, we have procedures to verify that work is carried
              out according to standards. We apply the most recent and updated
              standards to our reference to offer the best quality to our
              consumers.
              <br />
              <br />
              If a client works according to Halal Correct Spain standards, it
              means they have a quality system that functions correctly and also
              complies with Halal standards. However, this does not always
              guarantee that work is carried out according to standards. This
              requires discipline from employees and managers. This is an
              essential fact and it is important to consider it carefully. This
              is achieved through certification audits and frequent inspections
              carried out by qualified and trained employees of Halal Correct
              Spain.
            </p>
          </div>
        </FadeUpOnScroll>
        <BenefitCards />
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Of course, a Halal Correct Spain Certification has incalculable
              value. The main advantage is that the organization demonstrates to
              the outside world that it meets the standards established by Halal
              Correct Spain. To obtain the certificate, we have examined its
              suitability and Halal quality, based on objective standards.
              Additionally, the organization has dedicated considerable time to
              managing the requirements to obtain it. Halal awareness among
              employees has increased.
              <br />
              <br />
              Offering a halal concept to our clients seems to be a priority.
              Finally, they try to develop their quality assurance system by
              developing a halal procedure that becomes one of the certification
              indicators. This procedure allows the company to obtain
              recognition from Halal Correct Spain, as these companies care
              about the image of their final product in the halal market.
              <br />A recognized and legal halal certificate is only issued by
              recognized and specialized halal certification bodies. Halal
              Correct Spain has been accredited by various Halal accreditation
              bodies in several countries, such as EIAC and GSO, HAK, JAKIM, MUI
              and MUIS. This has resulted in excellent performance for Halal
              Correct Spain, which continues with its vision and mission to help
              the global Muslim community. The certificate obtained by these
              accreditation bodies is updated periodically to demonstrate that
              our organization's standards are constantly maintained and
              improved.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default BenefitDesc
