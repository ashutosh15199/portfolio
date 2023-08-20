
import './index.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home"
import SocalLink from "./Components/SocalLink";
import About from "./Components/About";
import Experience from "./Components/Experience"
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
     <Navbar/>
    <Home/>
    <SocalLink/>
    <About/>
    <Experience/>
    <Contact/>
    </div>
  );
}

export default App;
