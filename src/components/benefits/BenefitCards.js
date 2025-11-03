import React from "react"
import ZoomInOnScroll from "../../lib/ZoomInOnScroll"
import BenefitCard from "./BenefitCard"

function BenefitCards() {
  return (
    <div className="py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {benefits.map(benefit => (
        <ZoomInOnScroll key={benefit.text}>
          <BenefitCard text={benefit.text} />
        </ZoomInOnScroll>
      ))}
    </div>
  )
}

export default BenefitCards

const benefits = [
  {
    text: "En muchos casos, la propia empresa considera el certificado solo como una formalidad. Sin embargo, muchas industrias lo analizan como punto de partida para alcanzar un mercado más global y buscar un mayor valor añadido para las características del producto. La empresa que comprende el significado de su certificado halal.",
  },
  {
    text: "En las empresas que buscan productos halal, el deseo de ofrecer buena calidad, cumplir con los estándares halal y obtener un certificado surge del deseo interno de la dirección y los empleados. En cambio, en las empresas que buscan productos imprescindibles, esto es más o menos impuesto por los clientes. Muchas empresas simplemente no hacen negocios con proveedores sin certificación halal.",
  },
  {
    text: "La excelente calidad no solo es la prioridad para los proveedores con Certificación Halal Correct Spain. En la mayoría de los casos, puede ser el objetivo principal; sin embargo, la calidad y la certificación no están inextricablemente ligadas. Obtener un certificado a veces se compara con obtener un diploma escolar: alguien posee los conocimientos, las habilidades y la visión necesarios. Pero justo después de obtener el diploma, la persona debe demostrar una y otra vez que continúa ofreciendo un rendimiento adecuado.",
  },
]
