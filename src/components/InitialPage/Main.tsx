import { ArrowDownRight } from "lucide-react";
import Button from "../ui/Botton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";

export default function Main() {
  return (
    <main
      id="home"
      className="px-4 py-10 md:pt-36 md:pb-16 md:px-24 xl:pt-48 xl:pb-8 2xl:px-60 flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-6 md:items-start">
        <h1 className="text-[2.5rem] md:text-[5rem] 2xl:text-[6.25rem] font-extralight uppercase font-spartan text-title leading-[1.1] tracking-tight">
          <b className="font-normal">sempre buscando aprender mais &amp;</b> evoluir
        </h1>

        <p className="text-base md:text-lg text-text text-justify max-w-3xl leading-relaxed">
          Emilio manoel, Desenvolvedor Front-end, ultimo projeto do curso de 78 horas
          Ri Happy - Front-end do Zero da Dio.me.
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
