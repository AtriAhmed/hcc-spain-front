import React from "react"
import Cards from "../../components/about/Cards"
import PartnershipsTab from "../../components/about/PartnershipsTab"
import WhoAreWe from "../../components/about/WhoAreWe"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/AZ.jpg)] bg-cover bg-center"></div>
      <WhoAreWe />
      <Cards />
      <PartnershipsTab />
      <HalalProducer />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="¿Quiénes somos?" />
