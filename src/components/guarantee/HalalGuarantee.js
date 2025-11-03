import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function HalalGuarantee() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Garantía Halal:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            Si encuentra nuestro logotipo en un producto en el mercado,
            significa que cuenta con nuestra certificación Halal. Esta garantía
            se obtiene mediante diversos procesos de certificación e inspección
            desde el inicio hasta el final de la línea de producción.
            <br />
            <br />
            Seleccionamos, capacitamos y autorizamos al auditor y al experto en
            asuntos islámicos en función de su experiencia en auditorías,
            formación académica, experiencia en la categoría y otra formación
            relevante.
            <br />
            <br />
            El Grupo de Certificación Halal Correct, del que forma parte Halal
            Correct Spain, prioriza el cumplimiento de los valores fundamentales
            y los fundamentos de las normas nutricionales islámicas en materia
            de certificación Halal. “الرجوع إلى الأصل”.
            <br />
            <br />
            Por eso, hemos resumido nuestras directrices en 7 estándares que
            garantizamos al consumidor musulmán. Al optar por Halal Correct,
            elige las siguientes siete estrellas/Garantías de Halal Correct
            Spain:
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>Garantía de protección del bienestar animal.</li>
            <li>
              Garantizamos que el animal está 100 % sano y vivo durante el
              sacrificio.
            </li>
            <li>
              Garantizamos que no se permiten armas de fuego ni anestesia con
              gas.
            </li>
            <li>
              Garantizamos que todos los animales son sacrificados a mano, de
              acuerdo con la costumbre islámica y por musulmanes.
            </li>
            <li>
              Garantizamos que la producción halal siempre está completamente
              separada y se realiza en zonas libres de cerdos.
            </li>
            <li>
              Garantizamos que todos los ingredientes y aditivos son examinados
              y aprobados para garantizar su dignidad halal.
            </li>
            <li>
              Garantizamos que monitoreamos de forma permanente y consistente
              toda la cadena, desde el sacrificio hasta el envasado.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default HalalGuarantee
