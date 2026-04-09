import HeroSlider from "./HeroSlider";
import About from "./About";
import Service from "./Service";
import Trading from "./Trading";
import Placement from "./Placement";
import Programs from "./Programs";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Contact from "./Contact";

function Home() {
  return (
    <div>

      <section id="home">
        <HeroSlider />
      </section>

      <section id="about" className="py-5">
        <About />
      </section>

      <section id="service" className="py-5">
        <Service />
      </section>

      <section id="trading" className="py-5">
        <Trading />
      </section>

      <section id="placement" className="py-5">
        <Placement />
      </section>

      <section id="program" className="py-5">
        <Programs />
      </section>

      <section id="blog" className="py-5">
        <Blog />
      </section>

      <section id="gallery" className="py-5">
        <Gallery />
      </section>

      <section id="contact" className="py-5">
        <Contact />
      </section>

    </div>
  );
}

export default Home;