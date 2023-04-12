// import axios from "axios"
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"
import { fetchFail, getSuccess, fetchStart } from "../features/blogSlice";
import { toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getBlogData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);
      // toastSuccessNotify(`${url} successfuly posted`);
      getBlogData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      // toastErrorNotify(`${url} can not be posted`);
    }
  };
  const getLikeComment = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/${url}/${id}/`);
      // toastSuccessNotify(` successfuly getlike`);
      dispatch(getSuccess({ data, url }));
      getBlogIdData("blog", id);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const postLike = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${id}/`);

      // toastSuccessNotify(`${url} successfuly posted`);
    } catch (error) {
      dispatch(fetchFail());
      // toastErrorNotify(`${url} can not be posted`);
    }
  };

  const postComment = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${info.post}/`, info);
      toastSuccessNotify(` successfuly comment post`);
      getBlogIdData("blog", info.post);
    } catch (error) {
      dispatch(fetchFail());
      // toastErrorNotify(` can not be updated`);
    }
  };

  const getBlogIdData = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/blogs/${id}/`);
      // toastSuccessNotify(` comments successfuly updated`);
      dispatch(getSuccess({ data, url }));
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      // toastErrorNotify(`${url} can not be comm`);
    }
  };

  return {
    getBlogData,
    postBlogData,
    postLike,
    postComment,
    getLikeComment,
    getBlogIdData,
  };
};

export default useBlogCall;
