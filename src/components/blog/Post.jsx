import { Link } from 'gatsby'
import React from 'react'
import './Post.css'
import { ArrowForward, ArrowRight } from '@mui/icons-material'

export default function Post({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} key={post.id} className="col-span-1 flex flex-col justify-between gap-4 bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover-scale">
      <section>
        {post?.image ? <img src={`${process.env.GATSBY_API_URL}${post?.image}`} alt={post.title_en || post.title_ar || post.title_nl} className="w-full h-36 object-cover rounded-md"></img> : ""}
        <div className='font-bold'>{post.title_en}</div>
        <div className='font-bold'>{post.title_ar}</div>
        <div className='font-bold'>{post.title_nl}</div>
        <p className='text-gray-600 '>
          {post.summary_en || post.summary_ar || post.summary_nl}
        </p>
      </section>

      <section className='flex justify-between items-center'>
        <div><a href="" className="text-primary inline-block">Read More <ArrowForward fontSize='small' /> </a></div>
        <div className='text-sm flex items-center posts-center gap-2'>
          <span className='font-semibold text-gray-500'>languages available:</span>
          {post.title_en && <div className='bg-gray-600 text-white font-bold p-1 rounded'>en</div>}
          {post.title_ar && <div className='bg-gray-600 text-white font-bold p-1 rounded'>ar</div>}
          {post.title_nl && <div className='bg-gray-600 text-white font-bold p-1 rounded'>nl</div>}</div>
      </section>
    </Link>
  )
}
