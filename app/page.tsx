import HeroSection from "./components/HeroSection"
import About from "./components/About"
import RecentWorks from "@/app/components/RecentWorks";
import Skills from "@/app/components/Skills";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
        <Head>
            <meta name="google-site-verification" content="QB7w0bIGg_3VBosfpXwaiVc1c0hIxpQ0qRe6DC4Muj8"/>
            {/* Other meta tags */}
        </Head>
        <HeroSection/>
        <About/>
        <RecentWorks/>
      <Skills/>
    </div>
  );
}
