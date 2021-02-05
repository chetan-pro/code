import "./App.css";
import Navbar from "./components/Navbar/Nav";
import Section1 from "./components/Section1/Section";
import Section2 from "./components/Section2/Section";
import Section3 from "./components/Section2/Section2";
import Slider from "./components/slider1/Slider";
import Slider2 from "./components/slider1/Slider2";
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Slider />
      <Section2 />
      <Section3 />
      <Slider2 />
      <Footer />
    </div>
  );
}

export default App;
