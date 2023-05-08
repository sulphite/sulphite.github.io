import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import projectdata from "../data"
import ProjectInner from "./ProjectInner"

export default function Projects() {
  const donut_ref = useRef(null)
  const donutInView = useInView(donut_ref, {margin: "-200px"})
  const aoy_ref = useRef(null)
  const aoyInView = useInView(aoy_ref, {margin: "-200px"})

  const isMobile = window.innerWidth < 600;

  const project = {
    init: {opacity: 0},
    anim: {x: 0, opacity: 1, transition: {delay: 0.5, type: "spring", duration: 0.8, ease: "easeOut"}},
    hover: {scale: 1.05, transition: {ease: "easeOut", duration: 0.2}}
  }

  const donut = {
    init: {x: 1200, opacity: 0, rotate: "50deg"},
    anim: {rotate: "10deg", x: 0, opacity: 1, transition: {delay: 0.5, type: "spring", duration: 0.8, ease: "easeOut"}},
    hover: {scale: 1.1, transition: {ease: "easeOut", duration: 0.2}},
    nohover: {}
  }

  const aoy = {
    init: {x: -1500, y: 0, opacity: 0.5},
    anim: {rotate: "-10deg", x: 90, y: 80, opacity: 1, transition: {delay: 0.3, type: "spring", duration: 0.8, ease: "easeOut"}},
    hover: {scale: 1.05, transition: {ease: "easeOut", duration: 0.2}}
  }

  const gipf = {
    init: {opacity: 0},
    anim: {rotate: "1deg", x: -80, y: 100, opacity: 1, transition: {delay: 0, type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {scale: 1.1, transition: {ease: "easeOut", duration: 0.2}},
    nohover: {}
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
        drag
        ref={donut_ref}
        variants={project}
        className='project-container fixed'
        id="donut"
        initial="init"
        animate="anim"
        whileHover="hover">
          <ProjectInner data={projectdata.donut} />
      </motion.div>

      <motion.div
        drag
        ref={aoy_ref}
        variants={project}
        className='project-container paper fixed'
        id="aoy"
        initial="init"
        animate="anim"
        whileHover="hover">
          <ProjectInner data={projectdata.aoy} />
      </motion.div>

      <motion.div
        drag
        variants={project}
        className='project-container fixed'
        id="gipf"
        initial="init"
        animate="anim"
        whileHover="hover">
          <ProjectInner data={projectdata.hack} />
      </motion.div>
    </div>
  )
}
