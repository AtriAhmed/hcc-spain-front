import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import BenefitCards from "./BenefitCards"

function BenefitDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary capitalize transition-all duration-1000 ">
            The added value of certification by Halal correct France:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal certification is only issued by a trusted and legally halal
              certification body. Halal correct France has been recognized nationally
              and internationally for its halal certification services. We work
              with more than hundred clients every year!
              <br />
              <br />
              processes, procedures, work instructions, responsibilities and
              information flows become the main concern in our system.
              <br />
              <br />
              Additionally, there are procedures in place to check whether work
              is also carried out according to the standards. We apply an update
              and newest standard to our reference in order to deliver the best
              quality for out consumers.
              <br />
              <br />
              If a customer works according to Halal correct France standards, this
              means that a well-functioning quality system is in place and that
              Halal standards are also met. But it does not always guarantee
              that work is done according to the standards. This requires
              discipline from employees and managers. This is an essential fact
              and it is important to consider it carefully. This is done by
              performing certification audits and frequent inspections by
              skilled and trained Halal correct France employees.
            </p>
          </div>
        </FadeUpOnScroll>
        <BenefitCards />
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Of course, a Halal correct France certificate has a certain value! The
              main advantage is that the organization proves to the outside
              world that it complies with the standards set by Halal correct France. In
              order to obtain the certificate, we have examined it for
              Halalworthiness and quality. This was done on the basis of
              objective standards. In addition, the organization has spent quite
              some time dealing with the requirements for obtaining the
              certificate. Halal awareness among employees has grown.
              <br />
              <br />
              Delivering a halal concept to our clients seems to be a point of
              attention. In the end, they try to develop their quality assurance
              standard system at their company by developing a halal procedure
              which becomes one of the certification indicators. Halal procedure
              leads the company to possess recognition from Halal correct France that
              those companies concern about their end product image around a
              halal market.
              <br />
              <br />A recognized and legal halal certificate is only issued by
              admitted and specialized halal certification bodies. Halal correct France
              has been accredited by several Halal Accreditation Bodies located
              in some countries for instance EIAC, JAKIM, MUI, and MUIS,
              resulting a great performance for halal correct france to continuou their
              vision and mission to help muslim community worldwide. The
              certificate gained from some accreditation bodies is updated
              regularly to depict that our organizations standards is well
              preserved and always improved.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default BenefitDesc
