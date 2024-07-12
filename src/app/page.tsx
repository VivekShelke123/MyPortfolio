import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (

    <div className="bg-black-100">
      <div className="sticky top-0 z-10">
        <Navbar/>
      </div>
      <div>
        <Hero />
      </div>
    </div>

  );
}
