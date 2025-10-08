import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Hobby from "@/components/Hobby";
import ParticlesBackground from "@/components/ParticleBackground";
import FooterComponent from "@/components/FooterComp";

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
        <FooterComponent />
    </div>
  );
}

export default Home;