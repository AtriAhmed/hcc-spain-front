import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Seo from "../../components/seo"
import Structure from "../../components/en/structure/Structure"
import structure1 from "../../images/structure_1.jpg"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function structure() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/AZ.jpg)] bg-cover bg-center"></div>
      <Structure />
      <HalalProducer />
      <FadeUpOnScroll>
        <div className="max-w-5xl mx-auto py-10">
          <div className="flex justify-center text-4xl text-blue-400 font-medium">
            Main organizational structure
          </div>
          <img src={structure1} alt="Estructura" className="mx-auto py-10" />
        </div>
      </FadeUpOnScroll>
    </div>
  )
}

export default structure

export const Head = () => <Seo title="Company Structure" />
