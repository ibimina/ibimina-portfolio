import React from "react";
import { useNavigate } from "react-router-dom";
export default function Thankyou() {
    const nav = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
 
nav("/")

  };
  return (
    <div>
      <h1>thanks</h1>

      <button onClick={handleSubmit}>home</button>
    </div>
  );
}
