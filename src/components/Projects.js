import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"


export default function Projects() {
  const donut_ref = useRef(null)
  const donutInView = useInView(donut_ref, {margin: "-200px"})
  const aoy_ref = useRef(null)
  const aoyInView = useInView(aoy_ref, {margin: "-200px"})

  const donut = {
    init: {x: 900},
    anim: {rotate: "10deg", x: 0, transition: {type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {x: -100, rotate: "15deg", transition: {ease: "easeOut", duration: 0.2}}
  }

  const aoy = {
    //init: {x: 500, y: -800},
    anim: {rotate: "-10deg", x: 30, y: 0, transition: {delay: 0.3, type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {x: 120, y: 20, rotate: "-15deg", transition: {ease: "easeOut", duration: 0.2}}
  }

  const gipf = {
    //init: {x: -1000, y: 800},
    anim: {rotate: "1deg", x: -30, y: 70, transition: {type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {x: -100, y: 70, rotate: "-3deg", transition: {ease: "easeOut", duration: 0.2}}
  }

  useEffect(() => {
    const nextItem = document.getElementById("aoy")
    donutInView ? nextItem.classList.add("fixed") : nextItem.classList.remove("fixed")
  }, [donutInView])

  useEffect(() => {
    const nextItem = document.getElementById("gipf")
    aoyInView ? nextItem.classList.add("fixed") : nextItem.classList.remove("fixed")
  }, [aoyInView])


  return (
    <div className='container' id="projects">
      <motion.div
        ref={donut_ref}
        variants={donut}
        className='project-container fixed'
        id="donut"
        initial="init"
        animate="anim"
        whileHover="hover">
          donut project
      </motion.div>

      <motion.div
        ref={aoy_ref}
        variants={aoy}
        className='project-container fixed'
        id="aoy"
        initial="init"
        animate="anim"
        whileHover="hover">aoy project
      </motion.div>

      <motion.div
        variants={gipf}
        className='project-container fixed'
        id="gipf"
        initial="init"
        animate="anim"
        whileHover="hover">gipf project
      </motion.div>
    </div>
  )
}
