import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react"

function MeaningTabs() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold  text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            La Certificación Halal Correct Spain ha establecido una serie de
            principios.
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll className="pt-8">
          <Tabs
            value="tab1"
            className="halalTabs flex flex-col md:flex-row gap-3 md:gap-0 font-poppins font-medium"
          >
            <TabsHeader className="md:w-max md:max-w-[300px] md:mr-6 p-0 md:border-r-2 border-[#9dbc98] rounded-none flex flex-col text-center md:text-left">
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} className={`cursor-pointer p-2`}>
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

export default MeaningTabs

const data = [
  {
    label: "¿Qué son los números E?",
    value: "tab1",
    desc: (
      <>
        Un número E es un número que se asigna a un aditivo o excipiente en los
        alimentos. Indica que la sustancia está permitida en la UE. Los números
        E están incluidos en la Ley de Productos Básicos.
        <br />
        <br />
        El productor está obligado a indicar estos aditivos en la etiqueta. Los
        productores pueden incluir el número o el nombre de la sustancia en el
        envase. Muchos aditivos también tienen nombres diferentes, lo que
        dificulta mucho que el consumidor comprenda su contenido.
      </>
    ),
  },
  {
    label: "¿Es halal el aturdimiento de animales durante el sacrificio?",
    value: "tab2",
    desc: (
      <>
        La base del sacrificio islámico es que el animal se sacrifica sin
        aturdimiento. Sin embargo, los eruditos islámicos indican que la
        anestesia está permitida hasta cierto punto y en casos especiales, como
        cuando hay impotencia o cuando la calidad o el bienestar animal están en
        riesgo.
        <br />
        <br />
        En todos los casos, la anestesia debe ser reversible. Debe garantizarse
        que el animal seguirá vivo después del aturdimiento y no morirá.
      </>
    ),
  },
]
