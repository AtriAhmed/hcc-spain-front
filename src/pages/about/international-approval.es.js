import React from "react"
import HalalProducer from "../../components/HalalProducer"
import InternationalDesc from "../../components/international/InternationalDesc"
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
    title="Aprobación internacional"
    description="Halal Correct Germany está acreditado y reconocido por muchas autoridades islámicas internacionales como SFDA, EIAC y MOIAT."
  />
)
