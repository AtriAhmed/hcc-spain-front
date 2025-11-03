import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function GuaranteeDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Garantía de calidad de Halal correct Spain:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              La garantía de calidad y continuidad es una prioridad en el
              sistema Halal correct Spain. Utilizamos un procedimiento
              estructurado para seleccionar, capacitar y autorizar a nuestro
              auditor y experto en asuntos islámicos para realizar la auditoría.
              También nos centramos en invertir en nuestro equipo para que nos
              ayude a alcanzar nuestros objetivos futuros.
              <br />
              <br />
              Las actividades de Certificación Halal Correct Spain se rigen por
              las normas ISO 17065, ISO 17021:1-2012 y la norma del Golfo
              2055:2-2021 para garantizar la calidad y los servicios que
              ofrecemos a nuestros clientes. Por ello, La Certificación Halal
              Correct Spain nos esforzamos constantemente por mejorar nuestra
              propia gestión de calidad.
              <br />
              <br />
              Nuestros auditores principales realizan prácticas continuamente
              para desarrollar y capacitar a diferentes auditores en diferentes
              áreas de aplicación, de modo que nuestros auditores con los
              conocimientos adecuados tengan una mayor empleabilidad. Todos los
              auditores poseen la norma de calidad ISO 19011 (auditoría y
              técnicas de auditoría).
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default GuaranteeDesc
