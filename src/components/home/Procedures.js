import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import ProcedureCard from "./ProcedureCard"
import ZoomInOnScroll from "../../lib/ZoomInOnScroll"

function Procedures() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-8 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Procedimiento Halal:
          </h3>
        </FadeUpOnScroll>
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          {procedures.map((procedure, index) => (
            <ZoomInOnScroll key={index}>
              <ProcedureCard text={procedure.text} />
            </ZoomInOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Procedures

const procedures = [
  {
    text: "A los musulmanes de todo el mundo les resulta difícil saber cómo se producen sus alimentos y de dónde provienen. Por eso, la Certificación Halal ayuda a los musulmanes de todo el mundo a identificar estos productos mediante el establecimiento de un sistema que verifica si cumplen con los requisitos halal.",
  },
  {
    text: "La certificación alimentaria facilita la decisión de compra de productos por parte de los consumidores. La certificación Halal garantiza que el producto puede consumirse según las normas islámicas.",
  },
  {
    text: "La Certificación Halal Correct Spain ha establecido un sistema de solicitud para obtener un Certificado Halal. La finalización del programa de auditoría se basa en el tamaño, el alcance, los productos, los procesos, el nivel del sistema de gestión y los resultados de auditorías previas de la organización.",
  },
]
