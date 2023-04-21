import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import { useInView, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import pro from "./assets/narcissa.png"



function App() {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null)
  const isInView = useInView(ref)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
    if(latest > 0.33) {
      document.getElementById("3").classList.remove("fixed")
    }
    if(latest > 0.58) {
      document.getElementById("2").classList.remove("fixed")
    }
    // if(latest > 0.75) {
    //   document.getElementById("1").classList.remove("fixed")
    // }
  })

  // useEffect(() => {
  //   console.log(ref.current.nextSibling)

  // },[ref])

  // useEffect(() => {
  //   console.log(isInView)
  //   const nextItem = ref.current.nextSibling;
  //   console.log(nextItem)
  //   if(isInView && nextItem !== null) {
  //     nextItem.classList.add("fixed")
  //   } else if(nextItem !== null)  {
  //     nextItem.classList.remove("fixed")
  //     //ref.current = nextItem
  //   }
  // },[isInView])


  const tidyUp = () => {

  }

  return (
    <div className="App">
      <Navbar />
      <div className="about" id="about" ref={ref}>
        <img src={pro} />
        <div className="about--infos">
          <h1>ABOUT DIV HERE</h1>
          <p>
            some example text i'm a full stack developer
            blah blah blah blah blah
          </p>
        </div>
      </div>
      <div className='project-container fixed' id="1">1</div>
      <div className='project-container fixed' id="2">2</div>
      <div className='project-container fixed' id="3">3</div>
      {/* <Projects /> */}
      <button onClick={tidyUp}>tidy up</button>
    </div>
  );
}

export default App;
