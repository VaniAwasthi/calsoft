// import axiosInstance from "../api-config/axiosInstance";
// import {
//   FETCH_BLOG_REQUEST,
//   FETCH_BLOG_SUCCESS,
//   FETCH_BLOG_FAILURE,
//   START_LOADING,
//   STOP_LOADING,
//   FETCH_BLOG_LIST_SUCCESS,
//   FETCH_CASESTUDIES_LIST_FAILURE,
//   FETCH_CASESTUDIES_LIST_REQUEST,
// } from "./type";

// export const fetchBlogs = () => async (dispatch) => {
//   dispatch({ type: START_LOADING }); // global loader
//   dispatch({ type: FETCH_BLOG_REQUEST });

//   try {
//     const response = await axiosInstance.get(
//       "/casestudy/68691234f16d0ff3e8f15e5d"
//     );

//     dispatch({
//       type: FETCH_BLOG_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: FETCH_BLOG_FAILURE,
//       payload: error.message,
//     });
//   } finally {
//     dispatch({ type: STOP_LOADING }); // stop global loader
//   }
// };
// export const fetchBlogList = () => async (dispatch) => {
//   dispatch({ type: START_LOADING }); // global loader
//   dispatch({ type: FETCH_BLOG_LIST_REQUEST });

//   try {
//     const response = await axiosInstance.get("/casestudy");

//     dispatch({
//       type: FETCH_BLOG_LIST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: FETCH_BLOG_LIST_FAILURE,
//       payload: error.message,
//     });
//   } finally {
//     dispatch({ type: STOP_LOADING }); // stop global loader
//   }
// };
