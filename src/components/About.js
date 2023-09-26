import selfPortrait from "../assets/self.webp"
import { motion } from "framer-motion"

const About = () => {
  const widerThan500 = window.innerWidth > 500

  return (
      <motion.div
        className="about"
        initial={{opacity: 0, scale: 2}}
        animate={{opacity: 1, scale: 1}}
        transition={{ type: "spring", ease: "easeInOut", duration: 0.5, delay: 0.9 }}
        id="about"
        >
        {widerThan500 ? <motion.img src={selfPortrait}
          animate={{y: [0,5,0,-5,0]}}
          transition={{duration: 4, repeat: Infinity, ease: "linear"}}
          alt="a self portrait."
        /> : <motion.img src={pro} alt="a self portrait."
      />}
        <div className="about--infos">
          <p>Hi there, I'm</p>
          <h1>Jana Gerrard!</h1>
          <p>
            a full stack developer
            bringing an artist's eye to crafting
            elegant and efficient web solutions.
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
