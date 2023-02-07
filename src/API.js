import axios from "axios";
import { toast } from "react-toastify";

const AxiosPost = async (payload) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      process.env.REACT_APP_BASE_URL,
      payload,
      config
    );
    console.log("🚀 ~ file: API.js:6 ~ AxiosPost ~ res", res);
    const data = await res.data;
    console.log("🚀 ~ file: API.js:9 ~ AxiosPost ~ data", data);

    toast.success("Message Send Successfully, Thank You!!", {
      position: "top-center",
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default AxiosPost;
