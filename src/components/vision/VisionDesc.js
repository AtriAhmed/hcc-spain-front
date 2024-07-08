import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function VisionDesc() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        {/* <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Vision, mission and core values:
          </h3>
        </FadeUpOnScroll> */}
        <FadeUpOnScroll>
          <h3 className="pt-4 font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Our Vision:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pb-8 pt-4 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              We firmly believe in ensuring that individuals have access to trustworthy halal products, not only in Germany but also across Europe and globally. That's why we are dedicated to constantly enhancing our own quality management system. To achieve this goal, we are expanding our operations on an international scale and striving for greater international accreditation.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Our Mission:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pb-8 pt-4 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              The mission of Halal Correct Germany is to support individuals and organizations seeking certified halal products. We specialize in certifying slaughterhouses and food processing industries across Europe, ensuring the correct application of halal practices throughout various stages, including preparation, processing, handling, packaging, transportation, and distribution of food products.
            </p>
          </div>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Core values:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <div className="pt-4 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              Halal Correct Germany has established a set of principles to serve as guidelines for our processes and work methods. These principles—trust and expertise, conscious integrity, continuous improvement and learning, and an objective approach—form the foundation of Halal Correct Germany, ensuring reliability and excellence in our services.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default VisionDesc
