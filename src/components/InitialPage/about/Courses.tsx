import { useState } from "react";
import { ChevronDown } from "lucide-react";
import coursesData from "./json/courses.json";

export default function AboutCourses() {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({
    0: true,
  });

  const toggleAccordion = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="flex flex-col text-justify gap-8 w-full">
      <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
        Cursos
      </h3>

      <div className="flex flex-col w-full">
        {coursesData.map((course, idx) => {
          const isOpen = !!openItems[idx];
          const isFirst = idx === 0;
          const isLast = idx === coursesData.length - 1;

          return (
            <div key={course.id} className="w-full">
              <button
                type="button"
                className={`w-full flex py-3.5 px-5 justify-between items-center border border-primary-border bg-transparent text-left cursor-pointer transition-all duration-300 text-title hover:bg-secondary-bg/50 ${
                  !isFirst ? "border-t-0" : "rounded-t"
                } ${isLast && !isOpen ? "rounded-b" : ""} ${
                  isOpen ? "bg-secondary-bg" : ""
                }`}
                onClick={() => toggleAccordion(idx)}
              >
                <span className="text-title font-medium text-base">
                  {course.title}
                </span>

                <ChevronDown
                  className={`size-4 text-icon transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  className={`p-6 flex flex-col items-start gap-2.5 border border-primary-border border-t-0 text-text leading-relaxed text-base bg-transparent ${
                    isLast ? "rounded-b" : ""
                  }`}
                >
                  <p>
                    {course.institution}. {course.date}. {course.duration}.
                  </p>

                  <p>{course.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
