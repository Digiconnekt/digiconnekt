import axios from "axios";
import { toast } from "react-toastify";

const AxiosPost = async (url, header) => {
  try {
    const res = await axios.post(url, header);
    console.log("🚀 ~ file: API.js:6 ~ AxiosPost ~ res", res);
    const data = await res.data;
    toast.success("Message Send Successfully, Thank You!!", {
      position: "top-center",
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default AxiosPost;
