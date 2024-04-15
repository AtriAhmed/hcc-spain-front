import React from "react"
import AuditingDesc from "../../components/auditing/AuditingDesc"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/auditing_1.jpg)] bg-cover bg-center"></div>

      <AuditingDesc />
      <HalalProducer />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="Auditing and training"
    description="Our lead auditors are continuously working through traineeships to develop and to train different auditors for different scope application areas, so our auditors with the right knowledge will be more widely employable."
  />
)
