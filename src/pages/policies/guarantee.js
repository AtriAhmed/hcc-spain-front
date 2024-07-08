import React from "react"
import AnimalWalefare from "../../components/guarantee/AnimalWalefare"
import GuaranteeDesc from "../../components/guarantee/GuaranteeDesc"
import GuaranteeTabs from "../../components/guarantee/GuaranteeTabs"
import HalalGuarantee from "../../components/guarantee/HalalGuarantee"
import ProtectServices from "../../components/guarantee/ProtectServices"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/a.jpg)] bg-cover bg-center"></div>

      <GuaranteeDesc />
      <ProtectServices />
      <GuaranteeTabs />
      <HalalProducer />
      <HalalGuarantee />
      <AnimalWalefare />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="Halal guarantee"
    description="We use a structural procedure to select, train and authorize our auditor and Islamic Affair Expert to do the audit."
  />
)
