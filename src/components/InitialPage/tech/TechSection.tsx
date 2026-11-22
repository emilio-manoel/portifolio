import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiDocker,
  SiTailwindcss,
} from "react-icons/si";
import type { IconType } from "react-icons";
import technologiesData from "./technologies.json";

const ICON_MAP: Record<string, IconType> = {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiDocker,
  SiTailwindcss,
};

interface Technology {
  name: string;
  icon: string;
  image?: string;
}

export default function TechSection() {
  const technologies = technologiesData as Technology[];

  return (
    <section className="w-full bg-secondary-bg py-8 md:py-12 border-y border-secondary-border">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light font-spartan text-title text-center md:text-left md:max-w-md leading-snug">
          Conhecimento nestas tecnologias até o momento
        </h2>

        <ul className="flex flex-row flex-wrap gap-3 md:gap-4 justify-center items-center">
          {technologies.map((tech) => {
            const Icon = ICON_MAP[tech.icon];
            return (
              <li
                key={tech.name}
                title={tech.name}
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 aspect-square border border-secondary-border rounded-full bg-primary-bg/40 group transition-all duration-200 hover:border-primary hover:scale-105"
              >
                {tech.image ? (
                  <img
                    className="h-7 sm:h-8 object-contain"
                    src={tech.image}
                    alt={`Logo ${tech.name}`}
                  />
                ) : Icon ? (
                  <Icon className="size-6 sm:size-7 text-primary transition-transform group-hover:scale-110" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
