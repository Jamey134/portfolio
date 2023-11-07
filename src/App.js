import Home from "./components/Home";
import NaviBar from "./components/NaviBar";
import Socials from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skillset from "./components/Skillset"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <NaviBar />
      <Home />
      <Socials />
      <About />
      <Portfolio />
      <Skillset />
      <Contact />
    </div>
  );
}

export default App;
