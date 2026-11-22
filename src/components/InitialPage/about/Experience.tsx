import { Landmark, GraduationCap } from "lucide-react";
import experiencesData from "./json/experiences.json";

export default function AboutExperience() {
  const { education, academicAndPersonal, extension } = experiencesData;

  return (
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
        <span className="text-base text-text">{education.expectedEndDate}</span>
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

          <span className="text-base text-text">{extension.institution}</span>

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
  );
}
