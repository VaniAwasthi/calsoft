"use client";

import { useParams } from "next/navigation";

import {
  BlogSection,
  ContactSec,
} from "../../../component/industries/hitech/BlogSection.jsx";
import { useEffect } from "react";
import {
  fetchBlogById,
  fetchBlogList,
} from "../../../store/actions/blogAction.js";
import { setSelectedBlogId } from "../../../store/reducers/blogReducer.js";
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

  const selectedBlogId = useSelector((state) => state.blogs.selectedId);
  const blogDetails = useSelector((state) => state.blogs.data);
  const blogList = useSelector((state) => state.blogs.list);

  useEffect(() => {
    if (selectedBlogId) {
      dispatch(fetchBlogById(selectedBlogId));
    } else {
      // Fallback if selectedBlogId is not set (e.g., on page refresh)
      if (!blogList || blogList.length === 0) {
        dispatch(fetchBlogList()).then((res) => {
          const blog = res?.data?.find((b) => b.slug === slug);
          if (blog) {
            dispatch(setSelectedBlogId(blog._id));
            dispatch(fetchBlogById(blog._id));
          }
        });
      } else {
        const blog = blogList.find((b) => b.slug === slug);
        if (blog) {
          dispatch(setSelectedBlogId(blog._id));
          dispatch(fetchBlogById(blog._id));
        }
      }
    }
  }, [selectedBlogId, slug, blogList]);

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
