import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"
import { useState } from "react"

function PrinciplesTab() {
  const [currentTab, setCurrentTab] = useState("tab1")

  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-8 py-8 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold  text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            La Certificación Halal Correct Spain ha establecido una serie de
            principios:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll className="py-8">
          <Tabs
            value="tab1"
            className="halalTabs flex flex-col md:flex-row gap-3 md:gap-0 font-poppins font-medium"
          >
            <TabsHeader className="md:w-max md:max-w-[300px] md:mr-6 p-0 md:border-r-2 border-[#9dbc98] rounded-none flex flex-col text-center md:text-left">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={`cursor-pointer p-2  transition-all duration-300`}
                  onClick={() => setCurrentTab(value)}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="text-justify">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="py-0">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default PrinciplesTab

const data = [
  {
    label: "Integridad consciente",
    value: "tab1",
    desc: (
      <>
        El enfoque de nuestra organización hacia los consumidores se basa en
        mostrar nuestra experiencia, fiabilidad y un entorno de trabajo honesto.
        Traducimos estos principios en nuestra "integridad consciente", que
        esperamos que sea una herramienta y una guía en el trabajo diario.
        <br />
        <br />
        Además, un principio importante es concienciar a todos en la
        organización sobre la responsabilidad de sus actos.
      </>
    ),
  },
  {
    label: "Enfoque objetivo",
    value: "tab2",
    desc: (
      <>
        Es fundamental difundir la información dominante, lo que resultará en un
        proceso de toma de decisiones transparente. Una buena información
        permite tomar la menor cantidad de decisiones posible.
        <br />
        <br />
        Esto implica hacer las preguntas correctas, permitir que la otra parte
        exprese su opinión y, a continuación, hacer más preguntas. En todo
        momento y situación, los acuerdos resultantes de dicha comunicación
        siempre generan obligaciones bilaterales; no existen los acuerdos
        unilaterales. Ambas partes son responsables cuando el acuerdo es poco
        realista.
      </>
    ),
  },

  {
    label: "Confianza en el profesionalismo y la experiencia",
    value: "tab3",
    desc: (
      <>
        Esto significa que ejercer y respetar ese profesionalismo es la máxima
        prioridad. El profesionalismo se traduce en información sólida, basada
        en pruebas. La opinión del profesional es importante, pero su
        fundamentación es lo que cuenta.
        <br />
        <br />
        Las tareas que realiza La Certificación Halal Correct Spain son
        complejas y requieren profesionalismo y experiencia por parte de los
        auditores e inspectores. Esto, a su vez, requiere una buena colaboración
        (¡ten en cuenta estas dos palabras: &quot;colaborar&quot; y
        &quot;juntos&quot;!) y una participación activa en los problemas y
        desafíos comunes. Y este profesionalismo debe actualizarse, mantenerse y
        fortalecerse constantemente. Esta es la actitud natural de cada
        profesional, y contratamos a nuestro personal por su profesionalismo y
        experiencia.
      </>
    ),
  },

  {
    label: "Mejora y aprendizaje continuo",
    value: "tab4",
    desc: (
      <>
        Halal Correct Spain es un reto organizativo, pero también muy personal.
        Es una parte intrínseca (esencial) del proceso primario. La mejora es
        necesaria, ya que cada experiencia demuestra que todo lo que hacemos
        puede hacerse de forma más eficaz y eficiente.
        <br />
        <br />
        El aprendizaje es la clave de la mejora, y es necesario porque nuestro
        entorno está en constante evolución y debemos adaptarnos constantemente.
      </>
    ),
  },
]
