import { useState, useEffect } from "react";
import { Home, Layers, User, Mail } from "lucide-react";

export default function NavMobile() {
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Projetos", href: "#projetos", icon: Layers },
    { label: "Sobre", href: "#sobre", icon: User },
    { label: "Contato", href: "#contato", icon: Mail },
  ];

  return (
    <nav className="block md:hidden">
      <ul className="w-screen fixed bottom-0 left-0 z-50 flex items-center justify-between border-t border-primary-border bg-primary-bg py-2 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeLink === item.href;
          return (
            <li key={item.label} className="w-full">
              <a
                className={`flex flex-col items-center justify-center py-2 px-4 gap-1 transition-colors ${
                  isActive ? "text-primary" : "text-text hover:text-primary"
                }`}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
              >
                <Icon className="size-6" />
                <span className="text-[0.75rem] uppercase tracking-wider">
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
