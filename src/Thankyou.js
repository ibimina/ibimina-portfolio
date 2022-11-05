import React from "react";
import { useNavigate } from "react-router-dom";
export default function Thankyou() {
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    nav("/");
  };
  return (
    <div className="thanks">
      <h2 className="thankyou">Thanks for the message!</h2>
      <p className="res">I'll get back to you as soon as possible</p>
      <button onClick={handleSubmit} className="home">
        BACK TO PORTFOLIO
      </button>
    </div>
  );
}
