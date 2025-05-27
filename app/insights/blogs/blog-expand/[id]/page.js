"use client";

import { useParams } from "next/navigation";
import { blogData } from "@/app/component/utilities/data/BlogData";
import {
  ArticleContent,
  Banner,
} from "@/app/component/blog/blog-expand/BannerArticle";
import {
  BlogSection,
  ContactSec,
} from "@/app/component/industries/hitech/BlogSection";

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
