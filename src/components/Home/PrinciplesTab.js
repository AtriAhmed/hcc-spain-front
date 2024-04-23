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
          Halal correct France Certification has drawn up a number of principles:
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
    label: "Conscious integrity",
    value: "tab1",
    desc: (
      <>
        our organization approach toward our consumers is by showing our
        expertise, reliability an honest working environment. We translate these
        manners to our “conscious integrity” which we expect could be a tool and
        guidance during day-to-day working practice.
        <br />
        <br />
        Moreover, an important principle is also to build up an awareness for
        everyone in the organization to be responsible for their act.
      </>
    ),
  },
  {
    label: "Objective approach",
    value: "tab2",
    desc: (
      <>
        It is essential to get dominant information out in the open, which will
        result in a transparent decision-forming process. Good information leads
        to a minimum number of decisions.
        <br />
        <br />
        This entails asking the right questions, allowing the other party to
        speak his mind, and then asking more questions. Every time and in all
        situations. Agreements that follow from such communication always create
        bilateral obligations; there is no such thing as a unilateral agreement.
        Both parties are responsible and accountable when the agreement is
        (un)realistic.
      </>
    ),
  },

  {
    label: "Trust in professionalism and expertise",
    value: "tab3",
    desc: (
      <>
        This means that using and respecting that professionalism is a
        number-one priority. Professionalism results in hard information, based
        on "evidence". The opinion of the professional matters, but the
        substantiation by the professional is what counts.
        <br />
        <br />
        The tasks performed by Halal correct France Certification are complex and
        require professionalism and expertise from the auditors and inspectors.
        This, in turn, requires a good way of working together (please note
        these two words: “working” and “together”!) and active participation in
        common issues and challenges. And this professionalism must constantly
        be updated, maintained, and strengthened. This is the natural attitude
        of each professional, and we employ our staff because of their
        professionalism and expertise.
      </>
    ),
  },

  {
    label: "Improvement and continuous learning",
    value: "tab4",
    desc: (
      <>
        Halal correct France is an organisational challenge, but also a very personal
        one. It is an intrinsic (essential) part of the primary process.
        Improvement is necessary as each experience shows that whatever we do
        can be done more effectively and efficiently. <br />
        <br /> Learning is the superlative of improvement, and it is necessary
        because our environment is in constant flux and we have to keep
        adjusting ourselves.
      </>
    ),
  },
]

