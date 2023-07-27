import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import OtherProjects from "./components/OtherProjects";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <OtherProjects />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
