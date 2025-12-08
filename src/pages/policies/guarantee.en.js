import React from "react"
import AnimalWalefare from "../../components/en/guarantee/AnimalWalefare"
import GuaranteeDesc from "../../components/en/guarantee/GuaranteeDesc"
import GuaranteeTabs from "../../components/en/guarantee/GuaranteeTabs"
import HalalGuarantee from "../../components/en/guarantee/HalalGuarantee"
import ProtectServices from "../../components/en/guarantee/ProtectServices"
import HalalProducer from "../../components/en/HalalProducer"
import Partnership from "../../components/en/Partnership"
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
    title="Halal Guarantee"
    description="We select, train and authorize auditors and experts in Islamic affairs based on their audit experience, academic training, category experience and other relevant training."
  />
)
