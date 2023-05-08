import { useState } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const { scrollY } = useScroll();
  const [display, setDisplay] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest > 200) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  })

  return (
    <AnimatePresence>
      {display && <motion.nav
        layout
        className="nav"
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y:0, transition: {duration: 0.2}}}
        exit={{opacity: 0}}
        >
        <h3>jfgerrard</h3>
        <ul className="nav--links">
          <li><a href="#about">About</a></li>
        </ul>
      </motion.nav>}
    </AnimatePresence>
  )
}
