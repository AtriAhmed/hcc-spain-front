import React from "react"
import Seo from "../../components/seo"
import RegulationFee from "../../components/policies/regulation-fee/RegulationFee"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/a.jpg)] bg-cover bg-center"></div>
      <RegulationFee />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Regulación de Tarifas:" />
