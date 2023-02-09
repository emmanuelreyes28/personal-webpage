import Intro from "./Intro";
import Greet from "./Greet";
import Break from "./Break";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <div className="App bg-gradient-to-b from-cyan-500 to-blue-500">
      <Greet />
      <Intro />
      <Break />
      <Skills />
      <Break />
      <Contact />
    </div>
  );
}

export default App;
