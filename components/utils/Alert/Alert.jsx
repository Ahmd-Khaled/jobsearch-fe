import { useState, useEffect } from "react";

const Alert = ({ message, type = "info", duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const alertStyles = {
    success: "bg-green-100 text-green-700 border-green-500",
    error: "bg-red-100 text-red-700 border-red-500",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
    info: "bg-blue-100 text-blue-700 border-blue-500",
  };

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-3 border-l-4 rounded-md shadow-md ${alertStyles[type]}`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;
