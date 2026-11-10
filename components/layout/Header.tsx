import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

function NavButton({ children, href }: { children: string, href:string }) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <RoughNotation
      type="circle"
      show={hovered}
      padding={10}
      animationDuration={300}
      color="#ffc400"
    >
      <a
        className="text-lg font-medium italic lg:text-2xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onClick={(event) => {

          event.preventDefault();
          window.setTimeout(() => {
            if (window.location.hash === `#${href}`) {
              document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
            } else {
              window.location.hash = `#${href}`;
            }
          }, 700);
        }}
        href={`#${href}`}
      >
        {children}
      </a>
    </RoughNotation>
  );
}

export function Header() {
  return (
    <header className="flex h-14 w-full flex-row items-center gap-4 lg:h-16 lg:gap-10">
      <span className="mr-auto text-xl font-semibold lg:text-4xl">Stepan</span>
      <NavButton href="about">About</NavButton>
      <NavButton href="projects">Projects</NavButton>
      <NavButton href="contact">Contact</NavButton>
    </header>
  );
}