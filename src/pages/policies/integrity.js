import React from "react"
import HalalProducer from "../../components/HalalProducer"
import IntegrityPolicy from "../../components/policies/integrity/IntegrityPolicy"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/a.jpg)] bg-cover bg-center"></div>

      <IntegrityPolicy />
      <HalalProducer />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Integrity policy" />
