import Banner from "@/components/Banner";
import Experience from "@/components/Experience/Experience";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Hobby from "@/components/Hobby";
import ParticlesBackground from "@/components/ParticlesBackground";

const Home = () => {
  return (
    <div className="relative">
      <ParticlesBackground />
      <section className="min-h-[80vh] md:min-h-screen py-12 md:py-0">
        <Banner />
      </section>
      
      <section className="min-h-[80vh] md:min-h-screen py-12 md:py-0">
        <About />
      </section>
      
      <section className="min-h-[80vh] md:min-h-screen py-12 md:py-0">
        <Experience />
      </section>
      
      <section className="min-h-[80vh] md:min-h-screen py-12 md:py-0">
        <Awards />
      </section>
      
      <section className="py-12 md:py-20">
        <Contact />
      </section>
      <Hobby />
      <Footer />
    </div>
  );
}

export default Home;