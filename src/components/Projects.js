import { motion, useScroll, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


export default function Projects() {
  const topItem = useRef(null)
  const isInView = useInView(topItem)

  const donut = {
    init: {x: 1000},
    anim: {rotate: "10deg", x: 0, transition: {type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {x: -100, rotate: "15deg", transition: {ease: "easeOut", duration: 0.2}}
  }

  const aoy = {
    init: {x: 400, y: -800},
    anim: {rotate: "-10deg", x: 30, y: 0, transition: {type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {x: 120, y: 20, rotate: "-15deg", transition: {ease: "easeOut", duration: 0.2}}
  }

  const gipf = {
    init: {x: -1000, y: 800},
    anim: {rotate: "1deg", x: -30, y: 70, transition: {type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {x: -100, y: 70, rotate: "-3deg", transition: {ease: "easeOut", duration: 0.2}}
  }

  useEffect(() => {
    console.log("in view:", isInView)

    // const nextItem = document.getElementById("gipf")
    // isInView ? nextItem.classList.add("fixed") : nextItem.classList.remove("fixed")

  }, [isInView])



  return (
    <div className='container' id="projects">
      <motion.div
        variants={donut}
        className='project-container fixed'
        id="donut"
        initial="init"
        animate="anim"
        whileHover="hover">
          donut project
      </motion.div>

      <motion.div
        variants={aoy}
        className='project-container fixed'
        id="aoy"
        initial="init"
        animate="anim"
        whileHover="hover">aoy project</motion.div>

      <motion.div
        ref={topItem}
        variants={gipf}
        className='project-container fixed'
        id="gipf"
        initial="init"
        animate="anim"
        whileHover="hover">gipf project</motion.div>
    </div>
  )
}
