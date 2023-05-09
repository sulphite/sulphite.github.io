import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import projectdata from "../data"
import ProjectInner from "./ProjectInner"

export default function Projects() {
  // const donut_ref = useRef(null)
  // const donutInView = useInView(donut_ref, {margin: "-200px"})
  // const aoy_ref = useRef(null)
  // const aoyInView = useInView(aoy_ref, {margin: "-200px"})

  const isMobile = window.innerWidth < 600;
  const generatePosition = (axis, plus = true) => {
    let width = (axis === "x") ? window.innerWidth : window.innerHeight
    let value = Math.floor(Math.random() * width/3)
    value = plus ? value : -value
    console.log(value)
    return value
  }

  // const project = {
  //   init: {x: generatePosition("x"), y: generatePosition("y"), opacity: 0},
  //   anim: {opacity: 1, transition: {delay: 0.5, type: "spring", duration: 0.8, ease: "easeOut"}},
  //   hover: {scale: 1.05, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}}
  // }

  const donut = {
    init: {opacity: 0},
    anim: {rotate: "5deg", x: generatePosition("x", true), y: generatePosition("y", true), opacity: 1, transition: {delay: 0.5, type: "spring", duration: 0.8, ease: "easeOut"}},
    hover: {scale: 1.1, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}},
  }

  const aoy = {
    init: {opacity: 0},
    anim: {rotate: "-5deg", x: generatePosition("x", false), y: generatePosition("y", true), opacity: 1, transition: {delay: 0.3, type: "spring", duration: 0.8, ease: "easeOut"}},
    hover: {scale: 1.05, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}},
  }

  const gipf = {
    init: {opacity: 0},
    anim: {rotate: "1deg", x: generatePosition("x", false), y: generatePosition("y", false), opacity: 1, transition: {delay: 0, type: "spring", duration: 0.6, ease: "easeOut"}},
    hover: {scale: 1.1, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}},
  }

  const close = () => {
    document.querySelector(".instructions").classList.add("display-none")
  }

  // useEffect(() => {
  //   const nextItem = document.getElementById("aoy")
  //   donutInView ? nextItem.classList.add("fixed") : nextItem.classList.remove("fixed")
  // }, [donutInView])

  // useEffect(() => {
  //   const nextItem = document.getElementById("gipf")
  //   aoyInView ? nextItem.classList.add("fixed") : nextItem.classList.remove("fixed")
  // }, [aoyInView])


  return (
    <div className='container' id="projects">
      {!isMobile && <motion.div
        className="instructions"
        initial={{opacity: 0}}
        animate={{opacity: 0.8, transition: {delay: 1}}}
        drag>
        Click and drag to look around!
        <span className="close" onClick={close}>✕</span>
      </motion.div>}
      <motion.div
        drag
        dragMomentum={false}
        variants={donut}
        className='project-container fixed'
        id="donut"
        initial="init"
        animate="anim"
        whileHover="hover"
        whileDrag={{zIndex: 40 }}>
          <ProjectInner data={projectdata.donut} />
      </motion.div>

      <motion.div
        drag
        dragMomentum={false}
        variants={aoy}
        className='project-container paper fixed'
        id="aoy"
        initial="init"
        animate="anim"
        whileHover="hover"
        whileDrag={{zIndex: 40 }}>
          <ProjectInner data={projectdata.aoy} />
      </motion.div>

      <motion.div
        drag
        dragMomentum={false}
        variants={gipf}
        className='project-container fixed'
        id="gipf"
        initial="init"
        animate="anim"
        whileHover="hover"
        whileDrag={{zIndex: 40 }}>
          <ProjectInner data={projectdata.hack} />
      </motion.div>
    </div>
  )
}
