import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function QuickScan() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
              We believe that people have the right to consume reliable halal
              products, both in Germany and in Europe and the rest of the world.
              <br />
              <br />
              That's why we are committed to continuously improving our quality
              management system. To achieve this, we work increasingly at an
              international level and aspire day by day for international
              accreditation. We are there...
              <br />
              <br />
              Our diagnostic and rapid analysis services for your processes,
              procedures and raw materials allow for quick verification of your
              supply chain so we can implement an action plan and propose
              appropriate solutions to any deficiencies that may be found.
              <br />
              <br />
              We have developed and optimized tools that allow for very rapid
              analysis of your process/system, while complying with the
              requirements of national and international standards.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default QuickScan
