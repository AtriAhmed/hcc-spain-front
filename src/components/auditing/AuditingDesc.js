import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function AuditingDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Auditoría y capacitación:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Nuestro equipo organizativo es experto en su campo. Priorizamos la
              contratación. Seleccionamos a nuestros auditores por su
              competencia y experiencia, de acuerdo con la cláusula 7 de la
              norma GSO-2055:2021. La mayoría cuenta con formación en tecnología
              alimentaria y microbiología alimentaria.
              <br />
              <br />
              Para mejorar y mantener siempre actualizadas sus habilidades y
              conocimientos, cada año enviamos a nuestros auditores cualificados
              a participar en capacitaciones internacionales sobre alimentos
              Halal, como el programa de capacitación impartido por EIAC en
              relación con las normas UEA.S 2055-1, UAE.S. 933, GSO 2055- 1, GSO
              993, OIC/SMIIIC 1 y bienestar animal.
              <br />
              <br />
              Nuestros auditores principales realizan prácticas continuamente
              para desarrollar y capacitar a diferentes auditores en diferentes
              áreas de aplicación, de modo que los auditores con los
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

export default AuditingDesc
