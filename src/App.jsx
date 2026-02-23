import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00334F] via-[#005887] to-[#24C6FF] text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Sponsors />
      <Footer />
      {/* Luego vendrán Services, About, Contact, etc. */}
    </div>
  );
}

export default App;
