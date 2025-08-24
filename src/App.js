import Navbar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import About from "./Components/About"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        {/* More sections (About, Projects, etc.) will come later */}
        <About/>
        <Projects/>
        <Contact/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
