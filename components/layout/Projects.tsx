import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <div className="w-full mt-5">
      <span className="text-4xl font-semibold">My projects</span>
      <ul className="mt-5 flex flex-col flex-wrap gap-6 items-center">
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
    </div>
  );
}
