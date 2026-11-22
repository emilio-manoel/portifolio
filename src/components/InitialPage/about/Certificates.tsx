import { Award, FileText, ExternalLink } from "lucide-react";
import certificatesData from "./json/certificates.json";

export default function AboutCertificates() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="flex flex-col gap-5 w-full pt-8 border-t border-primary-border">
      <div className="flex items-center gap-2.5">
        <Award className="size-5.5 text-primary" />
        <h3 className="text-xl sm:text-2xl font-light uppercase font-spartan text-title text-left tracking-wide">
          Certificados
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {certificatesData.map((categoryGroup) =>
          categoryGroup.items.map((item) => {
            const fileUrl = `${baseUrl}${item.file}`;
            const isPdf = item.type === "pdf";

            return (
              <a
                key={item.file}
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-lg border border-secondary-border bg-secondary-bg/50 hover:bg-secondary-bg hover:border-primary transition-all duration-200 group"
              >
                {isPdf ? (
                  <FileText className="size-7 text-primary shrink-0 group-hover:scale-105 transition-transform" />
                ) : (
                  <img
                    src={fileUrl}
                    alt={item.title}
                    className="size-11 rounded object-cover border border-secondary-border shrink-0 group-hover:scale-105 transition-transform"
                  />
                )}

                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[0.7rem] text-primary font-medium truncate uppercase tracking-wider">
                    {categoryGroup.category}
                  </span>
                  <span className="text-xs sm:text-sm text-title font-medium truncate">
                    {item.title}
                  </span>
                  <span className="text-[0.7rem] text-text uppercase">
                    {item.type}
                  </span>
                </div>

                <ExternalLink className="size-4 text-icon shrink-0 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}
