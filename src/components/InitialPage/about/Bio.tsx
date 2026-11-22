import { ArrowUpRight } from "lucide-react";
import Button from "../../ui/Botton";
import AboutSkills from "./Skills";

interface AboutBioProps {
  photoUrl?: string;
}

export default function AboutBio({ photoUrl }: AboutBioProps) {
  return (
    <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-[minmax(0,34%)_minmax(0,60%)] lg:justify-between lg:items-start lg:gap-12 w-full">
      <div className="w-full max-w-13 aspect-square rounded-full border border-primary-border overflow-hidden bg-secondary-bg/60 flex items-center justify-center shadow-lg mx-auto lg:mx-0">
        <img
          className="w-full h-full object-cover object-center pointer-events-none"
          src={photoUrl}
          alt="Minha foto"
        />
      </div>

      <div className="flex flex-col justify-start gap-6">
        <h2 className="text-[2rem] md:text-[3rem] xl:text-[4rem] text-center lg:text-left font-extralight uppercase font-spartan text-title tracking-[0.4rem]">
          Sobre mim
        </h2>
        <p className="text-base text-justify text-text leading-relaxed">
          Olá! Sou Emílio Manoel, desenvolvedor Full Stack e estudante de
          Análise e Desenvolvimento de Sistemas no Instituto Federal Baiano
          (IF Baiano). Minha atuação envolve o desenvolvimento de aplicações
          web de ponta a ponta — desde interfaces responsivas com React,
          TypeScript e Tailwind CSS até APIs escaláveis com Node.js, Express,
          docker e bancos de dados como MongoDB e Mysql. Também exploro a
          integração de Inteligência Artificial generativa, automação de
          fluxos e consultas geoespaciais para criar soluções práticas e
          inteligentes. Além da prática em projetos reais e bootcamps de
          tecnologia, participo de iniciativas acadêmicas de extensão e
          pesquisa, sempre buscando unir aprendizado contínuo, clareza técnica
          e entrega de valor.
        </p>

        <AboutSkills />

        <div className="flex flex-row flex-wrap justify-center lg:justify-start pt-2">
          <a
            href="https://www.linkedin.com/in/emilio-manoel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="md" iconRight={ArrowUpRight}>
              Conecte-se Comigo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
