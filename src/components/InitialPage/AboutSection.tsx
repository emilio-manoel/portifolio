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
import Button from "../ui/Botton";

interface AboutSectionProps {
  photoUrl?: string;
}

interface SkillItem {
  id: string;
  icon: IconType | typeof Languages;
  label: string;
}

const skills: SkillItem[] = [
  {
    id: "languages",
    icon: Languages,
    label: "Inglês: Básico",
  },
  {
    id: "react",
    icon: SiReact,
    label: "React: Avançado",
  },
  {
    id: "javascript",
    icon: SiJavascript,
    label: "Javascript: Avançado",
  },
  {
    id: "typescript",
    icon: SiTypescript,
    label: "TypeScript: Avançado",
  },
  {
    id: "nodejs",
    icon: SiNodedotjs,
    label: "Node.js: Avançado",
  },
  {
    id: "tailwindcss",
    icon: SiTailwindcss,
    label: "Tailwind CSS: Intermediario",
  },
  {
    id: "mongodb",
    icon: SiMongodb,
    label: "MongoDB: Intermediario",
  },
  {
    id: "Mysql",
    icon: SiMysql,
    label: "MySql: Básico",
  },
  {
    id: "docker",
    icon: SiDocker,
    label: "Docker: Básico",
  },
];

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
          <div className="grid grid-cols-3 items-center gap-3.5 text-text">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <span key={skill.id} className="flex items-center gap-2">
                  <Icon className="size-5 text-icon shrink-0" />
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
              Segundo semestre de analise e desenvolvimento de sistemas
            </h4>
            <span className="text-base text-text">
              Inicio em fev 2026 - Dia 19
            </span>
            <div className="flex items-center gap-3.5 text-text">
              <Landmark className="size-5 text-icon" />
              <span>IF Baiano</span>
            </div>
            <div className="flex items-center gap-3.5 text-text">
              <GraduationCap className="size-5 text-icon" />
              <span>Campus Catu</span>
            </div>
            <span className="text-base text-text">
              Possivel termino em jul 2028
            </span>
          </div>

          {/* Experiências */}

          <div className="flex flex-col gap-6">
            <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
              Experiências
            </h3>

            {/* Projetos de desenvolvimento */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[1.15rem] font-normal text-primary text-left">
                Projetos acadêmicos e pessoais
              </h4>

              <span className="text-base text-text">
                Desenvolvimento Full-Stack | 2025 – atual
              </span>

              <div className="flex flex-col gap-3 text-base text-text leading-relaxed">
                <p>
                  <strong className="text-title">
                    Sistema Inteligente de Triagem e Match para Doações de ONGs:
                  </strong>{" "}
                  meu Trabalho de Conclusão de Curso em ADS. Uma aplicação
                  Full-Stack que utiliza inteligência artificial, geolocalização
                  e integração com APIs para aproximar doadores de organizações
                  sociais. Desenvolvida com React, TypeScript, Node.js, Express,
                  MongoDB e Gemini API.
                </p>

                <p>
                  <strong className="text-title">Domino Online:</strong>{" "}
                  evolução de um projeto acadêmico para uma aplicação
                  multiplayer em tempo real. Utiliza React, TypeScript, Node.js,
                  Express e Socket.IO, trabalhando a comunicação entre jogadores
                  e a sincronização das partidas.
                </p>

                <p>
                  <strong className="text-title">API Formula 1:</strong> projeto
                  Back-End desenvolvido com Node.js, TypeScript e Fastify,
                  explorando a construção de APIs REST, organização de rotas e
                  disponibilização de informações sobre equipes e pilotos.
                </p>

                <p>
                  Além desses projetos, desenvolvi diversas aplicações práticas
                  durante minha formação, incluindo Pokédex, jogos em
                  JavaScript, interfaces responsivas e projetos com React e
                  TypeScript.
                </p>
              </div>
            </div>

            {/* Projetos de extensão */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[1.15rem] font-normal text-primary text-left">
                Projetos de extensão
              </h4>

              <span className="text-base text-text">
                Instituto Federal Baiano | 2026
              </span>

              <div className="flex flex-col gap-4 text-base text-text leading-relaxed">
                <div className="flex flex-col gap-1.5">
                  <strong className="text-title">
                    Ataques Cibernéticos no Meio Digital
                  </strong>

                  <span className="text-sm text-primary">
                    Carga horária total do projeto: 100 horas
                  </span>

                  <p>
                    Participação em projeto de extensão voltado à
                    conscientização de jovens e adolescentes sobre segurança
                    digital. Envolveu pesquisa bibliográfica, elaboração de
                    materiais didáticos e participação na preparação e
                    realização de uma palestra educativa.
                  </p>

                  <p>
                    Foram abordados temas como phishing, engenharia social,
                    malware, grooming digital, sextorsão e práticas de prevenção
                    contra golpes e ataques cibernéticos.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <strong className="text-title">
                    Cultura de ADS no IF Baiano, Campus Catu
                  </strong>

                  <span className="text-sm text-primary">
                    Carga horária total do projeto: 40 horas
                  </span>

                  <p>
                    Projeto de extensão com o objetivo de apresentar o curso
                    superior de Análise e Desenvolvimento de Sistemas a
                    estudantes do ensino médio de uma escola pública, por meio
                    de uma palestra interativa e atividades com quiz.
                  </p>

                  <p>
                    Participei da pesquisa, elaboração do material de
                    apresentação, preparação dos slides e desenvolvimento do
                    quiz, contribuindo para divulgar as possibilidades
                    acadêmicas e profissionais da área de tecnologia, incluindo
                    empreendedorismo e trabalho freelancer.
                  </p>
                </div>
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

    {/* Item 1 */}
    <div className="w-full">
      <button
        type="button"
        className={`w-full flex py-3.5 px-5 justify-between items-center border border-primary-border rounded-t bg-transparent text-left cursor-pointer transition-all duration-300 text-title hover:bg-secondary-bg/50 ${
          openItems[0] ? "bg-secondary-bg" : ""
        }`}
        onClick={() => toggleAccordion(0)}
      >
        <span className="text-title font-medium text-base">
          Versionamento de Código com Git e GitHub
        </span>

        <ChevronDown
          className={`size-4 text-icon transition-transform duration-300 ${
            openItems[0] ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {openItems[0] && (
        <div className="p-6 flex flex-col items-start gap-2.5 border border-primary-border border-t-0 text-text leading-relaxed text-base bg-transparent">
          <p>Digital Innovation One. Dezembro de 2025. 2h.</p>

          <p>
            Estudo dos fundamentos de versionamento de código utilizando
            Git e GitHub. Aprendizado sobre configuração do ambiente,
            autenticação via Token e SSH, criação e clonagem de
            repositórios, gerenciamento de branches, commits e
            sincronização de alterações com repositórios remotos.
          </p>
        </div>
      )}
    </div>

    {/* Item 2 */}
    <div className="w-full">
      <button
        type="button"
        className={`w-full flex py-3.5 px-5 justify-between items-center border border-primary-border border-t-0 bg-transparent text-left cursor-pointer transition-all duration-300 text-title hover:bg-secondary-bg/50 ${
          openItems[1] ? "bg-secondary-bg" : ""
        }`}
        onClick={() => toggleAccordion(1)}
      >
        <span className="text-title font-medium text-base">
          Contribuindo em um Projeto Open Source no GitHub
        </span>

        <ChevronDown
          className={`size-4 text-icon transition-transform duration-300 ${
            openItems[1] ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {openItems[1] && (
        <div className="p-6 flex flex-col items-start gap-2.5 border border-primary-border border-t-0 text-text leading-relaxed text-base bg-transparent">
          <p>Digital Innovation One. Dezembro de 2025. 1h.</p>

          <p>
            Laboratório prático sobre colaboração em projetos de código
            aberto. Experiência com o fluxo de contribuição no GitHub,
            compreendendo a importância da colaboração, organização e
            compartilhamento de código entre desenvolvedores.
          </p>
        </div>
      )}
    </div>

    {/* Item 3 */}
    <div className="w-full">
      <button
        type="button"
        className={`w-full flex py-3.5 px-5 justify-between items-center border border-primary-border border-t-0 bg-transparent text-left cursor-pointer transition-all duration-300 text-title hover:bg-secondary-bg/50 ${
          !openItems[2] ? "rounded-b" : ""
        } ${openItems[2] ? "bg-secondary-bg" : ""}`}
        onClick={() => toggleAccordion(2)}
      >
        <span className="text-title font-medium text-base">
          Dominando o protocolo HTTP e integrando com APIs
        </span>

        <ChevronDown
          className={`size-4 text-icon transition-transform duration-300 ${
            openItems[2] ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {openItems[2] && (
        <div className="p-6 flex flex-col items-start gap-2.5 border border-primary-border border-t-0 rounded-b text-text leading-relaxed text-base bg-transparent">
          <p>Digital Innovation One. Janeiro de 2026. 4h.</p>

          <p>
            Estudo do funcionamento do protocolo HTTP e dos principais
            conceitos relacionados à comunicação entre cliente e servidor.
            Aplicação prática dos conhecimentos na integração e consumo
            de APIs REST, utilizando JavaScript e trabalhando com o projeto
            Pokédex.
          </p>
        </div>
      )}
    </div>

  </div>
</div>
      </div>
    </section>
  );
}
