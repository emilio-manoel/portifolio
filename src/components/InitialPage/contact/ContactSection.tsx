import Button from "../../ui/Botton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../../ui/SocialIcons";
import contactData from "./contact.json";

export default function ContactSection() {
  const renderSocialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <GithubIcon size={20} className="size-5" />;
      case "linkedin":
        return <LinkedinIcon size={20} className="size-5" />;
      case "instagram":
        return <InstagramIcon size={20} className="size-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contato"
      className="w-full border-y border-primary-border py-12 md:py-16 bg-secondary-bg/20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col justify-center items-center gap-5 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase font-spartan text-title tracking-widest">
          {contactData.title}
        </h2>

        <p className="text-sm sm:text-base text-text max-w-lg leading-relaxed">
          {contactData.description}
        </p>

        <ul className="flex items-center gap-4 flex-wrap justify-center pt-1">
          {contactData.socials.map((social) => (
            <li key={social.name}>
              <a
                className="flex items-center gap-2 text-text hover:text-primary transition-colors text-sm font-medium"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {renderSocialIcon(social.type)}
                <span>{social.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <a href={`mailto:${contactData.email}`}>
            <Button variant="primary" size="md">
              <span className="lowercase text-primary font-mono text-sm">
                {contactData.email}
              </span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
