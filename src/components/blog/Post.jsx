import { Link } from "../../contexts/TranslationContext"
import React from "react"
import "./Post.css"
import { ArrowForward, ArrowRight } from "@mui/icons-material"

export default function Post({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      key={post.id}
      className="flex flex-col justify-between gap-4 col-span-1 p-6 rounded-lg bg-gray-100 shadow-md hover:shadow-xl transition duration-300 hover-scale"
    >
      <section>
        {post?.image ? (
          <img
            src={`${process.env.GATSBY_API_URL}${post?.image}`}
            alt={post.title_es || post.title_en || post.title_ar}
            className="w-full h-36 object-cover rounded-md"
          ></img>
        ) : (
          ""
        )}
        <div className="font-bold">{post.title_es}</div>
        <div className="font-bold">{post.title_en}</div>
        <div className="font-bold">{post.title_ar}</div>
        <p className="text-gray-600">
          {post.summary_es || post.summary_en || post.summary_ar}
        </p>
      </section>

      <section className="flex justify-between items-center">
        <div>
          <a href="" className="inline-block text-primary">
            Leer más <ArrowForward fontSize="small" />{" "}
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm posts-center">
          <span className="font-semibold text-gray-500">
            Idiomas disponibles:
          </span>
          {post.title_es && (
            <div className="p-1 rounded bg-gray-600 font-bold text-white">
              es
            </div>
          )}
          {post.title_en && (
            <div className="p-1 rounded bg-gray-600 font-bold text-white">
              en
            </div>
          )}
          {post.title_ar && (
            <div className="p-1 rounded bg-gray-600 font-bold text-white">
              ar
            </div>
          )}
        </div>
      </section>
    </Link>
  )
}
