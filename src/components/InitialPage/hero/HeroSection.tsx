import { ArrowDownRight } from "lucide-react";
import Button from "../../ui/Botton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../../ui/SocialIcons";
import heroData from "./hero.json";

export default function HeroSection() {
  const renderSocialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <GithubIcon size={24} className="size-6" />;
      case "linkedin":
        return <LinkedinIcon size={24} className="size-6" />;
      case "instagram":
        return <InstagramIcon size={24} className="size-6" />;
      default:
        return null;
    }
  };

  return (
    <main
      id="home"
      className="px-2 py-5 md:pt-18 md:pb-8 md:px-12 xl:pt-24 xl:pb-4 2xl:px-30 flex flex-col gap-8 w-full"
    >
      <div className="flex flex-col gap-6 md:items-start">
        <h1 className="text-[2.5rem] md:text-[3.5rem] 2xl:text-[4rem] font-extralight uppercase font-spartan text-title leading-[1.1] tracking-tight">
          <b className="font-normal">{heroData.titleBold}</b>{" "}
          {heroData.titleRest}
        </h1>

        <p className="text-base md:text-lg text-text text-justify w-full leading-relaxed">
          {heroData.description}
        </p>

        <ul className="flex items-center gap-4">
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
          src={heroData.youtubeUrl}
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
