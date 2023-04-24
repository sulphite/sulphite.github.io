import pro from "../assets/narcissa.png"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log("about in view:", isInView)
    const nextItem = document.getElementById("donut")
    // when gipf element out of view, getnew element and apply
    isInView ? nextItem.classList.add("fixed") : nextItem.classList.remove("fixed")

  }, [isInView])

  return (
      <motion.div
        className="about"
        initial={{opacity: 0, scale: 2}}
        animate={{opacity: 1, scale: 1}}
        transition={{ type: "spring", ease: "easeInOut", duration: 0.5, delay: 0.7 }}
        id="about"
        ref={ref}>
        <img src={pro} />
        <div className="about--infos">
          <h1>ABOUT DIV HERE</h1>
          <p>
            some example text i'm a full stack developer
            blah blah blah blah blah
          </p>
        </div>
      </motion.div>
  )
}
