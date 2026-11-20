import { useState } from "react";
import { Languages, ArrowUpRight, Landmark, GraduationCap, ChevronDown, User } from "lucide-react";
import Button from "../ui/Botton";

interface AboutSectionProps {
  photoUrl?: string;
}

export default function AboutSection({ photoUrl }: AboutSectionProps) {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({ 0: true });

  const toggleAccordion = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="sobre"
      className="px-4 py-10 md:py-32 md:px-24 2xl:py-40 2xl:px-60 flex flex-col gap-12 w-full"
    >
      {/* Bloco 1: Foto + Descrição */}
      <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-[minmax(0,34%)_minmax(0,60%)] lg:justify-between lg:items-start lg:gap-12 w-full">
        <div className="w-full max-w-13 aspect-square rounded-full border border-primary-border overflow-hidden bg-secondary-bg/60 flex items-center justify-center shadow-lg mx-auto lg:mx-0">
          {photoUrl ? (
            <img
              className="w-full h-full object-cover object-center pointer-events-none"
              src={photoUrl}
              alt="Minha foto"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-center p-6 text-text">
              <User size={64} className="text-primary/70" />
              <span className="text-xs text-text/70">
                (Sua foto aparecerá aqui)
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-start gap-6">
          <h2 className="text-[2rem] md:text-[3rem] xl:text-[4rem] text-center lg:text-left font-extralight uppercase font-spartan text-title tracking-[0.4rem]">
            Sobre mim
          </h2>
          <p className="text-base text-justify text-text leading-relaxed">
            Olá, sou Emilio Manoel sou um programador iniciante, atualmente com um
            aprendizado autoditada, para ter uma comprovação do meu aprendizado estou
            terminando esse curso da plataforma DIO, já que possui certificação perante
            desafios de projeto como esse, busco me torna na minha visão um
            programador completo, o fullstack e aprender sobre bibiotecas e frameworks
            também
          </p>
          <div className="flex items-center gap-3.5 text-text">
            <Languages className="size-5 text-icon" />
            <span>Inglês: Básico | Espanhol: Básico</span>
          </div>
          <div className="flex flex-row flex-wrap justify-center lg:justify-start pt-2">
            <a
              href="https://www.linkedin.com/in/emilio-manoel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="primary"
                size="md"
                iconRight={ArrowUpRight}
              >
                Conecte-se Comigo
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bloco 2: Formação, Experiências e Cursos */}
      <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-[minmax(0,34%)_minmax(0,60%)] lg:justify-between lg:items-start lg:gap-12 w-full pt-8">
        <div className="flex flex-col text-justify gap-8 w-full">
          {/* Formação */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
              Formação
            </h3>
            <h4 className="text-[1.15rem] font-normal text-primary text-left">
              entrando em analise e desenvolvimento de sistemas
            </h4>
            <span className="text-base text-text">fev 2026 - Dia 19</span>
            <div className="flex items-center gap-3.5 text-text">
              <Landmark className="size-5 text-icon" />
              <span>IF Baiano</span>
            </div>
            <div className="flex items-center gap-3.5 text-text">
              <GraduationCap className="size-5 text-icon" />
              <span>Campus Catu</span>
            </div>
          </div>

          {/* Experiências */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
              Experiências
            </h3>
            <h4 className="text-[1.15rem] font-normal text-primary text-left">
              Desafios de projeto
            </h4>
            <span className="text-base text-text">
              Digital Innovation One. F - termino 18/02/2026
            </span>
            <span className="text-base text-text leading-relaxed">
              desafio crie um portfolio vencedor, detona Ralph com JavaScript, um
              simulador de piano, pokedex com javascript, Yu-Gi-Oh em Jokenpo, jogo
              da memoria de emojis sem usar imagens, classificador de nivel herói e
              muito mais no meu github.
            </span>
          </div>
        </div>

        {/* Coluna 2: Cursos (Accordion) */}
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
                  <p>Digital Innovation One. dez 2025. 2h.</p>
                  <p>
                    O que é versionamento de código, Git e GitHub. Como instalar e
                    configurar o Git em diferentes sistemas operacionais e como
                    autenticar via Token e SSH. Como manusear repositórios, indo
                    desde a criação e clonagem até o gerenciamento de branches,
                    passando por todas as etapas de salvar, desfazer e sincronizar
                    alterações com o repositório remoto.
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
                  <p>Digital Innovation One. Dez 2025. 1h.</p>
                  <p>
                    Lab prático sobre colaboração em projetos de código aberto.
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
                  <p>Digital Innovation One. Jan 2026. 4h.</p>
                  <p>
                    Aprender sobre protocolo HTTP e como integrar com APIs na
                    pratica e ultilizando no projeto pokedex.
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
