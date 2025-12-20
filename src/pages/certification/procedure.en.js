import React from "react"
import CertificationProc from "../../components/en/certification-procedures/CertificationProc"
import CertificationSteps from "../../components/en/certification-procedures/CertificationSteps"
import Partnership from "../../components/en/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/doctor_1.jpg)] bg-cover bg-center"></div>

      <CertificationProc />
      <CertificationSteps />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Halal Certification Process" />
