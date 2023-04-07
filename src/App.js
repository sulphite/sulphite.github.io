import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* about section */}
      <div className='container'>
        <div className='project-container under fixed' id="donut">donut project</div>
        <div className='project-container under fixed' id="aoy">project</div>
        <div className='project-container' id="gipf">project</div>
      </div>
    </div>
  );
}

export default App;
