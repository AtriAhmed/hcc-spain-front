import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
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
            Halal Correct Spain Certification has established a series of
            principles:
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
    label: "Accreditation and collaboration:",
    value: "tab1",
    desc: (
      <>
        <div className="font-semibold">
          Halal Correct Spain is a member of the Halal Correct Certification
          Group:
        </div>
        The Halal Correct Certification Foundation (TQ HCC) has accreditation
        and recognition from numerous international Islamic authorities and
        operates under the supervision of the Islamic Council for Fatwa and
        Research in Germany (IBFR), an independent entity. The IBFR represents
        the four main schools of Islamic law and maintains strong connections
        with relevant Islamic institutions worldwide. Additionally, TQ HCC
        collaborates with specialized food agencies such as Eurofins Food &amp;
        Feed Testing (International) and Scienta Nova in Germany for research
        and laboratory services in the field of food technology.
      </>
    ),
  },
  {
    label: "Unique in international halal accreditations",
    value: "tab2",
    desc: (
      <>
        Halal Correct Spain Certification works according to internationally
        recognized halal guidelines, based on the ISO 9001:2015/ CE 17065:2012
        and CE 19011:2011 quality management system. To provide greater
        transparency and halal guarantee, our goal is to obtain broad
        international recognition.
      </>
    ),
  },
]
