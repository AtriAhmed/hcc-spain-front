import React from "react"
import Seo from "../../components/seo"
import RegulationFee from "../../components/policies/regulation-fee/RegulationFee"
import ConfidentialityAndImpartiality from "../../components/policies/confidentiality-and-impartiality/ConfidentialityAndImpartiality"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/a.jpg)] bg-cover bg-center"></div>
      <ConfidentialityAndImpartiality />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Confidentiality And Impartiality" />
