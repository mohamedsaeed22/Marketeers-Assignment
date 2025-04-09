import { isAxiosError } from "axios";

const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    return (
      error.response?.data ||
      error.response?.data?.payload || {
        title: "Unexpected Error",
        message: error.message,
      }
    );
  } else {
    return { title: "Unknown Error", message: "unknown error" };
  }
};

export default axiosErrorHandler;
