import { Header } from "../layout/Header";
import { Introduction } from "../layout/Introduction";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Projects } from "./Projects";
import { Footer } from "./Footer";
import { TechStack } from "./TechStack";
export function AppLayout() {
  return (
    <div className="px-5 py-2 lg:px-10 lg:py-5">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <filter id="wobble">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="2"
            seed="4"
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
        </filter>
      </svg>

      <Header/>
      <Introduction />
      <TechStack/>
      <Projects/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}
