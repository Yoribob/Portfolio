import { FaHtml5, FaJs, FaNodeJs } from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { RoughNotation } from "react-rough-notation";
import {
  SiCss,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiExpress,
  SiVite,
} from "react-icons/si";

const stack = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", Icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", Icon: SiCss, color: "#1572b6" },
      { name: "JavaScript", Icon: FaJs, color: "#f7df1e" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
      { name: "React", Icon: SiReact, color: "#61dafb" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    title: "Backend (learning)",
    items: [
      { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", Icon: SiGit, color: "#f05032" },
      { name: "Vite", Icon: SiVite, color: "#646cff" },
    ],
  },
];
export function TechStack() {
  return (
    <div className="mt-7">
      <RoughNotation
        type="underline"
        show
        color="#e05a5a"
        animationDuration={800}
        animationDelay={800}
        padding={0}
      >
        <span className="text-2xl font-bold">Tech stack</span>
      </RoughNotation>

      {stack.map(({ title, items }) => (
        <div key={title} className="mt-3">
          <h3 className="text-md font-semibold text-slate-700">{title}</h3>
          <ul className="mt-1 flex flex-wrap gap-3">
            {items.map(({ name, Icon, color }) => (
              <li key={name}>
                <Icon size={26} color={color} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
