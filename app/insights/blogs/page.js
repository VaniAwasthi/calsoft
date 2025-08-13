"use client";
import { useDispatch, useSelector } from "react-redux";
import ResourceGrid from "../../component/blog/BlogSec.jsx";
import { BlogsBanner } from "../../component/blog/blogsBanner.jsx";
import { fetchBlogListLimit } from "../../store/actions/blogAction.js";
import cardImg1 from "../../assets/blog/idcBanner1.webp";
import React, { useEffect } from "react";
import { baseUrl } from "../../../config.js";

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogListLimit(2));
  }, [dispatch]);
  const data = useSelector((state) => state.blogs.limitedList);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };
  const DATAS = data?.map((blog) => {
    const descriptionWords = blog.content?.split(" ") || [];
    const shortDescription =
      descriptionWords.slice(0, 40).join(" ") +
      (descriptionWords.length > 40 ? "..." : "");

    return {
      label: blog?.categoryData?.name || "Blog",
      title: blog.title,
      description: shortDescription,
      image: blog.image ? `${baseUrl}/${blog.image}` : cardImg1,
      link: `/insights/blogs/${createSlug(blog.title)}`,
    };
  });

  return (
    <>
      <BlogsBanner cards={DATAS} />
      <ResourceGrid />
    </>
  );
};

export default Page;
