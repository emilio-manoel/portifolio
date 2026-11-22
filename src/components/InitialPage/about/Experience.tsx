import { Landmark, GraduationCap } from "lucide-react";
import experiencesData from "./json/experiences.json";

export default function AboutExperience() {
  const { education, academicAndPersonal, extension } = experiencesData;

  return (
    <div className="flex flex-col text-justify gap-8 w-full">
      {/* Formação */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl sm:text-2xl font-light uppercase font-spartan text-title text-left tracking-wide">
          Formação
        </h3>
        <h4 className="text-base sm:text-lg font-medium text-primary text-left">
          {education.title}
        </h4>
        <span className="text-sm text-text">{education.startDate}</span>
        <div className="flex items-center gap-3 text-text text-sm">
          <Landmark className="size-4.5 text-icon shrink-0" />
          <span>{education.institution}</span>
        </div>
        <div className="flex items-center gap-3 text-text text-sm">
          <GraduationCap className="size-4.5 text-icon shrink-0" />
          <span>{education.campus}</span>
        </div>
        <span className="text-sm text-text">{education.expectedEndDate}</span>
      </div>

      {/* Experiências */}
      <div className="flex flex-col gap-6">
        <h3 className="text-xl sm:text-2xl font-light uppercase font-spartan text-title text-left tracking-wide">
          Experiências
        </h3>

        {/* Projetos acadêmicos e pessoais */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base sm:text-lg font-medium text-primary text-left">
            {academicAndPersonal.title}
          </h4>

          <span className="text-xs sm:text-sm text-text font-medium">
            {academicAndPersonal.period}
          </span>

          <div className="flex flex-col gap-3 text-sm sm:text-base text-text leading-relaxed">
            {academicAndPersonal.projects.map((proj) => (
              <p key={proj.name}>
                <strong className="text-title font-semibold">{proj.name}</strong>{" "}
                {proj.description}
              </p>
            ))}

            <p>{academicAndPersonal.extraNote}</p>
          </div>
        </div>

        {/* Projetos de extensão */}
        <div className="flex flex-col gap-3">
          <h4 className="text-base sm:text-lg font-medium text-primary text-left">
            {extension.title}
          </h4>

          <span className="text-xs sm:text-sm text-text font-medium">
            {extension.institution}
          </span>

          <div className="flex flex-col gap-4 text-sm sm:text-base text-text leading-relaxed">
            {extension.initiatives.map((initiative) => (
              <div key={initiative.title} className="flex flex-col gap-1.5">
                <strong className="text-title font-semibold">
                  {initiative.title}
                </strong>

                <span className="text-xs text-primary font-medium">
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
          className="text-primary hover:underline w-fit text-sm font-medium"
        >
          Confira meus projetos no GitHub →
        </a>
      </div>
    </div>
  );
}
