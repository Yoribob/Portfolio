import { useState } from "react";
import { RoughNotation } from "react-rough-notation";

function NavButton({ children }: { children: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <RoughNotation
      type="circle"
      show={hovered}
      padding={10}
      animationDuration={300}
      color="#eec555"
    >
      <button
        className="text-sm font-medium italic lg:text-2xl"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        {children}
      </button>
    </RoughNotation>
  );
}

export function Header() {
  return (
    <header className="flex h-12 w-full flex-row items-center gap-5 lg:h-16 lg:gap-10">
      <span className="mr-auto text-xl font-semibold lg:text-4xl">Stepan</span>
      <NavButton>About</NavButton>
      <NavButton>Projects</NavButton>
      <NavButton>Contact</NavButton>
    </header>
  );
}