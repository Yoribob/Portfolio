import { ProjectCard } from "./ProjectCard";
import { RoughNotation } from "react-rough-notation";

export function Projects() {
  return (
    <section className="mt-14 w-full lg:mt-5" id="projects">
      <RoughNotation
        type="underline"
        show
        animationDelay={1600}
        animationDuration={800}
        color="#e05a5a"
        padding={8}
      >
        <span className="text-5xl font-semibold lg:text-4xl">My projects</span>
      </RoughNotation>

      <ul className="mt-5 flex flex-col flex-wrap items-center gap-6">
        <li className="w-[calc(90%-0.75rem)]">
          <ProjectCard
            name={"Online 3D Chess"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra"
            imagesSrcs={["../../src/assets/example.jpg"]}
            techStacks={["hi", "meow1", "meow2"]}
            githubLink={"Hi"}
            deployLink={"Bye"}
          />
        </li>
        <li className="w-[calc(90%-0.75rem)]">
          <ProjectCard
            name={"Online 3D Chess"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra"
            imagesSrcs={["../../src/assets/example.jpg"]}
            techStacks={["hi", "meow1", "meow2"]}
            githubLink={"Hi"}
            deployLink={"Bye"}
          />
        </li>
        <li className="w-[calc(90%-0.75rem)]">
          <ProjectCard
            name={"Online 3D Chess"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra"
            imagesSrcs={["../../src/assets/example.jpg"]}
            techStacks={["hi", "meow1", "meow2"]}
            githubLink={"Hi"}
            deployLink={"Bye"}
          />
        </li>
      </ul>
    </section>
  );
}
