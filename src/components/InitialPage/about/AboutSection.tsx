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
      className="max-w-6xl 2xl:max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-10 md:py-16 flex flex-col gap-12 md:gap-16"
    >
      <AboutBio photoUrl={photoUrl} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-2">
        <div className="lg:col-span-7">
          <AboutExperience />
        </div>
        <div className="lg:col-span-5">
          <AboutCourses />
        </div>
      </div>

      <AboutCertificates />
    </section>
  );
}
