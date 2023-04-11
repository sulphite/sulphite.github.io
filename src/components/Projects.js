import { motion, useScroll } from "framer-motion"

export default function Projects() {
  return (
    <div className='container' id="projects">
    <motion.div
      className='project-container fixed'
      id="donut"
      animate={{rotate: "10deg", x: 0}}
      transition={{ ease: "easeOut", duration: 0.2, x: { duration: 0.2} }}
      whileHover={{x: -100, rotate: "15deg"}}>donut project</motion.div>
    <motion.div
      className='project-container fixed'
      id="aoy"
      animate={{rotate: "-10deg", x: 30, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2, x: { duration: 0.2} }}
      whileHover={{x: 120, y: 20,rotate: "-15deg"}}>aoy project</motion.div>
    <motion.div
      className='project-container fixed'
      id="gipf"
      animate={{rotate: "1deg", x: -30, y: 70 }}
      transition={{ ease: "easeOut", duration: 0.2, x: { duration: 0.2} }}
      whileHover={{x: -100, y: 70,rotate: "3deg"}}>gipf project</motion.div>
  </div>
  )
}
