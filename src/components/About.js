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
        transition={{ type: "spring", ease: "easeInOut", duration: 0.5, delay: 0.9 }}
        id="about"
        ref={ref}>
        <motion.img src={pro}
          animate={{y: [0,5,0,-5,0]}}
          transition={{duration: 4, repeat: Infinity, ease: "linear"}}
        />
        <div className="about--infos">
          <p>Hi there, I'm</p>
          <h1>Jana Gerrard !</h1>
          <p>
            a full stack developer
            blah blah blah blah blah
            making projects aesthetic and functional too
          </p>
        </div>
      </motion.div>
  )
}
