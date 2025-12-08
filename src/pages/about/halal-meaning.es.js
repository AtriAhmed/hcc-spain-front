import React from "react"
import HalalProducer from "../../components/HalalProducer"
import BasedOn from "../../components/meaning/BasedOn"
import MeaningDesc from "../../components/meaning/MeaningDesc"
import MeaningFeatures from "../../components/meaning/MeaningFeatures"
import MeaningTabs from "../../components/meaning/MeaningTabs"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/AZ.jpg)] bg-cover bg-center"></div>
      <MeaningDesc />
      <BasedOn />
      <HalalProducer />
      <MeaningTabs />
      <MeaningFeatures />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => (
  <Seo
    title="Significado de Halal"
    description="Halal significa Permitido. En relación con la comida, es el alimento permitido para ser consumido basado en las reglas islámicas. No solo se enfoca en el producto final, sino también en todas las acciones que tienen lugar antes de la entrega a nuestra mesa."
  />
)
