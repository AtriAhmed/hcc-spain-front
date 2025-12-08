import React from "react"
import Cards from "../../components/en/about/Cards"
import PartnershipsTab from "../../components/en/about/PartnershipsTab"
import WhoAreWe from "../../components/en/about/WhoAreWe"
import HalalProducer from "../../components/en/HalalProducer"
import Partnership from "../../components/en/Partnership"
import Seo from "../../components/seo"

function AboutPage() {
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

export default AboutPage

export const Head = () => <Seo title="Who are we?" />
