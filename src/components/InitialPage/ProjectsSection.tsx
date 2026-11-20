import { ArrowUpRight, CodeXml } from "lucide-react";
import Button from "../ui/Botton";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  previewUrl: string;
  repoUrl: string;
  image?: string;
  reverse?: boolean;
}

export default function ProjectsSection() {
  // Você pode adicionar ou alterar as imagens aqui quando quiser!
  // Se image for "" ou undefined, um placeholder elegante será exibido sem quebrar a compilação.
  const projects: Project[] = [
    {
      title: "Spider-man Multiversos",
      description: "Site dos filmes do homem aranha",
      highlights: [
        "Varios paginas html;",
        "interatividades;",
        "Começo do versionamento de paginas.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      previewUrl: "https://emilio-manoel.github.io/spider-man-multiverses-dio/",
      repoUrl: "https://github.com/emilio-manoel/spider-man-multiverses-dio",
      image: "", // Insira o caminho da sua imagem quando adicionar
      reverse: false,
    },
    {
      title: "mundo invertido",
      description: "Site de stranger things.",
      highlights: [
        "Dinamicas de troca de estilo do site;",
        "ultilização de varios conceitos background;",
        "Controles flex-box;",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      previewUrl: "https://emilio-manoel.github.io/frontend-mundo-invertido/",
      repoUrl: "https://github.com/emilio-manoel/frontend-mundo-invertido",
      image: "",
      reverse: true,
    },
    {
      title: "Trilha percorrida",
      description: "Os caminhos e conceitos que passei",
      highlights: [
        "Ultização de tags semanticas;",
        "entendendo o CEO;",
        "versionamento para celular.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Git"],
      previewUrl: "https://emilio-manoel.github.io/trilha-percoridas/",
      repoUrl: "https://github.com/emilio-manoel/trilha-percoridas",
      image: "",
      reverse: false,
    },
  ];

  return (
    <section
      id="projetos"
      className="px-4 py-10 md:py-32 md:px-24 2xl:py-40 2xl:px-60 flex flex-col gap-8 w-full"
    >
      <h2 className="text-[2rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] text-center font-extralight uppercase font-spartan text-title tracking-[0.4rem]">
        Projetos
      </h2>

      <div className="flex flex-col gap-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`flex flex-col lg:items-center gap-8 lg:gap-12 ${
              project.reverse
                ? "lg:flex-row-reverse lg:justify-between"
                : "lg:flex-row"
            }`}
          >
            {/* Capa do Projeto (com suporte a imagem ou placeholder) */}
            <div className="w-full lg:w-[55%] aspect-video rounded-lg overflow-hidden bg-secondary-bg border border-secondary-border flex items-center justify-center shadow-md">
              {project.image ? (
                <img
                  className="w-full h-full object-cover object-center"
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 p-6 text-center text-text">
                  <div className="flex items-center justify-center size-16 rounded-full border border-secondary-border bg-primary-bg/70 text-primary">
                    <CodeXml size={32} />
                  </div>
                  <span className="text-lg font-medium text-title uppercase font-spartan">
                    {project.title}
                  </span>
                  <span className="text-xs text-text/70">
                    (Insira a imagem em projects.image quando editar)
                  </span>
                </div>
              )}
            </div>

            {/* Corpo do Card */}
            <div className="flex flex-col justify-end items-start gap-4 flex-1">
              <h3 className="text-[1.55rem] xl:text-[2.5rem] 2xl:text-[3.25rem] font-extralight uppercase font-spartan text-title text-left">
                {project.title}
              </h3>
              <p className="text-base text-title">{project.description}</p>
              <ul className="ml-5 list-disc text-text space-y-1 text-base">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>

              {/* Badges de Tecnologias */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-secondary-border bg-secondary-bg px-4 py-1 text-xs font-medium text-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botões do Card */}
              <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4 w-full pt-2">
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="primary"
                    size="sm"
                    iconRight={ArrowUpRight}
                    className="w-full sm:w-auto"
                  >
                    Prévia
                  </Button>
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    Repositório
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center pt-4">
          <a
            href="https://github.com/emilio-manoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              iconRight={ArrowUpRight}
            >
              Ver Todos os Projetos
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
