import Hero from "./Hero";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="w-full">
      <section id="hero">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
