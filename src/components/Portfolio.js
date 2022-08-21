import About from "../sections/About";
import Contact from "../sections/Contact";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import Works from "../sections/Works";
import NavBar from "./NavBar"

export default function Portfolio() {
  return (

   <>
   <NavBar/>
   <Home/>
   <About/>
   <Skills/>
   <Works/>
   <Contact/>
   </>
  )
}
