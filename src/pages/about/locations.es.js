import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Locations from "../../components/locations/Locations"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import Map from "../../components/Map"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/lab_1.jpg)] bg-cover bg-center"></div>
      <Locations />
      <HalalProducer />
      <FadeUpOnScroll>
        <Map />
      </FadeUpOnScroll>
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Nuestras ubicaciones" />
