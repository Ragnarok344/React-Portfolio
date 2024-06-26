
import About from "../About";
import Skills from "../Skills";
import ZeroSection from "../ZeroSection";
import Portfolio from "../Portfolio";

// This is the main component of the home page
export default function Home() {
  return (
    <>
      <ZeroSection />
      <Skills />
      <About />
      <Portfolio />
     
    </>
  );
}