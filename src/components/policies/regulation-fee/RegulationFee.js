import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
import ScrollAnimation from "react-animate-on-scroll"

export default function RegulationFee() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Regulación de Tarifas:
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp" delay={1} duration={2}>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            <span className="font-bold">Introducción:</span> Halal Correct Spain
            es un organismo de certificación altamente reconocido y ya está
            acreditado por varios organismos de acreditación/aprobación, como el
            Centro Internacional de Acreditación de los Emiratos (EIAC), la
            Autoridad Saudí de Alimentos y Medicamentos (SFDA) y el Ministerio
            de Industria y Tecnología Avanzada (MOIAT). Este reconocimiento te
            permite ampliar tus servicios de certificación a través de numerosas
            empresas en Alemania y Europa. Para explicar brevemente cómo los
            clientes de Halal Correct Spain gestionarán el costo de la
            certificación, Halal Correct Spain ha creado este sistema de
            regulación de tarifas. Esta descripción busca maximizar la
            transparencia de los procesos y procedimientos de certificación. Por
            lo tanto, para iniciar el proceso de certificación, es importante
            considerar los componentes que Halal Correct Spain menciona a
            continuación para determinar un precio estimado.
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>
              Componentes del precio de Halal Correct Spain:
              <br />
              <br />
              <div className="grid grid-cols-12 divide-y">
                <div className="col-span-6 font-bold p-2">Componentes</div>
                <div className="col-span-6 font-bold p-2 !border-t-0">
                  Precio
                </div>
                <div className="col-span-6 p-2">
                  <div>- Gastos de administración</div>
                  <div>- Proceso de certificación local/internacional</div>
                </div>
                <div className="col-span-6 p-2">250-500 €</div>
                <div className="col-span-6 p-2">
                  <div>- Ubicación y tamaño de la empresa</div>
                  <div>- Categoría del alcance</div>
                  <div>- Número de productos certificados</div>
                  <div>- Riesgo de la empresa</div>
                </div>
                <div className="col-span-6 p-2">1450-4500 €</div>
                <div className="col-span-6 p-2">
                  - Ubicación (Costo/tiempo de desplazamiento) (punto 3)
                </div>
                <div className="col-span-6 p-2">
                  Dependiendo de la distancia del desplazamiento
                </div>
                <div className="col-span-6 p-2">
                  <div>
                    - Extensión de la materia prima/productos de cribado de
                    productos certificados
                  </div>
                  <div>- Separación de anexos</div>
                </div>
                <div className="col-span-6 p-2">50-150 €</div>
                <div className="col-span-6 p-2">- Gastos de inspección</div>
                <div className="col-span-6 p-2">60 € por hora</div>
              </div>
              <br />
              <br />
            </li>
            <div className="pt-3">
              <span className="font-bold">
                1. Ubicación (Costo de desplazamiento)
              </span>
              <br />
              <div>
                Cada cliente tiene una ubicación de fabricación diferente. La
                distancia se calcula según la ubicación de la sede de Halal
                Correct Spain.
              </div>
              <div>
                También hay clientes ubicados fuera de Alemania; sin embargo,
                esto no implica que el precio sea mucho mayor. Otros componentes
                influyen en la tarifa que se cobra. Por lo tanto, la ubicación
                se considera uno de los factores que afectan la tarifa debido a
                los gastos de Halal Correct Spain en transporte para llegar a la
                empresa, alojamiento, días de auditoría y honorarios del
                auditor.
              </div>
              <div>
                Por ejemplo, un cliente que se encuentra en Alemania tiene mucho
                más fácil acceso que uno que se encuentra en Noruega. Esto
                incrementará los costos de viaje y otros componentes mencionados
                anteriormente.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">
                2. Ubicación y tamaño de la empresa
              </span>
              <br />
              <div>
                Algunas empresas tienen más de un fabricante o planta de
                producción. En este caso, se requiere más tiempo para realizar
                la auditoría. Esto también aplica a empresas de mayor tamaño,
                generalmente multinacionales/internacionales.
              </div>

              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">3. Categoría de alcance</span>

              <br />
              <div>
                Hay 5 categorías de productos certificados por Halal Correct
                Spain HALAL CONFIRMATION CENTER LIMITED: Categoría CI
                (Procesamiento de productos animales perecederos), CII
                (Procesamiento de productos vegetales perecederos), CIII
                (Procesamiento de productos animales y vegetales perecederos
                (productos mixtos), CIV (Procesamiento de productos estables a
                temperatura ambiente), CV (Sacrificio de animales), K
                (Producción de (bio)químicos). Es posible que las categorías CV
                y CI tengan una tarifa mucho mayor debido a que podrían existir
                actividades posteriores a la auditoría. Los productos cárnicos
                procesados y el sacrificio de animales podrían requerir una
                inspección adicional, lo que significa que no solo tomaría una
                auditoría común de uno o dos días. El sacrificio de animales
                también requiere un matador y un supervisor durante sus
                actividades. El informe debe completarse y revisarse para
                garantizar que se cumplan todos los requisitos halal. Además,
                varias empresas pretenden certificar la producción por lote;
                este tipo de certificación tiene un costo diferente (para cada
                lote).
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">4. Tarifa de inspección</span>

              <br />
              <div>
                Halal correct Spain puede tener empresas de alto riesgo que
                generalmente requieren una inspección adicional. La inspección
                es necesaria para supervisar a la empresa y garantizar que aún
                aplique el procedimiento halal después del proceso de
                certificación.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">
                5. Número de productos/materias primas/productos de cribado
                certificados
              </span>

              <br />
              <div>
                Tras enviar el formulario de solicitud y la verificación de
                origen, Halal correct Spain revisará y verificará los productos
                y las materias primas. Generalmente, se les pide al solicitante
                que envíe la especificación de las materias primas, el diagrama
                de flujo (si es necesario) y el certificado Halal de las
                materias primas.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">6. Riesgo de la empresa</span>
              <br />
              <div>
                Existen empresas de riesgo bajo, medio y alto. Las empresas de
                alto riesgo suelen requerir mucho más esfuerzo, además de mayor
                tiempo para la revisión y auditoría. Utilizan materias primas
                animales/porcinas o productos alcohólicos. La complejidad de la
                empresa podría afectar el proceso de certificación.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">
                7. Proceso de certificación local/internacional
              </span>
              <br />
              <div>
                Para los productos certificados dentro del país, la complejidad
                es menor que para los productos de exportación, especialmente
                para exportar el producto a países del Golfo. La empresa
                generalmente necesita una carta/documento de respaldo especial
                para el país específico al que desea enviar sus productos. Esta
                carta de respaldo será proporcionada por Halal correct Spain.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">8. Costos administrativos</span>
              <br />
              <div>
                El asistente administrativo deberá realizar otros trámites
                administrativos. Por lo tanto, se aplicará una tarifa específica
                para esta actividad. El trabajo administrativo forma parte del
                proceso interno. Se aplicará una tarifa específica para cubrir
                los costos desde el inicio hasta la emisión del certificado.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">
                9. Extensión de productos certificados
              </span>
              <br />

              <div>
                Tras la auditoría, la empresa suele solicitar cambios en el
                certificado emitido. Una solicitud común es añadir una nueva
                materia prima o producto a su certificado halal. Otras
                solicitudes pueden ser la aprobación para usar nuevas materias
                primas en productos con certificación halal. Cuando el cliente
                solicita añadir una nueva materia prima o producto a su
                certificado halal, se imprime un nuevo certificado. Esta
                actividad también tiene un costo diferente.
              </div>
              <br />
            </div>
            <div className="pt-3">
              <span className="font-bold">10. Separación de anexos</span>
              <br />

              <div>
                Generalmente, un cliente tiene un certificado y todos los
                productos con certificación halal se mencionan en la página del
                anexo; sin embargo, otras empresas pueden hacerlo diferente. La
                solicitud del cliente exige mencionar solo un producto en un
                anexo. Esto significa que si los clientes de Halal correct Spain
                poseen alrededor de 10 productos con certificación halal, se
                deben crear aproximadamente 10 páginas de anexos. El precio de
                la certificación se ve afectado por esta solicitud.
              </div>
              <br />
            </div>
          </ul>
        </ScrollAnimation>
      </div>
    </div>
  )
}
