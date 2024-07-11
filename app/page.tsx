import HeroSection from "./components/HeroSection"
import About from "./components/About"
import RecentWorks from "@/app/components/RecentWorks";
import Skills from "@/app/components/Skills";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <RecentWorks/>
      <Skills/>
    </div>
  );
}
