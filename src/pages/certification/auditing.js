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
    title="Auditoría y capacitación:"
    description="Nuestros auditores principales realizan prácticas continuamente para desarrollar y capacitar a diferentes auditores en diferentes áreas de aplicación, de modo que los auditores con los conocimientos adecuados tengan una mayor empleabilidad."
  />
)
