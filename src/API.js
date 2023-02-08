import axios from "axios";
import { toast } from "react-toastify";

const AxiosPost = async (payload) => {
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  try {
    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL,
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("🚀 ~ file: API.js:6 ~ AxiosPost ~ res", res);
    const data = await res.data;
    console.log("🚀 ~ file: API.js:9 ~ AxiosPost ~ data", data);

    toast.success("Message Send Successfully, Thank You!!", {
      position: "top-center",
    });
  } catch (err) {
    console.log(err);
  }
};

export default AxiosPost;
