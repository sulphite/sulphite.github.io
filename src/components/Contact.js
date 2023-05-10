import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
    className="contact paper"
    initial={{y: -500 }}
    animate={{y: 0, transition: {duration: 0.8, delay: 1, type: "spring"}}}
    drag
    dragSnapToOrigin
    dragPropagation
    dragMomentum={false}>
    get in touch:
    <ul>
      <li><a>janett.gerrard@gmail.com</a></li>
      <li><a href="https://www.linkedin.com/in/jfgerrard/">linkedin</a></li>
      <li><a href="https://github.com/sulphite">github</a></li>
    </ul>
  </motion.div>
  )
}

export default Contact;
