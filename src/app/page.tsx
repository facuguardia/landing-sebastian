import Hero from "@/sections/Hero";
import Portfolio from "@/sections/Portfolio";
import Services from "@/sections/Services";
import Slider from "@/sections/Slider";
import Testimonials from "@/sections/Testimonials";


export default function Home() {
  return (
    <main >

      <Hero />
      <Slider />
      <Services />
      <Portfolio />
      <Testimonials />

    </main>
  );
}
