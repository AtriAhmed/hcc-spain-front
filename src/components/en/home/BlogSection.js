import React from "react"
import FadeUpOnScroll from "../../../lib/FadeUpOnScroll"
import sfdaLogo from "../../../images/sfda.jpg"
import logoHcc from "../../../images/logo2.png"
import { Link } from "../../../contexts/TranslationContext"
import Title from "../../Title"
import Posts from "../../blog/Posts"

export default function BlogSection() {
  return (
    <div className="w-full">
      <div className="px-2 sm:px-8 md:px-16 lg:px-8 xl:px-0 2xl:px-0 max-w-7xl mx-auto py-8 w-full">
        <FadeUpOnScroll>
          <h3 className="flex justify-center font-poppins font-bold text-2xl text-center text-primary capitalize transition-all duration-1000">
            Latest News:
          </h3>
        </FadeUpOnScroll>
        <FadeUpOnScroll>
          <Posts
            limit={2}
            searchQuery=""
            currentPage={1}
            setTotalPages={() => console.log("set total pages")}
            gridCols="grid-cols-1 lg:grid-cols-2"
          />

          <Title customClassName="flex justify-center text-primary underline">
            <Link to="/blog">More News</Link>
          </Title>
        </FadeUpOnScroll>
      </div>
    </div>
  )
}
