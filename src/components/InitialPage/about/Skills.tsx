import { Languages } from "lucide-react";
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
import skillsData from "./json/skills.json";

const SKILL_ICONS: Record<string, IconType | typeof Languages> = {
  Languages,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiDocker,
};

export default function AboutSkills() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-2.5 sm:gap-3 text-text">
      {skillsData.map((skill) => {
        const Icon = SKILL_ICONS[skill.icon];
        return (
          <span
            key={skill.id}
            className="flex items-center gap-2 text-xs sm:text-sm font-medium"
          >
            {Icon && <Icon className="size-4 sm:size-4.5 text-icon shrink-0" />}
            <span>{skill.label}</span>
          </span>
        );
      })}
    </div>
  );
}
