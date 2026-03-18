import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Fondo global */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#00334F] via-[#005887] to-[#24C6FF]" />

      {/* Contenido */}
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;