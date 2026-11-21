import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import type { components } from "@octokit/openapi-types";
import Button from "../ui/Botton";

type GitHubRepo = components["schemas"]["minimal-repository"];

interface Project {
  title: string;
  description: string;
  highlights: string[];
  technologies: string[];
  previewUrl: string;
  repoUrl: string;
  reverse?: boolean;
}

const DESKTOP_WIDTH = 1280;
const DESKTOP_HEIGHT = 720;
const FEATURED_TOPIC = "destaque";

function hasValidWebsite(homepage?: string | null): boolean {
  if (!homepage) return false;
  const trimmed = homepage.trim();
  if (!trimmed) return false;

  const normalized = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(normalized);
    const hostname = parsed.hostname.toLowerCase();

    if (!hostname.includes(".")) return false;
    if (hostname === "github.com" || hostname.endsWith(".github.com")) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
}

function normalizeWebsiteUrl(homepage: string): string {
  const trimmed = homepage.trim();
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
}

interface DesktopIframePreviewProps {
  src: string;
  title: string;
}

function DesktopIframePreview({ src, title }: DesktopIframePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateScale = () => {
      const widthScale = element.clientWidth / DESKTOP_WIDTH;
      const heightScale = element.clientHeight / DESKTOP_HEIGHT;
      setScale(Math.min(widthScale, heightScale));
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full lg:w-[55%] aspect-video rounded-lg overflow-hidden bg-secondary-bg border border-secondary-border shadow-md group"
    >
      <iframe
        src={src}
        title={`Prévia de ${title}`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin"
        style={{
          width: `${DESKTOP_WIDTH}px`,
          height: `${DESKTOP_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="border-0 pointer-events-none select-none"
      />

      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir website ${title}`}
        className="absolute inset-0 bg-transparent transition-colors group-hover:bg-black/10"
      />
    </div>
  );
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function buscaRepositorio() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://api.github.com/users/emilio-manoel/repos?sort=updated&per_page=100"
        );

        if (!response.ok) {
          throw new Error(`Erro ao buscar repositórios (${response.status})`);
        }

        const repos: GitHubRepo[] = await response.json();

        const featuredReposWithWebsite = repos.filter((repo) => {
          if (!hasValidWebsite(repo.homepage)) return false;

          const normalizedTopics = (repo.topics ?? []).map((t) =>
            t.trim().toLowerCase()
          );

          return normalizedTopics.includes(FEATURED_TOPIC);
        });

        const mappedProjects: Project[] = featuredReposWithWebsite.map(
          (repo, index) => {
            const filteredTopics = (repo.topics ?? []).filter(
              (topic) => topic.trim().toLowerCase() !== FEATURED_TOPIC
            );

            const uniqueTechnologies = Array.from(
              new Set([
                ...(repo.language ? [repo.language] : []),
                ...filteredTopics,
              ])
            );

            return {
              title: repo.name,
              description:
                repo.description ?? "Projeto desenvolvido e hospedado no GitHub.",
              highlights: filteredTopics.length ? filteredTopics : ["Website ativo"],
              technologies: uniqueTechnologies,
              previewUrl: normalizeWebsiteUrl(repo.homepage!),
              repoUrl: repo.html_url,
              reverse: index % 2 !== 0,
            };
          }
        );

        setProjects(mappedProjects);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Erro inesperado ao carregar."
        );
      } finally {
        setLoading(false);
      }
    }

    buscaRepositorio();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-12 text-center text-text">
        Carregando projetos...
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-12 text-center text-red-500">
        {error}
      </section>
    );
  }

  return (
    <section
      id="projetos"
      className="px-2 py-5 md:py-16 md:px-12 2xl:py-20 2xl:px-30 flex flex-col gap-8 w-full"
    >
      <h2 className="text-[2rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.5rem] text-center font-extralight uppercase font-spartan text-title tracking-[0.4rem]">
        Projetos
      </h2>

      <div className="flex flex-col gap-16">
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 py-12 text-center text-text">
            <Globe className="size-8 text-primary" />
            <p className="text-base">
              Nenhum repositório com website e topic &quot;destaque&quot; foi encontrado.
            </p>
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.title}
              className={`flex flex-col lg:items-center gap-8 lg:gap-12 ${
                project.reverse
                  ? "lg:flex-row-reverse lg:justify-between"
                  : "lg:flex-row"
              }`}
            >
              <DesktopIframePreview
                src={project.previewUrl}
                title={project.title}
              />

              {/* Corpo do Card */}
              <div className="flex flex-col justify-end items-start gap-4 flex-1">
                <h3 className="text-[1.25rem] xl:text-[1.75rem] 2xl:text-[2rem] font-extralight uppercase font-spartan text-title text-left">
                  {project.title}
                </h3>
                <p className="text-base text-title">{project.description}</p>

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
          ))
        )}

        <div className="flex justify-center pt-4">
          <a
            href="https://github.com/emilio-manoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg" iconRight={ArrowUpRight}>
              Ver Todos os Projetos
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}