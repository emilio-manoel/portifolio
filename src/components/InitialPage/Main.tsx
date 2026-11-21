import { ArrowDownRight } from "lucide-react";
import Button from "../ui/Botton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";

export default function Main() {
  return (
    <main
      id="home"
      className="px-2 py-5 md:pt-18 md:pb-8 md:px-12 xl:pt-24 xl:pb-4 2xl:px-30 flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-6 md:items-start">
        <h1 className="text-[2.5rem] md:text-[3.5rem] 2xl:text-[4rem] font-extralight uppercase font-spartan text-title leading-[1.1] tracking-tight">
          <b className="font-normal">
            sempre buscando aprender mais &amp; evoluir
          </b>{" "}
          + meu nome é Emilio e sou Deselvolvedor fullstack
        </h1>

        <p className="text-base md:text-lg text-text text-justify w-full leading-relaxed">
          Sou estudante de Análise e Desenvolvimento de Sistemas e entusiasta da
          tecnologia, sempre buscando transformar conhecimentos em projetos
          práticos e desenvolver soluções cada vez mais completas. Atualmente,
          meu foco está no desenvolvimento Full-Stack, explorando tanto a
          construção de interfaces quanto a lógica de negócio e a integração
          entre aplicações.
        </p>

        <ul className="flex items-center gap-4">
          <li>
            <a
              className="flex items-center gap-2 text-text hover:text-primary transition-colors duration-200"
              href="https://github.com/emilio-manoel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={24} className="size-6" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 text-text hover:text-primary transition-colors duration-200"
              href="https://www.linkedin.com/in/emilio-manoel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} className="size-6" />
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-2 text-text hover:text-primary transition-colors duration-200"
              href="https://www.instagram.com/emilio._.manoel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={24} className="size-6" />
            </a>
          </li>
        </ul>

        <a href="#projetos" className="inline-block w-full md:w-auto pt-2">
          <Button
            variant="primary"
            size="lg"
            iconRight={ArrowDownRight}
            className="w-full md:w-auto"
          >
            Ver Projetos
          </Button>
        </a>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.youtube.com/embed/YaOPjaeM7TE?si=tmRJ8fm4Ko_eGI1M"
          title="YouTube video player"
          className="w-full aspect-video border-0 rounded-lg shadow-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </main>
  );
}
