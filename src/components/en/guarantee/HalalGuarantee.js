import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"

function HalalGuarantee() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            Halal Guarantee:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
            If you find our logo on a product in the market, it means it has our
            Halal certification. This guarantee is obtained through various
            certification and inspection processes from the beginning to the end
            of the production line.
            <br />
            <br />
            We select, train and authorize the auditor and expert in Islamic
            affairs based on their audit experience, academic training,
            experience in the category and other relevant training.
            <br />
            <br />
            The Halal Correct Certification Group, of which Halal Correct Spain
            is part, prioritizes compliance with the fundamental values and
            foundations of Islamic nutritional standards in Halal certification.
            "الرجوع إلى الأصل".
            <br />
            <br />
            Therefore, we have summarized our guidelines in 7 standards that we
            guarantee to the Muslim consumer. By choosing Halal Correct, you
            choose the following seven stars/Guarantees of Halal Correct Spain:
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>Guarantee of animal welfare protection.</li>
            <li>
              We guarantee that the animal is 100% healthy and alive during
              slaughter.
            </li>
            <li>
              We guarantee that no firearms or gas anesthesia are allowed.
            </li>
            <li>
              We guarantee that all animals are slaughtered by hand, according
              to Islamic custom and by Muslims.
            </li>
            <li>
              We guarantee that halal production is always completely separated
              and carried out in pig-free zones.
            </li>
            <li>
              We guarantee that all ingredients and additives are examined and
              approved to ensure their halal dignity.
            </li>
            <li>
              We guarantee that we permanently and consistently monitor the
              entire chain, from slaughter to packaging.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default HalalGuarantee
