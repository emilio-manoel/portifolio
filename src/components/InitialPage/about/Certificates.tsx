import { Award, FileText, ExternalLink } from "lucide-react";
import certificatesData from "./json/certificates.json";

export default function AboutCertificates() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="flex flex-col gap-6 w-full pt-8 border-t border-primary-border">
      <div className="flex items-center gap-3">
        <Award className="size-6 text-primary" />
        <h3 className="text-[1.55rem] xl:text-[2.5rem] font-extralight uppercase font-spartan text-title text-left">
          Certificados
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="flex items-center gap-3 p-4 rounded-lg border border-secondary-border bg-secondary-bg/60 hover:bg-secondary-bg hover:border-primary transition-all duration-200 group"
              >
                {isPdf ? (
                  <FileText className="size-8 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                ) : (
                  <img
                    src={fileUrl}
                    alt={item.title}
                    className="size-12 rounded object-cover border border-secondary-border shrink-0 group-hover:scale-105 transition-transform"
                  />
                )}

                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-xs text-primary font-medium truncate">
                    {categoryGroup.category}
                  </span>
                  <span className="text-sm text-title font-medium truncate">
                    {item.title}
                  </span>
                  <span className="text-xs text-text uppercase">
                    {item.type}
                  </span>
                </div>

                <ExternalLink className="size-4 text-icon shrink-0 opacity-60 group-hover:opacity-100 group-hover:text-primary transition-opacity" />
              </a>
            );
          })
        )}
      </div>
    </div>
  );
}
