import About from "../sections/About";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import Works from "../sections/Works";
import NavBar from "../components/NavBar";

import styles from '../styles/index.module.css'
export default function Portfolio() {
  // write a short description about inkspire
  //Inskpire is a platform that allows writers to
  //share their work with the world and get feedback
  //from other writers and readers.
  //Inskspire is a platform like hashnode or medium
  //Inskspire is a platform that allows writers to
  //share their work with the world and get feedback
  //from other writers and readers.
  
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </>
  );
}
