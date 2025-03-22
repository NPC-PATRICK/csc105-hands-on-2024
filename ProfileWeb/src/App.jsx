import Home from "./pages/home";
import Gallery from "./pages/gallery";
import AboutMe from "./pages/aboutme";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <AboutMe/>
      <Gallery/>
    </div>
  );
}

export default App;
