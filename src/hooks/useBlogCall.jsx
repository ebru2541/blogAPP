
import { useDispatch } from "react-redux"
// import { useSelector } from "react-redux"
import {
  fetchFail,
  getSuccess,
  fetchStart,
} from "../features/blogSlice"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import axios from "axios"


const useBlogCall = () => {
  const dispatch = useDispatch()
const url = "https://33800.fullstack.clarusway.com/";

  const getBlogData = async () => {
    dispatch(fetchStart())
    try {
      
      const { data } = await axios(`${url}api/blogs/`)
      dispatch(getSuccess(data))
      console.log(data)
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }

  const deleteBlogData = async ( id) => {
    dispatch(fetchStart())
    try {
      await axios.delete(`${url}api/blogs/${id}/`);
      toastSuccessNotify(`blog successfuly deleted`)
     getBlogData();
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be deleted`)
    }
  }

  const postBlogData = async ( info) => {
    dispatch(fetchStart())
    try {
      await axios.post(`${url}api/blogs/`, info);
      toastSuccessNotify(`blog successfuly posted`)
     getBlogData();
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be posted`)
    }
  }

  const putBlogData = async (info) => {
    dispatch(fetchStart())
    try {
      await axios.put(`${url}api/blogs//${info.id}/`, info);
      toastSuccessNotify(`blog successfuly updated`)
      getBlogData();
    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
      toastErrorNotify(`blog can not be updated`)
    }
  }

  return {
    getBlogData,
    deleteBlogData,
    postBlogData,
    putBlogData,
   
  }
}

export default useBlogCall;
