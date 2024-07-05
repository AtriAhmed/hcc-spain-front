import React from "react"
import HalalProducer from "../../components/HalalProducer"
import InternationalDesc from "../../components/InternationalPack/InternationalDesc"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/AZ.jpg)] bg-cover bg-center"></div>
      <InternationalDesc />
      <HalalProducer />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="International approval"
    description="Halal Correct Germany is accredited and recognized by many international Islamic authorities such us SFDA, EIAC and MOIAT."
  />
)
