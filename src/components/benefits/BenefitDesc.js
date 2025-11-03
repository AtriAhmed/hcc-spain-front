import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import BenefitCards from "./BenefitCards"

function BenefitDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-w1300 mx-auto">
        <FadeUpOnScroll>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-primary capitalize transition-all duration-1000 ">
            El valor añadido de La Certificación Halal Correct Spain:
          </h1>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              La certificación Halal solo la emite un organismo de certificación
              halal de confianza y legalmente reconocido. Halal correct Spain ha
              sido reconocido nacional e internacionalmente por sus servicios de
              certificación halal. ¡Trabajamos con más de cien clientes cada
              año!
              <br />
              <br />
              Los procesos, procedimientos, instrucciones de trabajo,
              responsabilidades y flujos de información son la principal
              preocupación de nuestro sistema.
              <br />
              <br />
              Además, contamos con procedimientos para verificar que el trabajo
              se realiza de acuerdo con las normas. Aplicamos las normas más
              recientes y actualizadas a nuestra referencia para ofrecer la
              mejor calidad a nuestros consumidores.
              <br />
              <br />
              Si un cliente trabaja según las normas Halal correct Spain,
              significa que cuenta con un sistema de calidad que funciona
              correctamente y que también cumple con las normas Halal. Sin
              embargo, esto no siempre garantiza que el trabajo se realice de
              acuerdo con las normas. Esto requiere disciplina por parte de
              empleados y gerentes. Este es un hecho esencial y es importante
              considerarlo cuidadosamente. Esto se logra mediante auditorías de
              certificación e inspecciones frecuentes realizadas por empleados
              cualificados y capacitados de Halal correct Spain.
            </p>
          </div>
        </FadeUpOnScroll>
        <BenefitCards />
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Por supuesto, una Certificación Halal Correct Spain tiene un valor
              incalculable. La principal ventaja es que la organización
              demuestra al mundo exterior que cumple con los estándares
              establecidos por Halal correct Spain. Para obtener el certificado,
              hemos examinado su idoneidad y calidad Halal, basándonos en
              estándares objetivos. Además, la organización ha dedicado bastante
              tiempo a gestionar los requisitos para obtenerlo. La
              concienciación Halal entre los empleados ha aumentado.
              <br />
              <br />
              Ofrecer un concepto halal a nuestros clientes parece ser una
              prioridad. Finalmente, intentan desarrollar su sistema de garantía
              de calidad mediante el desarrollo de un procedimiento halal que se
              convierte en uno de los indicadores de certificación. Este
              procedimiento permite a la empresa obtener el reconocimiento de
              Halal correct Spain, ya que estas empresas se preocupan por la
              imagen de su producto final en el mercado halal.
              <br />
              <br />
              Un certificado halal reconocido y legal solo lo emiten organismos
              de certificación halal reconocidos y especializados. Halal correct
              Spain ha sido acreditada por varios organismos de acreditación
              Halal en varios países, como EIAC y GSO, HAK, JAKIM, MUI y MUIS.
              Esto ha resultado en un excelente desempeño para Halal correct
              Spain, que continúa con su visión y misión de ayudar a la
              comunidad musulmana mundial. El certificado obtenido por estos
              organismos de acreditación se actualiza periódicamente para
              demostrar que los estándares de nuestra organización se mantienen
              y mejoran constantemente.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default BenefitDesc
