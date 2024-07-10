import HeroSection from "./components/HeroSection"
import About from "./components/About"
import RecentWorks from "@/app/components/RecentWorks";
export default function Home() {
  return (
    <div>
      <HeroSection/>
        <About/>
        <RecentWorks/>
    </div>
  );
}
