import { ArrowUpRight } from "lucide-react";
import Button from "../../ui/Botton";
import AboutSkills from "./Skills";

interface AboutBioProps {
  photoUrl?: string;
}

export default function AboutBio({ photoUrl }: AboutBioProps) {
  return (
    <div className="flex flex-col items-center lg:items-start lg:grid lg:grid-cols-12 gap-8 lg:gap-10 w-full">
      {/* Coluna Avatar */}
      <div className="lg:col-span-4 flex justify-center lg:justify-start items-start w-full">
        <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-2xl md:rounded-full border-2 border-primary-border overflow-hidden bg-secondary-bg/60 flex items-center justify-center shadow-lg mx-auto lg:mx-0 shrink-0">
          <img
            className="w-full h-full object-cover object-center pointer-events-none"
            src={photoUrl}
            alt="Minha foto"
          />
        </div>
      </div>

      {/* Coluna Conteúdo */}
      <div className="lg:col-span-8 flex flex-col justify-start gap-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center lg:text-left font-light uppercase font-spartan text-title tracking-widest">
          Sobre mim
        </h2>

        <p className="text-sm sm:text-base text-justify text-text leading-relaxed">
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

        <div className="flex flex-row flex-wrap justify-center lg:justify-start pt-1">
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
