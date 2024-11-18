import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../Title";
import "./PostDetail.css"

// Helper function to parse custom markdown-like syntax
const parseContent = (content) => {
  if (!content) return "";

  // Replace **bold** with <strong>bold</strong>
  const boldParsed = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Detect URLs and convert them to clickable links
  const linkParsed = boldParsed.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" class="markdown-link" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  return linkParsed;
};

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export default function BlogDetail({ location, params }) {
  const [blogPost, setBlogPost] = useState(null);
  const [slug, setSlug] = useState(null);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    console.log(params);
    const slugParam = params.slug;
    setSlug(slugParam);
  }, [location]);

  useEffect(() => {
    if (slug) {
      axios.get(`/api/posts/${slug}`).then(res => {
        setBlogPost(res.data);
        setLanguage(res.data.title_en ? "en" : res.data.title_nl ? "nl" : "ar");
        console.log(res.data);
      }).catch(err => {
        console.error("Error fetching blog post:", err);
      });
    }
  }, [slug]);

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="w-full px-8 py-10 pt-[136px] max-w-3xl mx-auto" dir={language == "ar" ? "rtl" : "ltr"}>
        {blogPost.image ? <img src={`${process.env.GATSBY_API_URL}${blogPost.image}`} alt={blogPost.title} className="mb-8" /> : ""}
        <div className="flex justify-between items-start border-b pb-4">
          <div className="flex flex-col gap-1">
            <Title size="text-3xl scr800:text-4xl" customClassName="font-poppins !text-teal-500 capitalize transition-all duration-1000">
              {blogPost[`title_${language}`]}
            </Title>
            <p className="text-sm text-gray-500">{formatDate(blogPost.created_at)}</p>
          </div>
          <div className="flex gap-2 items-center justify-end">
            <span className="semi-bold font-semibold">{language == "ar" ? "اللغة: " : "language: "} </span>
            {blogPost.title_en && <button className="bg-gray-100 p-1" onClick={() => handleLanguageChange("en")}>EN</button>}
            {blogPost.title_ar && <button className="bg-gray-100 p-1" onClick={() => handleLanguageChange("ar")}>AR</button>}
            {blogPost.title_nl && <button className="bg-gray-100 p-1" onClick={() => handleLanguageChange("nl")}>NL</button>}
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          {blogPost?.content_items?.sort((a, b) => a.order - b.order).map(item => (
            <div key={item.id}>
              {item.language == language ? (
                item.type == "title" ? (
                  <Title customClassName="mb-2">{item.content}</Title>
                ) : item.type == "text" ? (
                  // Apply the markdown parser to the text content
                  <div
                    className="mb-4"
                    dangerouslySetInnerHTML={{ __html: parseContent(item.content) }} // Render parsed HTML content
                  />
                ) : item.type == "image" ? (
                  <div className="mb-2">
                    <img src={`${process.env.GATSBY_API_URL}${item.file_path}`} alt="" />
                  </div>
                ) : item.type == "pdf" ? (
                  <div>
                    <a download href={`${process.env.GATSBY_API_URL}${item.file_path}`}>Download Pdf</a>
                  </div>
                ) : null
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
