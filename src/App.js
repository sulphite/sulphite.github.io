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
      <Projects />
      <button onClick={tidyUp}>tidy up</button>
    </div>
  );
}

export default App;
