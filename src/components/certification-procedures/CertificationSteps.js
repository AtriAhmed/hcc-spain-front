import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

const CertificationSteps = () => {
  return (
    <section className="w-full  bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-8 py-12">
        <FadeUpOnScroll>
          <h2 className="font-poppins font-bold text-3xl scr800:text-4xl text-primary capitalize transition-all duration-1000 ">
            Cronograma de Solicitud de Certificación Halal
          </h2>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center scr800:flex-row gap-8">
            <p className="font-open font-normal text-base text-slate-900">
              La duración promedio de una solicitud de certificación Halal varía
              entre{" "}
              <span className="font-bold text-red-500">
                21 y 30 días laborables
              </span>{" "}
              desde la fecha de presentación de una solicitud completa. Esta
              duración incluye la etapa de revisión de documentos, la
              planificación y ejecución de la auditoría, así como la evaluación
              final previa a la emisión del certificado Halal. El cronograma
              puede variar dependiendo del alcance de la certificación, la
              integridad de la documentación, la programación de la auditoría y
              cualquier acción correctiva requerida.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="gap-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-12">
            {[
              {
                icon: "/certifs/certif1.png",
                title: "Paso 1: Presentación de la Solicitud",
                period: "1-4 días",
                description:
                  "Presentar la solicitud de certificación Halal junto con los documentos requeridos.",
              },
              {
                icon: "/certifs/certif2.png",
                title:
                  "Paso 2: Revisión de Documentos/ Verificación de Integridad",
                period: "1-5 días",
                description:
                  "Revisión inicial de los documentos presentados para verificar su integridad y cumplimiento.",
              },
              {
                icon: "/certifs/certif3.png",
                title: "Paso 3: Planificación de la Auditoría",
                period: "1-3 días",
                description:
                  "Programar la auditoría en sitio y notificar al solicitante.",
              },
              {
                icon: "/certifs/certif4.png",
                title: "Paso 4: Auditoría en Sitio",
                period: "1-5 días",
                description:
                  "Realizar la auditoría para evaluar el cumplimiento con los estándares Halal.",
              },
              {
                icon: "/certifs/certif5.png",
                title: "Paso 5: Informe de Auditoría y Acciones Correctivas",
                period: "1-4 días",
                description:
                  "Preparar el informe de auditoría y abordar cualquier incumplimiento.",
              },
              {
                icon: "/certifs/certif6.png",
                title: "Paso 6: Evaluación Final y Decisión",
                description:
                  "Revisar los resultados de la auditoría y tomar la decisión de certificación.",
              },
              {
                icon: "/certifs/certif7.png",
                title: "Paso 7: Emisión del Certificado Halal",
                description:
                  "Emitir el certificado Halal al solicitante tras el cumplimiento exitoso.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <img
                  src={step.icon}
                  alt={`${step.title.toLowerCase().replace(/ /g, "-")}-icon`}
                  className="w-[100px] h-[100px] mx-auto mb-4 icon-large"
                />
                <h3 className="font-semibold text-[16px] text-primary text-balance">
                  {step.title}
                  {step.period && (
                    <span className="font-bold text-black">
                      {" "}
                      ({step.period})
                    </span>
                  )}
                </h3>

                <p className="text-[15px] text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="mt-12 flex justify-center">
            <a
              href="/certification-process.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md bg-primary hover:bg-[#71906c] font-semibold text-white transition duration-200"
            >
              Esquema Halal: parte del proceso de certificación Halal
            </a>
          </div>
        </FadeUpOnScroll>
      </div>
    </section>
  )
}

export default CertificationSteps
