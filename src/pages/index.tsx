import About from "../sections/About";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import Works from "../sections/Works";
import NavBar from "../components/NavBar";

import styles from '../styles/index.module.css'
export default function Portfolio() {
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
