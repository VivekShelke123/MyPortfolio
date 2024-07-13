import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";


export default function Home() {
  return (

    <div className="bg-black-100">
      <div className="sticky top-0 z-50">
        <Navbar/>
      </div>
      <div id="Home" className="">
        <Hero />
      </div>
      <div id="About" className="mb-6">
        <About/>
      </div>
      <div id="Project" className="mb-6">
        <Project/>
      </div>
      <div id="Contact" >
        <Footer/>
      </div>

    </div>

  );
}
