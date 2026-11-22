import Button from "../ui/Botton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="px-4 py-10 md:py-24 md:px-24 2xl:px-60 flex flex-col justify-center items-center gap-6 border-y border-primary-border w-full"
    >
      <h2 className="text-[2rem] md:text-[3rem] text-center font-extralight uppercase font-spartan text-title tracking-[0.4rem]">
        Contate-me
      </h2>
      <p className="text-center text-text text-base md:w-4/5 leading-relaxed">
        Estou disponível nas redes sociais abaixo ou por e-mail.
      </p>
      <ul className="flex items-center gap-4 flex-wrap justify-center">
        <li>
          <a
            className="flex items-center gap-2 text-text hover:text-primary transition-colors text-base"
            href="https://github.com/emilio-manoel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={24} className="size-6" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 text-text hover:text-primary transition-colors text-base"
            href="https://www.linkedin.com/in/emilio-manoel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={24} className="size-6" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 text-text hover:text-primary transition-colors text-base"
            href="https://www.instagram.com/emilio._.manoel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={24} className="size-6" />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
      <div className="pt-2">
        <a href="mailto:emilio.trabalho555@gmail.com">
          <Button
            variant="primary"
            size="lg"
          >
            <span className="lowercase text-primary">emilio.trabalho555@gmail.com</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
