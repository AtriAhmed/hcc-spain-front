import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function QuickScan() {
  return (
    <div className="w-full">
      <div className="w-full px-8 pb-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <div className="pt-8 flex flex-col items-center md:flex-row gap-8">
            <p className="font-open font-normal text-base text-center md:text-left text-slate-900">
            We believe that people have the right to consume reliable halal meat, in Kenya as well as in Africa
and the rest of the world.
              <br />
              <br />
              That is why we are committed to continuously improve our own quality management system. To
achieve this, we are working more and more on an international level and we increasingly aim for
international accreditation. We are there…
              <br />
              <br />
              Our services for performing diagnostics and quick analysis of your processes and slaughtering
procedure enable rapid verification of your chain so that we can implement an action plan and
propose suitable solutions to any shortcomings you are facing.
              <br />
              <br />
              We have developed and optimized tools that enable very fast analysis of your process/system, whilst
at the same time fulfilling the requirements of national and international standards.
            </p>
          </div>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default QuickScan
