import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
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
            Halal Correct Spain Certification has established a series of
            principles.
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
    label: "What are E numbers?",
    value: "tab1",
    desc: (
      <>
        An E number is a number assigned to an additive or excipient in food. It
        indicates that the substance is permitted in the EU. E numbers are
        included in the Commodities Act.
        <br />
        <br />
        The producer is required to indicate these additives on the label.
        Producers can include the number or name of the substance on the
        packaging. Many additives also have different names, which makes it very
        difficult for the consumer to understand their content.
      </>
    ),
  },
  {
    label: "Is animal stunning during slaughter halal?",
    value: "tab2",
    desc: (
      <>
        The basis of Islamic slaughter is that the animal is sacrificed without
        stunning. However, Islamic scholars indicate that anesthesia is
        permitted to a certain extent and in special cases, such as when there
        is helplessness or when animal quality or welfare is at risk.
        <br />
        <br />
        In all cases, the anesthesia must be reversible. It must be guaranteed
        that the animal will remain alive after stunning and will not die.
      </>
    ),
  },
]
