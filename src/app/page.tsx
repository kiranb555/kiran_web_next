import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer/index";
import Hobby from "@/components/Hobby";
import ParticlesBackground from "@/components/ParticleBackground";

const Home = () => {
  return (
    <div className="relative">
        <ParticlesBackground />
        <Banner />
        <About /> 
        <Experience />
        <Awards />
        <Contact />
        <Hobby />
        <Footer />
    </div>
  );
}

export default Home;