import React from "react"
import Seo from "../../components/seo"
import RegulationFee from "../../components/en/policies/regulation-fee/RegulationFee"
import ConfidentialityAndImpartiality from "../../components/en/policies/confidentiality-and-impartiality/ConfidentialityAndImpartiality"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/a.jpg)] bg-cover bg-center"></div>
      <ConfidentialityAndImpartiality />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Confidentiality and Impartiality:" />
