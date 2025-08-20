"use client";

import { useParams } from "next/navigation";

import {
  BlogSection,
  ContactSec,
} from "../../../component/industries/hitech/BlogSection.jsx";
import { useEffect, useState } from "react";
import {
  fetchBlogById,
  fetchBlogList,
} from "../../../store/actions/blogAction.js";
import { useDispatch, useSelector } from "react-redux";
import {
  ArticleContent,
  Banner,
} from "../../../component/blog/blog-expand/BannerArticle.jsx";

const Page = () => {
  
  useEffect(() => {
    console.log("Hash:", window.location.hash);
    console.log("Scroll position:", window.scrollY);
  }, []);

  const dispatch = useDispatch();
const { slug } = useParams();

  // Redux state
  const { list, data: blogs, isLoading, error, selectedId } = useSelector(
    (state) => state.blogs
  );

  const [matchedId, setMatchedId] = useState(null);

  // slugify helper (same as backend logic you used)
  const slugify = (text) =>
    text
      ?.toString()
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-");

  

  // 2️⃣ once list or slug is ready → find match and fetch by ID
  useEffect(() => {
    const idToFetch = selectedId || localStorage.getItem("selectedBlogsId");

    if (idToFetch) {
      dispatch(fetchBlogById(idToFetch));
    } else if (slug && list.length) {
      const match = list.find((cs) => slugify(cs.title) === slug);
      if (match) {
        setMatchedId(match._id);
        console.log(match._id,"id")
        dispatch(fetchBlogById(match._id));
      } else {
        console.error("No  found for slug:", slug);
      }
    }
  }, [dispatch, selectedId, slug, list]);
  const blogDetails = blogs;

useEffect(() => {
    if (!list.length) {
      dispatch(fetchBlogList());
    }
  }, [dispatch, list.length]);
if ( !matchedId && !selectedId && !localStorage.getItem("selectedCaseStudyId")) {
    return <div className="text-red-500 p-8 text-center text-3xl">Loading Blog Details.</div>;
  }
  return (
    <>
      {blogDetails && (
        <>
          <Banner blog={blogDetails} />
          <ArticleContent blog={blogDetails} />
        </>
      )}
      <BlogSection />
      <ContactSec
        lightContent="Want to create a connected, intelligent, & resilient manufacturing ecosystem? "
        link="#"
      />
    </>
  );
};

export default Page;
