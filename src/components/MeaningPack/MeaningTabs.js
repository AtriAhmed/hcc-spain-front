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
          HCC EAST AFRICAN HALAL CONFIRMATION CENTER LIMITED Certification has drawn up a number of principles
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
    label: "What are email numbers?",
    value: "tab1",
    desc: (
      <>
        An e-number is a number that is assigned to a certain additive or
        excipient in foods. It indicates that the substance is allowed in the
        EU. E numbers are included in the Commodities Act.
        <br />
        <br />
        The producer is obliged to state these additives on the label. Producers
        can put the number and/or name of the substance on the packaging. Many
        additions also have different names. This makes it very difficult for a
        consumer to understand what is inside.
      </>
    ),
  },
  {
    label: "Is stunning of animals during slaughter halal?",
    value: "tab2",
    desc: (
      <>
        The basis of Islamic slaughter is that the animal is slaughtered without
        any form of stunning. Islamic scholars indicate, however, that an
        anesthetic is allowed to a certain extent and in special cases, namely
        when there is impotence or when the quality or animal welfare is at
        stake.
        <br />
        <br />
        In all cases, the anesthesia should be reversible. There must be a
        guarantee that the animal will continue to live after the stunning and
        will not die.
      </>
    ),
  },
]
