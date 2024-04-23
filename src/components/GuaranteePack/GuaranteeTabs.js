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
          Halal correct France Certification has drawn up a number of principles:
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
    label: "Use of the Halal correct France logo",
    value: "tab1",
    desc: (
      <>
        Halal correct France logo is registered at Benelux office for Intellectual
        Property. Any kinds of use for our logo need to be communicated with us.
        The third parties is allowed to use the logo only if Halal correct France has
        given its written consent.
        <br />
        <br />
        The use of the logo on packaging is only allowed for clients who have a
        contract with Halal correct France Certification and who were given written
        consent which includes a description of where, how, and for which
        product groups the logo can be used.
      </>
    ),
  },
  {
    label: "Halal correct France certificates",
    value: "tab2",
    desc: (
      <>
        The issuance of halal certificates can be done after all certification
        procedure have been passed by the company/client. The contract also
        needs to be signed before the certification begins. The member of the
        Executive Board and the chairman of the Sharia/religious council will be
        two authorized parties who will sign and validate the contract.
        <br />
        <br />
        The Halal correct France certificates are intended for the clients and their
        customers to guarantee the dignity of the halal products. It is strictly
        prohibited to use the Halal correct France certificates as proof of halal
        dignity in restaurants and in shops/retail branch.
      </>
    ),
  },
]