import { useState } from "react";
import { FaHome, FaUser, FaCode, FaShoppingBag, FaPhone } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
// "homepage": "https://ibimina.github.io/ibimina-portfolio",
export default function NavBar() {
  const [show, setShow] = useState("false");
const handleShow =()=>{
  if (show==="false") {
    setShow("true")
  } else {
    setShow("false")
  }
}
  return (
    <>
      <nav role="navigation" data-visible={show}>
        <h1 className="title">ib</h1>
        <ul>
          <li onClick={() => setShow("false")}>
            <HashLink to="#home">
              <FaHome /> <span className="nav-name"> home</span>
            </HashLink>
          </li>
          <li onClick={() => setShow("false")}>
            <HashLink to="#about">
              <FaUser /> <span className="nav-name">about</span>
            </HashLink>
          </li>
          <li onClick={() => setShow("false")}>
            <HashLink to="#skills">
              {" "}
              <FaCode /> <span className="nav-name"> skills</span>
            </HashLink>{" "}
          </li>
          <li onClick={() => setShow("false")}>
            <HashLink to="#work">
              <FaShoppingBag />
              <span className="nav-name"> projects</span>
            </HashLink>
          </li>
          <li onClick={() => setShow("false")}>
            <HashLink to="#contact">
              <FaPhone />
              <span className="nav-name">contact</span>
            </HashLink>
          </li>
        </ul>
      </nav>
      <button
        className="mobile-navigation"
        onClick={handleShow}
        aria-expanded={show}
      >
        <span className="sr-only">menu</span>
      </button>
    </>
  );
}
