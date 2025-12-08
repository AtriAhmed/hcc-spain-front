import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function BasedOn() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            These religious dietary precepts are based on:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>The Quran (the holy book of Muslims).</li>
            <li>
              The Sunnah (the tradition and lifestyle of the Prophet Muhammad).
            </li>
            <li>The consensus of the Muslim community.</li>
            <li>
              Analogy based on the primary sources of Islam, as explained by
              recognized Islamic scholars.
            </li>
          </ul>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            In daily life, food is an essential part and, therefore, these
            dietary laws also play an important role in the life of a Muslim.
            Halal is also an identity of conscious living. Halal is synonymous
            with quality, hygiene and lifestyle. (Source: Ikeethalal.nl).
          </p>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default BasedOn
