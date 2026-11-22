import { useState } from "react";
import {
  Languages,
  ArrowUpRight,
  Landmark,
  GraduationCap,
  ChevronDown,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiJavascript,
  SiDocker,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import Button from "../../ui/Botton";
import skillsData from "./skills.json";
import coursesData from "./courses.json";
import experiencesData from "./experiences.json";

const SKILL_ICONS: Record<string, IconType | typeof Languages> = {
  Languages,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiDocker,
};

interface AboutSectionProps {
  photoUrl?: string;
}

export default function AboutSection({ photoUrl }: AboutSectionProps) {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleAccordion = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const { education, academicAndPersonal, extension } = experiencesData;

  return (
    <section
      id="sobre"
      className="px-4 py-10 md:py-16 md:px-12 2xl:py-20 2xl:px-30 flex flex-col gap-12 w-full"
    >
      {/* Bloco 1: Foto + Descrição */}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-3.5 text-text">
            {skillsData.map((skill) => {
              const Icon = SKILL_ICONS[skill.icon];
              return (
                <span key={skill.id} className="flex items-center gap-2">
                  {Icon && <Icon className="size-5 text-icon shrink-0" />}
                  <span>{skill.label}</span>
                </span>
              );
            })}
          </div>
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

      {/* Bloco 2: Formação, Experiências e Cursos */}
      <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-[minmax(0,70%)_minmax(0,30%)] lg:justify-between lg:items-start lg:gap-12 w-full pt-8">
        <div className="flex flex-col text-justify gap-8 w-full">
          {/* Formação */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
              Formação
            </h3>
            <h4 className="text-[1.15rem] font-normal text-primary text-left">
              {education.title}
            </h4>
            <span className="text-base text-text">{education.startDate}</span>
            <div className="flex items-center gap-3.5 text-text">
              <Landmark className="size-5 text-icon" />
              <span>{education.institution}</span>
            </div>
            <div className="flex items-center gap-3.5 text-text">
              <GraduationCap className="size-5 text-icon" />
              <span>{education.campus}</span>
            </div>
            <span className="text-base text-text">
              {education.expectedEndDate}
            </span>
          </div>

          {/* Experiências */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
              Experiências
            </h3>

            {/* Projetos acadêmicos e pessoais */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[1.15rem] font-normal text-primary text-left">
                {academicAndPersonal.title}
              </h4>

              <span className="text-base text-text">
                {academicAndPersonal.period}
              </span>

              <div className="flex flex-col gap-3 text-base text-text leading-relaxed">
                {academicAndPersonal.projects.map((proj) => (
                  <p key={proj.name}>
                    <strong className="text-title">{proj.name}</strong>{" "}
                    {proj.description}
                  </p>
                ))}

                <p>{academicAndPersonal.extraNote}</p>
              </div>
            </div>

            {/* Projetos de extensão */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[1.15rem] font-normal text-primary text-left">
                {extension.title}
              </h4>

              <span className="text-base text-text">
                {extension.institution}
              </span>

              <div className="flex flex-col gap-4 text-base text-text leading-relaxed">
                {extension.initiatives.map((initiative) => (
                  <div key={initiative.title} className="flex flex-col gap-1.5">
                    <strong className="text-title">{initiative.title}</strong>

                    <span className="text-sm text-primary">
                      {initiative.workload}
                    </span>

                    {initiative.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/emilio-manoel"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline w-fit text-base"
            >
              Confira meus projetos no GitHub →
            </a>
          </div>
        </div>

        {/* Coluna 2: Cursos */}
        <div className="flex flex-col text-justify gap-8 w-full">
          <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
            Cursos
          </h3>

          <div className="flex flex-col w-full">
            {coursesData.map((course, idx) => {
              const isOpen = !!openItems[idx];
              const isFirst = idx === 0;
              const isLast = idx === coursesData.length - 1;

              return (
                <div key={course.id} className="w-full">
                  <button
                    type="button"
                    className={`w-full flex py-3.5 px-5 justify-between items-center border border-primary-border bg-transparent text-left cursor-pointer transition-all duration-300 text-title hover:bg-secondary-bg/50 ${
                      !isFirst ? "border-t-0" : "rounded-t"
                    } ${isLast && !isOpen ? "rounded-b" : ""} ${
                      isOpen ? "bg-secondary-bg" : ""
                    }`}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span className="text-title font-medium text-base">
                      {course.title}
                    </span>

                    <ChevronDown
                      className={`size-4 text-icon transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className={`p-6 flex flex-col items-start gap-2.5 border border-primary-border border-t-0 text-text leading-relaxed text-base bg-transparent ${
                        isLast ? "rounded-b" : ""
                      }`}
                    >
                      <p>
                        {course.institution}. {course.date}. {course.duration}.
                      </p>

                      <p>{course.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
