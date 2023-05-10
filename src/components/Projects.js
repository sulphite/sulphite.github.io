import { motion } from "framer-motion"
import projectdata from "../data"
import ProjectInner from "./ProjectInner"
import Contact from "./Contact";

export default function Projects() {
  // const donut_ref = useRef(null)
  // const donutInView = useInView(donut_ref, {margin: "-200px"})
  // const aoy_ref = useRef(null)
  // const aoyInView = useInView(aoy_ref, {margin: "-200px"})

  const isMobile = window.innerWidth < 600;

  const mobile = {
    init: {opacity: 0},
    anim: {opacity: 1, transition: {delay: 0.5, type: "spring", duration: 0.8, ease: "easeOut"}},
    hover: {scale: 1.1, zIndex: 40, transition: {ease: "easeOut", duration: 0.2}},
  }

  const close = () => {
    document.querySelector(".instructions").classList.add("display-none")
  }

  const setSelected = (e) => {
    let selected = document.querySelectorAll(".project-container");
    selected.forEach(item => item.style.zIndex = 0)
    e.currentTarget.style.zIndex = 46
  }

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

      {Object.values(projectdata).map(item => {
        return (
        <motion.div
          key={item.id}
          onMouseDown={setSelected}
          drag={!isMobile}
          dragMomentum={false}
          variants={isMobile ? mobile : item.animation}
          className={item.class}
          initial="init"
          animate="anim"
          whileHover="hover"
          whileDrag={{zIndex: 40 }}>
            <ProjectInner data={item} />
        </motion.div>)
      })}

      <Contact mobile={isMobile} />
    </div>
  )
}
