/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import Footer from "./Footer"
import ScrollUpButton from "../lib/ScrollUpButton"
import MobileNavbar from "./MobileNavbar"
import Video from "./Video"

const Layout = ({ children, location = { pathname: "" } }) => {
  const haveLayout = () => {
    return (
      location?.pathname.indexOf("/contact") !== 0 &&
      location?.pathname.indexOf("/login") !== 0 &&
      location?.pathname.indexOf("/register") !== 0 &&
      location?.pathname.indexOf("/check-certificate") !== 0
    )
  }

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Video />
      <MobileNavbar />
      <ScrollUpButton />
      {haveLayout() ? <Navbar location={location} /> : ""}
      {children}
      {haveLayout() ? <Footer location={location} /> : ""}
    </>
  )
}

export default Layout
