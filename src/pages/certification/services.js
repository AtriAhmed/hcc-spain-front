import React from "react"
import HalalProducer from "../../components/HalalProducer"
import Partnership from "../../components/Partnership"
import Seo from "../../components/seo"
import AuditingServices from "../../components/services/AuditingServices"
import QuickScan from "../../components/services/QuickScan"
import TrainingService from "../../components/services/TrainingService"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function index() {
  return (
    <div>
      <div className="h-[300px] bg-[url(./images/doctor_1.jpg)] bg-cover bg-center"></div>

      <FadeUpOnScroll>
        <h3 className="w-full px-8 pt-10 max-w-7xl mx-auto font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
          Vision, mission and core values:
        </h3>
      </FadeUpOnScroll>
      <QuickScan />
      <AuditingServices />
      <HalalProducer />
      <TrainingService />
      <Partnership />
    </div>
  )
}

export default index

export const Head = () => <Seo title="Services" />
