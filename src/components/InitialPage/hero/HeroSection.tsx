import { ArrowDownRight } from "lucide-react";
import Button from "../../ui/Botton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../../ui/SocialIcons";
import heroData from "./hero.json";

export default function HeroSection() {
  const renderSocialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <GithubIcon size={22} className="size-5.5" />;
      case "linkedin":
        return <LinkedinIcon size={22} className="size-5.5" />;
      case "instagram":
        return <InstagramIcon size={22} className="size-5.5" />;
      default:
        return null;
    }
  };

  return (
    <main
      id="home"
      className="max-w-6xl 2xl:max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 pt-8 pb-10 md:pt-28 md:pb-14"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Coluna Texto */}
        <div className="lg:col-span-7 flex flex-col gap-5 md:items-start text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-light uppercase font-spartan text-title leading-[1.15] tracking-tight">
            <b className="font-semibold text-primary">{heroData.titleBold}</b>{" "}
            {heroData.titleRest}
          </h1>

          <p className="text-sm sm:text-base md:text-base text-text text-justify leading-relaxed">
            {heroData.description}
          </p>

          <ul className="flex items-center gap-4 pt-1">
            {heroData.socials.map((social) => (
              <li key={social.name}>
                <a
                  className="flex items-center gap-2 text-text hover:text-primary transition-colors duration-200"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.type)}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2 w-full sm:w-auto">
            <a href="#projetos" className="inline-block w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                iconRight={ArrowDownRight}
                className="w-full sm:w-auto"
              >
                Ver Projetos
              </Button>
            </a>
          </div>
        </div>

        {/* Coluna Vídeo */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-secondary-border bg-secondary-bg">
            <iframe
              src={heroData.youtubeUrl}
              title="Apresentação Emilio Manoel"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </main>
  );
}
