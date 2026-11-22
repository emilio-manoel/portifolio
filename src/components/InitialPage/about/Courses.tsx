import { useState } from "react";
import { ChevronDown } from "lucide-react";
import coursesData from "./json/courses.json";

export default function AboutCourses() {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    [coursesData[0]?.id ?? -1]: true,
  });

  const toggleAccordion = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="flex min-w-0 w-full flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <h3 className="text-xl sm:text-2xl font-light uppercase font-spartan text-title text-left tracking-wide">
          Cursos
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed text-text">
          Conhecimentos adquiridos por meio de cursos, bootcamps e
          experiências de aprendizado na área de tecnologia.
        </p>
      </div>

      <div className="w-full overflow-hidden rounded-xl border border-primary-border divide-y divide-primary-border">
        {coursesData.map((course) => {
          const isOpen = !!openItems[course.id];

          return (
            <article key={course.id} className="w-full min-w-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`course-${course.id}`}
                onClick={() => toggleAccordion(course.id)}
                className={`flex w-full items-center justify-between gap-4 p-4 text-left transition-colors duration-200 hover:bg-secondary-bg/60 cursor-pointer ${
                  isOpen ? "bg-secondary-bg/70" : "bg-transparent"
                }`}
              >
                <div className="flex min-w-0 flex-col gap-1">
                  <h4 className="wrap-break-word text-sm font-semibold leading-snug text-title sm:text-base">
                    {course.title}
                  </h4>

                  <span className="text-xs text-text sm:text-sm">
                    {course.institution}
                  </span>

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-primary font-medium">
                    <span>{course.duration}</span>
                    <span aria-hidden="true">•</span>
                    <span>{course.date}</span>
                  </div>
                </div>

                <ChevronDown
                  className={`size-4 shrink-0 text-icon transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`course-${course.id}`}
                  className="border-t border-primary-border px-4 py-3.5 text-xs sm:text-sm leading-relaxed text-text bg-secondary-bg/20"
                >
                  <p>{course.description}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
