import logo from './logo.svg';
import { motion, useScroll } from "framer-motion"
import './App.css';
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* about section */}
      <div className='container'>
        <motion.div className='project-container fixed' id="donut"
          animate={{rotate: "10deg", x: 0}}
          transition={{ ease: "easeOut", duration: 0.2, x: { duration: 0.1} }}
          whileHover={{scale: 1.1, x: 100}} />
        <div className='project-container fixed' id="aoy">project</div>
        <div className='project-container' id="gipf">project</div>
      </div>
    </div>
  );
}

export default App;
