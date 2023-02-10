import Intro from "./Intro";
import Greet from "./Greet";
import Break from "./Break";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App bg-gradient-to-b from-sky-blue to-dark-blue">
      <Greet />
      <Intro />
      <Break />
      <Skills />
      <Break />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
