
import { useEffect } from "react";

export default function Toast({ message, show, setShow }) {

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 2200);
      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return (
    <div className={`toast ${show ? "show" : ""}`}>
      {message}
    </div>
  );
}
