import * as React from "react"
import Seo from "../components/seo"
import Why from "../components/Home/Why"
import Principles from "../components/Home/Principles"
import Partnership from "../components/Partnership"
import Procedures from "../components/Home/Procedures"
import PrinciplesTab from "../components/Home/PrinciplesTab"
import HalalProducer from "../components/HalalProducer"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"
import DivsSection from "../components/Home/DivsSection"
import SatisfiedCustomers from "../components/Home/SatisfiedCustomers"

function IndexPage() {
  return (
    <div>
      <Why />
      <Principles />
      <DivsSection />
      <Partnership />
      <Procedures />
      <PrinciplesTab />
      <HalalProducer />
      <SatisfiedCustomers />
      <FadeUpOnScroll>
        <iframe
          title="halal correct france location"
          style={{ border: "0", width: "100%", height: "350px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.7901888360193!2d3.1605588690282436!3d50.7052779198069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c328dbe4d73d27%3A0x67a9e5775999bb0b!2s445%20Bd%20Gambetta%2C%2059200%20Tourcoing%2C%20France!5e0!3m2!1sen!2stn!4v1713870183977!5m2!1sen!2stn"
          width="800"
          height="800"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </FadeUpOnScroll>
    </div>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
