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

function GuaranteeTabs() {
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
                  className={` cursor-pointer p-2 `}
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

export default GuaranteeTabs

const data = [
  {
    label: "Use of the Halal correct Germany logo",
    value: "tab1",
    desc: (
      <>
        El logotipo de Halal correct Spain está registrado en la Oficina Europea
        de Propiedad Intelectual. Cualquier uso de nuestro logotipo debe ser
        comunicado a nosotros. Terceros solo pueden usar el logotipo con el
        consentimiento por escrito de Halal correct Spain.
        <br />
        <br />
        El uso del logotipo en envases solo está permitido para clientes que
        tengan un contrato con La Certificación Halal Correct Spain y que hayan
        obtenido el consentimiento por escrito que incluya una descripción de
        dónde, cómo y para qué grupos de productos se puede utilizar.
      </>
    ),
  },
  {
    label: "Halal correct Germany certificates",
    value: "tab2",
    desc: (
      <>
        La emisión de certificados halal se puede realizar una vez que la
        empresa/cliente haya superado todos los procedimientos de certificación.
        El contrato también debe firmarse antes del inicio de la certificación.
        El miembro del Comité Ejecutivo y el presidente del consejo
        sharia/religioso serán las dos partes autorizadas que firmarán y
        validarán el contrato.
        <br />
        <br />
        Los certificados Halal correct Spain están destinados a los clientes y a
        sus consumidores para garantizar la dignidad de los productos halal.
        Está estrictamente prohibido utilizar los certificados Halal correct
        Spain como prueba de la dignidad halal en restaurantes, tiendas y
        establecimientos minoristas.
      </>
    ),
  },
]
