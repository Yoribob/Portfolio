import { useState } from "react";
interface ProjectCardProps {
  name: string;
  description: string;
  imagesSrcs: string[];
  techStacks: string[];
  githubLink: string;
  deployLink?: string;
}

function generateBorder() {
  let arr = [];
  const min1 = 1,
    min2 = 6;
  const max1 = 4,
    max2 = 12;
  for (let i = 0; i < 8; i++) {
    if (Math.random() < 0.5) {
      arr[i] = Math.random() * (max1 - min1) + min1;
    } else {
      arr[i] = Math.random() * (max2 - min2) + min2;
    }
  }
  let result = `${arr[0]}px ${arr[1]}px ${arr[2]}px ${arr[3]}px / ${arr[4]}px ${arr[5]}px ${arr[6]}px ${arr[7]}px`;
  return result;
}

export function ProjectCard({
  name,
  description,
  imagesSrcs,
  techStacks,
  githubLink,
  deployLink,
}: ProjectCardProps) {
  const [radius] = useState(generateBorder);
  const [tilt] = useState(() => Math.random() * 4 - 2);
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
