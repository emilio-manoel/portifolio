import AboutBio from "./Bio";
import AboutExperience from "./Experience";
import AboutCourses from "./Courses";
import AboutCertificates from "./Certificates";

interface AboutSectionProps {
  photoUrl?: string;
}

export default function AboutSection({ photoUrl }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="px-4 py-10 md:py-16 md:px-12 2xl:py-20 2xl:px-30 flex flex-col gap-12 w-full"
    >
      <AboutBio photoUrl={photoUrl} />

      <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-[minmax(0,70%)_minmax(0,30%)] lg:justify-between lg:items-start lg:gap-12 w-full pt-8">
        <AboutExperience />
        <AboutCourses />
      </div>

      <AboutCertificates />
    </section>
  );
}
