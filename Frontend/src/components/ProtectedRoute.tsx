import { useAppSelector } from "@/store/hooks";
import { JSX } from "react";
import { Navigate } from "react-router-dom";

type IProps = {
  children: JSX.Element;
};

const ProtectedRoute = ({ children }: IProps) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
