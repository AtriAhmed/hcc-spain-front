import React from "react"
import FadeUpOnScroll from "../../lib/FadeUpOnScroll"

function HalalGuarantee() {
  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 max-w-7xl mx-auto">
        <FadeUpOnScroll>
          <h3 className="font-poppins font-bold text-3xl md:text-4xl text-center md:text-left text-[#9dbc98] capitalize transition-all duration-1000 ">
            The Halal Guarantee:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <p className="pt-6 font-open font-normal text-base text-center md:text-left text-slate-900">
          If you find out our logo on a product in the market it means that
            the product has been halal certified by us. This assurance comes
            through a various process of certification and inspection from the
            beginning to end production lines.
            <br />
            <br />
            We select, train and authorize the auditor and Islamic Affair Expert
            based on their audit experiences, educational background, category
            expertise and other relevant training.
            <br />
            <br />
            The Halal correct France Certification Foundation Halal correct France
            Certification places great store on working in compliance with the
            core values and the foundation of the Islamic nutrition regulations
            when it comes to halal certification. “الرجوع إلى الأصل”.
            <br />
            <br />
            That is why we have summarized our guidelines in 7 standards which
            we can guarantee to the Muslim consumer. When you opt for Halal
            Correct, you are choosing the following seven stars/Guarantees of
            Halal correct France:
          </p>
          <ul className="px-8 pt-6 font-open font-normal text-base list-disc">
            <li>Guarantee that animal welfare is safeguarded.</li>
            <li>
              Guarantee that the animal is 100% healthy and alive during
              slaughtering.
            </li>
            <li>
              Guarantee that we do not allow shooting guns and no anesthesia by
              gas.
            </li>
            <li>
              Guarantee that all animals are slaughtered by hand in accordance
              with Islamic custom and by Muslims.
            </li>
            <li>
              Guarantee that the halal production is always completely separated
              and executed in pig-free areas.
            </li>
            <li>
              Guarantee that all ingredients and additives are screened and
              approved for halal dignity.
            </li>
            <li>
              Guarantee that we permanently and consistently monitor the entire
              chain from slaughter to packaging.
            </li>
          </ul>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}

export default HalalGuarantee
