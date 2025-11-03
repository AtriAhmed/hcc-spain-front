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

function PartnershipsTab() {
  const [currentTab, setCurrentTab] = useState("tab1")

  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold  text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            La Certificación Halal Correct Spain ha establecido una serie de
            principios:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll className="pt-8">
          <Tabs
            value="tab1"
            className="halalTabs flex flex-col md:flex-row gap-3 md:gap-0 font-poppins font-medium"
          >
            <TabsHeader className="md:w-max md:max-w-[300px] md:mr-6 p-0 md:border-r-2 border-[#9dbc98] rounded-none flex flex-col text-center md:text-left">
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={` cursor-pointer p-2`}
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

export default PartnershipsTab

const data = [
  {
    label: "Acreditación y colaboración:",
    value: "tab1",
    desc: (
      <>
        <div className="font-semibold">
          Halal Correct Spain es miembro del Grupo de Certificación Halal
          Correct:
        </div>
        La Fundación para la Certificación Halal Correct (TQ HCC) cuenta con la
        acreditación y el reconocimiento de numerosas autoridades islámicas
        internacionales y opera bajo la supervisión del Consejo Islámico para la
        Fatwa y la Investigación en Alemania (IBFR), entidad independiente. El
        IBFR representa a las cuatro principales escuelas de derecho islámico y
        mantiene sólidas conexiones con instituciones islámicas pertinentes a
        nivel mundial. Además, TQ HCC colabora con agencias alimentarias
        especializadas como Eurofins Food &amp; Feed Testing (Internacional) y
        Scienta Nova en Alemania para servicios de investigación y laboratorio
        en el campo de la tecnología alimentaria.
      </>
    ),
  },
  {
    label: "Único en acreditaciones halal internacionales",
    value: "tab2",
    desc: (
      <>
        La Certificación Halal Correct Spain trabaja conforme a las directrices
        halal reconocidas internacionalmente, basadas en el sistema de gestión
        de calidad ISO 9001:2015/ CE 17065:2012 y CE 19011:2011. Para brindar
        mayor transparencia y garantía halal, nuestro objetivo es obtener un
        amplio reconocimiento internacional.
      </>
    ),
  },
]
