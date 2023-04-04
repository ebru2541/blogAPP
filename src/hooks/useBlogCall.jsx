// import axios from "axios"
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux"
import { fetchFail, getSuccess, fetchStart } from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
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

  // const deleteBlogData = async (url, id) => {
  //   dispatch(fetchStart());
  //   try {
  //     await axiosWithToken.delete(`stock/${url}/${id}/`);
  //     toastSuccessNotify(`${url} successfuly deleted`);
  //     getBlogData(url);
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} can not be deleted`);
  //   }
  // };

  const postBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/`, info);
      toastSuccessNotify(`${url} successfuly posted`);
      getBlogData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };
  const getLikeComment = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken(`api/${url}/${id}/`);
      toastSuccessNotify(` successfuly getlike`);
      getBlogData("blogs");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const postLike = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${id}/`);
      getLikeComment(url, id);
      toastSuccessNotify(`${url} successfuly posted`);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be posted`);
    }
  };

  const postComment = async (url,info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`api/${url}/${info.post}/`, info);
      toastSuccessNotify(` successfuly comment post`);
      getLikeComment(url, info.post);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(` can not be updated`);
    }
  };


  const putBlogData = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getBlogData(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be updated`);
    }
  };

  return {
    getBlogData,
    postBlogData,
    putBlogData,
    postLike,
    postComment,
    getLikeComment,
  };
};

export default useBlogCall;
