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

function GuaranteeTabs() {
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
    label: "Use of the Halal Correct Spain logo",
    value: "tab1",
    desc: (
      <>
        The Halal Correct Spain logo is registered with the European
        Intellectual Property Office. Any use of our logo must be communicated
        to us. Third parties can only use the logo with written consent from
        Halal Correct Spain.
        <br />
        <br />
        The use of the logo on packaging is only permitted for clients who have
        a contract with Halal Correct Spain Certification and who have obtained
        written consent that includes a description of where, how and for which
        product groups it can be used.
      </>
    ),
  },
  {
    label: "Halal Correct Spain certificates",
    value: "tab2",
    desc: (
      <>
        The issuance of halal certificates can be performed once the
        company/client has passed all certification procedures. The contract
        must also be signed before the start of certification. The Executive
        Committee member and the chairman of the sharia/religious council will
        be the two authorized parties who will sign and validate the contract.
        <br />
        <br />
        Halal Correct Spain certificates are intended for clients and their
        consumers to guarantee the dignity of halal products. It is strictly
        prohibited to use Halal Correct Spain certificates as proof of halal
        dignity in restaurants, stores and retail establishments.
      </>
    ),
  },
]
