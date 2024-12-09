import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Skills from "@/components/Skills";


const page = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Skills/>
      <Project/>
    </div>
  )
}

export default page