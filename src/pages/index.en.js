import * as React from "react"
import Seo from "../components/seo"
import Why from "../components/en/home/Why"
import Principles from "../components/en/home/Principles"
import Partnership from "../components/Partnership"
import Procedures from "../components/en/home/Procedures"
import PrinciplesTab from "../components/en/home/PrinciplesTab"
import HalalProducer from "../components/HalalProducer"
import FadeUpOnScroll from "../lib/FadeUpOnScroll"
import DivsSection from "../components/en/home/DivsSection"
import SatisfiedCustomers from "../components/en/home/SatisfiedCustomers"
import Map from "../components/Map"
import BlogSection from "../components/en/home/BlogSection"

function IndexPage() {
  return (
    <div>
      <Why />
      <Principles />
      <DivsSection />
      <Partnership />
      <BlogSection />
      <Procedures />
      <PrinciplesTab />
      <HalalProducer />
      <SatisfiedCustomers />
      <FadeUpOnScroll>
        <Map />
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
