"use client";

import { useParams } from "next/navigation";
import { blogData } from "../../../../component/utilities/data/BlogData.js";
import {
  ArticleContent,
  Banner,
} from "../../../../component/blog/blog-expand/BannerArticle.jsx";
import {
  BlogSection,
  ContactSec,
} from "../../../../component/industries/hitech/BlogSection.jsx";

const Page = () => {
  const params = useParams();
  const id = parseInt(params?.id); // Ensure it's a number if IDs are numeric
  const blog = blogData.find((item) => item.id === id);

  if (!blog) return <div className="p-8">Blog not found.</div>;

  return (
    <>
      <Banner blog={blog} />
      <ArticleContent blog={blog} />
      <BlogSection />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};

export default Page;
