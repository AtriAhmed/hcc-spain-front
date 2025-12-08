import React from "react"
import BenefitDesc from "../../components/benefits/BenefitDesc"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
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
    title="Beneficios"
    description="Halal Correct Germany ha sido reconocida nacional e internacionalmente por sus servicios de certificación halal. ¡Trabajamos con más de cien clientes cada año!"
  />
)
