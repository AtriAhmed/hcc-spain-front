import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function IntegrityPolicy() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Política de integridad:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            Lo hacemos todo por el consumidor halal, según el lema de Halal
            Correct Certification-Group. Los empleados de Halal correct Spain
            contribuyen a esta filosofía, algo de lo que enorgullecerse. Los
            cuatro conceptos de trabajo adicionales que Halal correct Spain ha
            definido como pilares de la empresa son: &quot;Confianza en el
            trabajo&quot;, &quot;Ética consciente&quot;, &quot;Mejora y
            aprendizaje continuos&quot; y &quot;Enfoque objetivo&quot;. Halal
            correct Spain debe ser confiable para los consumidores. En muchos
            sentidos, los consumidores halal dependen de la revisión halal. Por
            lo tanto, la organización de Halal correct Spain debe ser ética.
            Esto exige que Halal correct Spain gestione sus negocios con
            integridad y fiabilidad, y que trate a sus clientes de forma justa y
            respetuosa.
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Integridad e imparcialidad:
              <br />
              <br />
              La Certificación Halal Correct Spain (Halal Correct Spain
              Certification) garantiza su política de imparcialidad y
              confidencialidad en la prestación de todos nuestros servicios. Los
              gerentes y auditores de La Certificación Halal Correct Spain son
              evaluados y capacitados exhaustivamente para garantizar su
              integridad, imparcialidad y confidencialidad. El Comité Ejecutivo
              y los empleados de la Certificación Halal Correct no tienen
              vínculos personales con las empresas que certificamos, ni ningún
              interés comercial o financiero en ellas.
              <br />
              <br />
              Toda la información sobre nuestras transacciones financieras y
              operativas con nuestros clientes se registra, y dichos registros
              también están disponibles para su inspección por parte de nuestro
              comité independiente de imparcialidad y confidencialidad.
            </li>
            <li className="pt-3">
              Comisión para garantizar la imparcialidad y la confidencialidad:
              <br />
              <br />
              Halal Correct Spain está supervisada por un comité independiente
              con una representación equilibrada de las partes interesadas del
              sector, que evalúa y garantiza la imparcialidad así como la
              confidencialidad de la organización.
              <br />
              <br />
              Para obtener más información, haz clic aquí.{" "}
              <a
                href={`${process.env.GATSBY_APP_URL}ES-003 Appeals and complaints handling procedure.pdf`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              >
                haz clic aquí
              </a>
              .
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default IntegrityPolicy
