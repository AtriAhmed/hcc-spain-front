import React from "react"
import { AnimationOnScroll } from "react-animation-on-scroll"

export default function ConfidentialityAndImpartiality() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Confidentiality and Impartiality:
          </h1>
        </AnimationOnScroll>

        <ul className="sm:px-8 pt-6 font-open font-normal text-base list-disc">
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
            <div className="pt-3">
              <div className="font-bold">1. OBJECTIVE:</div>
              <div className="text-justify">
                This procedure has been developed to determine the methods of
                confidentiality and impartiality related to the Halal
                certification activities of HALAL CORRECT SPAIN.
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
            <div className="pt-3">
              <span className="font-bold">2. SCOPE:</span>
              <div className="text-justify">
                This procedure covers the services provided and the personnel
                involved in such services within the Halal certification of
                HALAL CORRECT SPAIN.
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
            <div className="pt-3">
              <div className="font-bold">3. RESPONSIBLE AUTHORITIES</div>
              <div className="text-justify">
                All personnel participate in Halal certification activities.
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
            <div className="pt-3">
              <div className="font-bold">4. DEFINITIONS</div>
              <div>
                <span className="font-semibold">HALAL CORRECT SPAIN:</span>{" "}
                Halal certification body
                <br />
                <span className="font-semibold">HCTS :</span> Technical
                specialist in Halal certification
                <br />
                <span className="font-semibold">QDMS :</span> HALAL CORRECT
                SPAIN quality documentation management system
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
            <div className="pt-3">
              <div className="font-bold">5. IMPLEMENTATION</div>
              <div className="font-bold">5.1 CONFIDENTIALITY MANAGEMENT</div>
              <div className="text-justify">
                All documents/records related to HALAL CORRECT SPAIN's Halal
                certification activities are considered confidential. These are
                mentioned below:
              </div>
              <div className="mt-2 sm:ml-20 text-justify">
                - From the conformity assessment application to the result of
                the establishment's (client's) application, all documents,
                including analysis reports, test reports, emails and other
                information, including digital copies of documents and records.
              </div>
              <div className="sm:ml-20 text-justify">
                - Information about personnel involved in Halal certification
                audits.
              </div>
              <div className="sm:ml-20 mb-2 text-justify">
                - All establishment (client) documents after the Halal
                certification audit.
              </div>
              <div className="my-4 text-justify">
                Personnel involved in the conformity assessment process,
                including the department head, are responsible for ensuring
                confidentiality. The file manager is responsible for ensuring
                the confidentiality of archived documents.
              </div>
              <div className="my-4 text-justify">
                All personnel involved in Halal certification activities,
                personnel involved in decision-making, experts, committee
                members, etc., are responsible for ensuring confidentiality and
                impartiality in accordance with the HALAL CORRECT SPAIN
                Personnel Regulation and the Confidentiality, Independence and
                Impartiality Commitment they have signed. After signing the
                confidentiality, independence and impartiality contract,
                personnel may access the establishment's document or be
                designated for the Halal certification process.
              </div>
              <div className="my-4 text-justify">
                Committee members who will perform functions in HALAL CORRECT
                SPAIN committees may be appointed after signing the Committee
                Members' Confidentiality Commitment.
              </div>
              <div className="my-4 text-justify">
                If signatories of the Confidentiality, Independence and
                Impartiality Commitment/Agreement do not comply with the
                standards, the corresponding department will initiate legal
                proceedings against them.
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
            <div className="pt-3">
              <div className="font-bold">5.2 IMPARTIALITY MANAGEMENT</div>
              <div className="text-justify">
                HALAL CORRECT SPAIN's senior management has "Corporate service
                principles and a senior management statement" to ensure the
                impartiality of activities related to halal certification
                services within HALAL CORRECT SPAIN. In accordance with this
                statement, departments act as follows:
              </div>
              <div className="text-justify my-4 sm:ml-20">
                - An organizational structure has been established to ensure
                that halal certification services provided by HALAL CORRECT
                SPAIN are carried out in accordance with the principles of
                independence, impartiality and honesty.
              </div>
              <div className="text-justify my-4 sm:ml-20">
                - The Board of Directors of HALAL CORRECT SPAIN has declared and
                instructed that the service will be provided in accordance with
                the principles of impartiality, independence and
                confidentiality.
              </div>
              <div className="text-justify my-4 sm:ml-20">
                - Impartiality Committee members have been appointed and
                authorized so that interested parties are represented fairly and
                in a balanced manner; in order to determine problems that may
                affect the impartiality and confidentiality of the service
                provided for the halal certificate issued by HALAL CORRECT
                SPAIN, both to identify conflicts of interest and assess their
                risks, as well as to adopt and implement measures.
              </div>
              <div className="text-jusify my-4 sm:ml-20">
                - In case the impartiality committee cannot access information
                about all services provided, decisions made by the committee are
                not complied with or properly implemented; after detecting
                inappropriate situations, the committee was authorized to inform
                the General Director of HALAL CORRECT SPAIN and the Halal
                Accreditation Body.
              </div>
              <br />
            </div>
          </AnimationOnScroll>
        </ul>
      </div>
    </div>
  )
}
