import React, { useState } from "react"
import HoverDiv from "./HoverDiv"
import img from "../../images/C.jpg"

const DATA = [
  {
    title: "Beneficios de la Certificación Halal",
    content: `Obtener la certificación Halal a través de la
Certificación Halal Correct Spain garantiza que
tus productos cumplen con los estrictos
estándares de producción halal y son aptos para
consumidores musulmanes. Nuestro proceso de
certificación proporciona credibilidad y
confianza, lo que le otorga a tu empresa una
ventaja competitiva en el mercado halal.`,
  },
  {
    title: "Proceso de Certificación",
    content: `Nuestro proceso de certificación es integral y
exhaustivo, lo que garantiza que tus prácticas de
fabricación y cadena de suministro se ajusten a
los requisitos halal. Realizamos auditorías,
inspecciones y revisiones para verificar el
cumplimiento, proporcionándote la
documentación necesaria para demostrar tu
compromiso con la integridad halal.`,
  },
  {
    title: "Ventaja en el Mercado",
    content: `Al obtener la Certificación Halal Correct Spain,
obtendrás una ventaja significativa en el mercado
halal. Nuestro logotipo de certificación en tus
productos y materiales de marketing mejora la
reputación de tu marca y atrae a los
consumidores musulmanes que priorizan los
productos halal. No te pierdas el creciente
segmento del mercado halal.`,
  },
]

export default function DivsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0)

  const handleHover = index => {
    setHoveredIndex(index)
  }

  return (
    <div className="grid grid-cols-12 max-w-6xl mx-auto md:py-10 gap-4">
      <section className="col-span-12 md:col-span-5 flex justify-center items-center max-h-[500px] overflow-hidden">
        <img src={img} alt="" className="object-cover" />
      </section>
      <section className="col-span-12 md:col-span-7 flex flex-col relative h-full">
        <div>
          {DATA.map((data, index) => (
            <HoverDiv
              key={index}
              data={data}
              index={index}
              handleHover={handleHover}
            />
          ))}
        </div>
        <div
          className={`absolute left-0 top-0 border-l-2 border-black h-[33%] hidden md:block`}
          style={{
            transform: `translate(0px,${hoveredIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        ></div>
      </section>
    </div>
  )
}
