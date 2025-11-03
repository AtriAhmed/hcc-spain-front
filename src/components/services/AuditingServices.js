import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function AuditingServices() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Servicios de auditoría:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Intervenimos como auditor externo para evaluar tus sistemas y
              emitir la certificación necesaria.
              <br />
              <br />
              Nuestros auditores certificados realizan su trabajo con
              profesionalidad, imparcialidad y aplicando sus conocimientos. La
              diversidad de nuestras auditorías y la capacidad de nuestros
              auditores para adaptarse a tu contexto específico las convierten
              en un factor clave para el éxito y nos posicionamos a la
              vanguardia.
              <br />
              <br />
              Nuestros auditores se basan en los principios de métodos
              estandarizados (ISO 19011):
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="pt-4 font-open font-normal list-none text-slate-900">
            <Li>Un auditor cualificado y con experiencia</Li>
            <Li>Un método riguroso</Li>
            <Li>
              Independencia del auditor en relación con las actividades
              auditadas
            </Li>
            <Li>Transparencia durante toda la auditoría</Li>
            <Li>Objetividad: la auditoría se basa en pruebas tangibles</Li>
            <Li>
              Retroalimentación fiable sobre las observaciones (reunión de
              cierre, informe de auditoría)
            </Li>
            <Li>La información se mantiene confidencial.</Li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default AuditingServices

function Li({ children }) {
  return (
    <li className="flex items-center gap-3">
      <span>✔</span>
      {children}
    </li>
  )
}
