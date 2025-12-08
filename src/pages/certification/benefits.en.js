import React from "react"
import BenefitDesc from "../../components/en/benefits/BenefitDesc"
import HalalProducer from "../../components/en/HalalProducer"
import Partnership from "../../components/en/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/shopping_1.jpg)] bg-cover bg-center"></div>

      <BenefitDesc />
      <HalalProducer />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="Benefits"
    description="Halal correct Germany has been recognized nationally and internationally for its halal certification services. We work with more than hundred clients every year!"
  />
)
