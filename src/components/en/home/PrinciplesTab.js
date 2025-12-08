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

function PrinciplesTab() {
  const [currentTab, setCurrentTab] = useState("tab1")

  return (
    <div className="w-full">
      <div className="w-full px-4 md:px-8 py-8 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold  text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Correct Spain Certification has established a series of
            principles:
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
        Our organization's approach towards consumers is based on showing our
        experience, reliability and an honest working environment. We translate
        these principles into our "conscious integrity", which we hope will be a
        tool and guide in daily work.
        <br />
        <br />
        Furthermore, an important principle is to make everyone in the
        organization aware of the responsibility of their actions.
      </>
    ),
  },
  {
    label: "Objective approach",
    value: "tab2",
    desc: (
      <>
        It is essential to disseminate dominant information, which will result
        in a transparent decision-making process. Good information allows for
        making the fewest decisions possible.
        <br />
        <br />
        This involves asking the right questions, allowing the other party to
        express their opinion, and then asking more questions. At all times and
        situations, agreements resulting from such communication always generate
        bilateral obligations; there are no unilateral agreements. Both parties
        are responsible when the agreement is unrealistic.
      </>
    ),
  },

  {
    label: "Trust in professionalism and experience",
    value: "tab3",
    desc: (
      <>
        This means that exercising and respecting that professionalism is the
        top priority. Professionalism translates into solid, evidence-based
        information. The professional's opinion is important, but its foundation
        is what counts.
        <br />
        <br />
        The tasks performed by Halal Correct Spain Certification are complex and
        require professionalism and experience from auditors and inspectors.
        This, in turn, requires good collaboration (note these two words:
        &quot;collaborate&quot; and &quot;together&quot;!) and active
        participation in common problems and challenges. And this
        professionalism must be constantly updated, maintained and strengthened.
        This is the natural attitude of every professional, and we hire our
        staff for their professionalism and experience.
      </>
    ),
  },

  {
    label: "Continuous improvement and learning",
    value: "tab4",
    desc: (
      <>
        Halal Correct Spain is an organizational challenge, but also a very
        personal one. It is an intrinsic (essential) part of the primary
        process. Improvement is necessary, as every experience shows that
        everything we do can be done more effectively and efficiently.
        <br />
        <br />
        Learning is the key to improvement, and it is necessary because our
        environment is constantly evolving and we must constantly adapt.
      </>
    ),
  },
]
