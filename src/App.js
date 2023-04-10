import logo from './logo.svg';
import { motion, useScroll } from "framer-motion"
import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <div className='container'>
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
          animate={{rotate: "1deg", x: 0, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.2, x: { duration: 0.2} }}
          whileHover={{x: 0, y: 0,rotate: "5deg"}}>gipf project</motion.div>
      </div>
    </div>
  );
}

export default App;
