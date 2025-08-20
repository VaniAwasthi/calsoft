"use client";
import { useDispatch, useSelector } from "react-redux";
import ResourceGrid from "../../component/blog/BlogSec.jsx";
import { BlogsBanner } from "../../component/blog/blogsBanner.jsx";
import { fetchBlogListLimit } from "../../store/actions/blogAction.js";
import cardImg1 from "../../assets/blog/idcBanner1.webp";
import React, { useEffect } from "react";
import { baseUrl } from "../../../config.js";
import { slugify } from "@/app/component/utilities/helper/SlugGenerator.js";
import { setSelectedBlogId } from "@/app/store/reducers/blogReducer.js";
import { useRouter } from "next/navigation.js";

const Page = () => {
  const dispatch = useDispatch();
const router=useRouter()
  useEffect(() => {
    dispatch(fetchBlogListLimit(2));
  }, [dispatch]);
  const data = useSelector((state) => state.blogs.limitedList);


  const handleBlogClick = (item) => {
  const slug = slugify(item.title || "untitled", { lower: true });
  dispatch(setSelectedBlogId(item._id)); 
  router.push(`/insights/blogs/${slug}`);
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
     
    };
  });

  return (
    <>
      <BlogsBanner cards={DATAS}   onCardClick={handleBlogClick} 
 />
      <ResourceGrid />
    </>
  );
};

export default Page;
