import { useEffect, useState } from "react";
import { generateBorder } from "../../lib/utils/generateBorder";
interface ProjectCardProps {
  name: string;
  description: string;
  imagesSrcs: string[];
  techStacks: string[];
  githubLink: string;
  deployLink?: string;
}



export function ProjectCard({
  name,
  description,
  imagesSrcs,
  techStacks,
  githubLink,
  deployLink,
}: ProjectCardProps) {
  const [radius, setRadius] = useState(generateBorder);
  const [tilt, setTilt] = useState(() => Math.random() * 2 - 2);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRadius(generateBorder());
      setTilt(Math.random() * 2 - 2);
    }, (Math.random() * (3000 - 1000) + 1000));

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full bg-[#fffdf5] p-4" style={{rotate: `${tilt}deg`}}>
      <div
        aria-hidden="true"
        className="absolute inset-0 border-[2.5px] border-slate-800 [filter:url(#wobble)]"
        style={{ borderRadius: radius }}
      />

      <div className="relative">
        {imagesSrcs[0] && (
          <img
            src={imagesSrcs[0]}
            alt={`${name} screenshot`}
            className="mb-3 h-30 w-full rounded object-cover"
          />
        )}

        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="my-2">{description}</p>

        <ul className="flex flex-wrap gap-2 text-sm">
          {techStacks.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-slate-800 px-3 py-0.5"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-row gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            GitHub
          </a>
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              Live site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
