import Button from "../../ui/Botton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../../ui/SocialIcons";
import contactData from "./contact.json";

export default function ContactSection() {
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
    <section
      id="contato"
      className="px-4 py-10 md:py-24 md:px-24 2xl:px-60 flex flex-col justify-center items-center gap-6 border-y border-primary-border w-full"
    >
      <h2 className="text-[2rem] md:text-[3rem] text-center font-extralight uppercase font-spartan text-title tracking-[0.4rem]">
        {contactData.title}
      </h2>
      <p className="text-center text-text text-base md:w-4/5 leading-relaxed">
        {contactData.description}
      </p>
      <ul className="flex items-center gap-4 flex-wrap justify-center">
        {contactData.socials.map((social) => (
          <li key={social.name}>
            <a
              className="flex items-center gap-2 text-text hover:text-primary transition-colors text-base"
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
          <Button variant="primary" size="lg">
            <span className="lowercase text-primary">{contactData.email}</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
