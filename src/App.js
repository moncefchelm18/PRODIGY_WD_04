import "./App.css";
import "./About.css";
import "./Education.css";
import "./Skills.css";
import "./Contact.css";

import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import About from "./Components/About";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  // const [progress, setProgress] = useState(90); // Initial progress value

  return (
    <>
      <div className="App">
        {/*header design*/}
        <Header />
        {/* section design */}
        <Home />
        <About />
        <Education />
        <Skills />
        <Contact />
        {/* footer design */}
        <Footer />
      </div>
    </>
  );
}

export default App;
