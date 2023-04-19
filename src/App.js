import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"


function App() {
  const tidyUp = () => {

  }

  return (
    <div className="App">
      <Navbar />
      <About />
      <div className='project-container fixed'>1</div>
      <div className='project-container fixed'>2</div>
      <div className='project-container fixed'>3</div>
      {/* <Projects /> */}
      <button onClick={tidyUp}>tidy up</button>
    </div>
  );
}

export default App;
