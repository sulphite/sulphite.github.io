import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  return (
    <motion.div
    className="contact paper"
    initial={{y: -500 }}
    animate={{y: 0, transition: {duration: 0.8, delay: 1, type: "spring"}}}
    drag={!props.mobile}
    dragSnapToOrigin
    dragPropagation
    dragMomentum={false}>
    get in touch:
    <ul>
      {//eslint-disable-next-line
      }<li><a href=""><FontAwesomeIcon icon={faEnvelope} /> janett.gerrard@gmail.com</a></li>
      <li><a href="https://www.linkedin.com/in/jfgerrard/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> linkedin</a></li>
      <li><a href="https://github.com/sulphite" target="_blank"><FontAwesomeIcon icon={faGithub} /> github</a></li>
    </ul>
  </motion.div>
  )
}

export default Contact;
