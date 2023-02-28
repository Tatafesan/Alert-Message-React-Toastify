import { ToastContainer, toast } from "react-toastify";
import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

interface AlertProps {
  message: string;
  type: "success" | "info" | "warning" | "error";
}

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  useEffect(() => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warn(message);
        break;
      case "error":
        break;
      default:
        toast(message);
    }
  }, [message, type]);
  return <ToastContainer />;
};
export default Alert;
