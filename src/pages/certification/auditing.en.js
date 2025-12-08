import React from "react"
import AuditingDesc from "../../components/en/auditing/AuditingDesc"
import HalalProducer from "../../components/en/HalalProducer"
import Partnership from "../../components/en/Partnership"
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
    title="Auditing and Training:"
    description="Our lead auditors continuously practice to develop and train different auditors in different areas of application, so that auditors with the appropriate knowledge have greater employability."
  />
)
