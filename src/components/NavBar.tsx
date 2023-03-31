import { useState } from "react";
import { FaHome, FaUser, FaCode, FaShoppingBag, FaPhone } from "react-icons/fa";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (show === false) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  return (
    <>
      <nav role="navigation" data-visible={show}>
        <h1 className="title">ib</h1>
        <ul>
          <li onClick={() => setShow(false)}>
            <a href="#home"> <FaHome /> <span className="nav-name"> home</span></a>
          </li>
          <li onClick={() => setShow(false)}>
            <a href="#about">
              <FaUser /> <span className="nav-name">about</span>
            </a>
          </li>
          <li onClick={() => setShow(false)}>
            <a href="#skills">
              {" "}
              <FaCode /> <span className="nav-name"> skills</span>
            </a>{" "}
          </li>
          <li onClick={() => setShow(false)}>
            <a href="#work">
              <FaShoppingBag />
              <span className="nav-name"> projects</span>
            </a>
          </li>
          <li onClick={() => setShow(false)}>
            <a href="#contact">
              <FaPhone />
              <span className="nav-name">contact</span>
            </a>
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
