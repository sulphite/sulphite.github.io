import pro from "../assets/selfy2.png"
import { motion } from "framer-motion"

const About = () => {

  return (
      <motion.div
        className="about"
        initial={{opacity: 0, scale: 2}}
        animate={{opacity: 1, scale: 1}}
        transition={{ type: "spring", ease: "easeInOut", duration: 0.5, delay: 0.9 }}
        id="about"
        >
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
          <motion.a
            href="#projects"
            className="btn"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.9}}
            >To projects</motion.a>
        </div>
      </motion.div>
  )
}

export default About
