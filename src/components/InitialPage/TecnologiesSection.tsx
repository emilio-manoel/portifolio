import { CodeXml, Palette, FileCode2, GitBranch } from "lucide-react";

interface Technology {
  name: string;
  icon: typeof CodeXml;
  image?: string;
}

export default function TecnologiesSection() {
  // As tecnologias usam ícones Lucide como padrão e aceitam imagem opcionalmente.
  // Você pode passar a imagem em image: "/sua-imagem.svg" quando quiser!
  const technologies: Technology[] = [
    {
      name: "HTML5",
      icon: CodeXml,
      image: "",
    },
    {
      name: "CSS3",
      icon: Palette,
      image: "",
    },
    {
      name: "JavaScript",
      icon: FileCode2,
      image: "",
    },
    {
      name: "Git",
      icon: GitBranch,
      image: "",
    },
  ];

  return (
    <section className="flex flex-col justify-start items-center gap-5 pt-[6.25rem] px-4 pb-8 bg-secondary-bg -mt-[5.5rem] md:pt-[6.25rem] md:px-24 md:pb-8 md:-mt-24 xl:flex-row xl:justify-between xl:items-center xl:pt-40 xl:px-24 2xl:px-60 xl:pb-16 w-full">
      <h2 className="text-[2rem] font-extralight normal-case font-spartan text-title text-left tracking-normal xl:text-[3rem] xl:w-[55%]">
        Conhecimento nestas tecnologias ate o momento
      </h2>
      <ul className="flex flex-row flex-wrap gap-2 xl:gap-4 justify-center">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <li
              key={tech.name}
              className="flex items-center justify-center w-[4.8rem] h-[4.8rem] xl:w-24 xl:h-24 aspect-square border border-secondary-border rounded-full bg-transparent group transition-transform hover:scale-105"
            >
              {tech.image ? (
                <img
                  className="h-[2.4rem] xl:h-12 object-contain"
                  src={tech.image}
                  alt={`Logo ${tech.name}`}
                />
              ) : (
                <Icon className="size-8 xl:size-10 text-primary transition-transform group-hover:scale-110" />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
