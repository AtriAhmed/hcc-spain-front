import React from "react"
import CertificationProc from "../../components/certification-procedures/CertificationProc"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"
import procedureImg from "../../images/certification_procedure_1.png"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/doctor_1.jpg)] bg-cover bg-center"></div>

      <CertificationProc />
      <FadeUpOnScroll>
        <img src={procedureImg} alt="procedure" className="mx-auto py-10" />
      </FadeUpOnScroll>
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Certification procedures" />
