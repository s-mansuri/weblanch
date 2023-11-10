import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/services";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Founders from "./components/home/founders/founders";
import Details from "./components/home/details/details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Details />
      <hr className="section-separate-line" />
      <Services />
      <hr className="section-separate-line" />
      <Founders />
      <hr className="section-separate-line" />
      <About />
      <hr className="section-separate-line" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
