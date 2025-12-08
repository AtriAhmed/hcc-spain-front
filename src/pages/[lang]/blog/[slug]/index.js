import React from "react"
import PostDetail from "../../../../components/blog/PostDetail"

export default function index({ location, params }) {
  return <PostDetail location={location} params={params} />
}
