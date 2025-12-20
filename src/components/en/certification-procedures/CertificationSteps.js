import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

const CertificationSteps = () => {
  return (
    <section className="w-full  bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-8 py-12">
        <FadeUpOnScroll>
          <h2 className="font-poppins font-bold text-3xl scr800:text-4xl text-primary capitalize transition-all duration-1000 ">
            Halal Certification Application Timeline
          </h2>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-slate-900">
              The average duration of a Halal certification application ranges
              between{" "}
              <span className="font-bold text-red-500">
                21 and 30 working days
              </span>{" "}
              from the date of submission of a complete application. This
              duration includes the document review stage, the planning and
              execution of the audit, as well as the final evaluation prior to
              the issuance of the Halal certificate. The timeline may vary
              depending on the scope of certification, completeness of
              documentation, audit scheduling, and any required corrective
              actions.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-12">
            {[
              {
                icon: "/certifs/certif1.png",
                title: "Step 1: Application Submission",
                period: "1-4 days",
                description:
                  "Submit the Halal certification application along with required documents.",
              },
              {
                icon: "/certifs/certif2.png",
                title: "Step 2: Document Review/ Completeness Check",
                period: "1-5 days",
                description:
                  "Initial review of submitted documents for completeness and compliance.",
              },
              {
                icon: "/certifs/certif3.png",
                title: "Step 3: Audit Planning",
                period: "1-3 days",
                description:
                  "Scheduling the on-site audit and notifying the applicant.",
              },
              {
                icon: "/certifs/certif4.png",
                title: "Step 4: On-site Audit",
                period: "1-5 days",
                description:
                  "Conducting the audit to assess compliance with Halal standards.",
              },
              {
                icon: "/certifs/certif5.png",
                title: "Step 5: Audit Report & Corrective Actions",
                period: "1-4 days",
                description:
                  "Preparing the audit report and addressing any non-compliance issues.",
              },
              {
                icon: "/certifs/certif6.png",
                title: "Step 6: Final Evaluation & Decision",
                description:
                  "Reviewing the audit findings and making the certification decision.",
              },
              {
                icon: "/certifs/certif7.png",
                title: "Step 7: Issuance of Halal Certificate",
                description:
                  "Issuing the Halal certificate to the applicant upon successful compliance.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <img
                  src={step.icon}
                  alt={`${step.title.toLowerCase().replace(/ /g, "-")}-icon`}
                  className="w-[100px] h-[100px] mx-auto mb-4 icon-large"
                />
                <h3 className="font-semibold text-[16px] text-primary text-balance">
                  {step.title}
                  {step.period && (
                    <span className="font-bold text-black">
                      {" "}
                      ({step.period})
                    </span>
                  )}
                </h3>

                <p className="text-[15px] text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="mt-12 flex justify-center">
            <a
              href="/certification-process.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-primary hover:bg-[#71906c] font-semibold text-white transition duration-200"
            >
              Halal Scheme: part Halal certification process
            </a>
          </div>
        </FadeUpOnScroll>
      </div>
    </section>
  )
}

export default CertificationSteps
