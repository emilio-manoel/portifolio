import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme.mts";
import logoImg from "../../assets/logo-ea.png";

export default function Header() {
  const themeContext = useTheme();
  const theme = themeContext?.theme ?? "dark";
  const toggleTheme = themeContext?.toggleTheme ?? (() => {});
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="flex flex-row justify-between items-center w-full py-2 px-4 z-40 md:fixed md:top-0 md:left-0 md:right-0 md:border-b md:border-primary-border md:py-4 md:px-24 2xl:px-60 md:bg-primary-bg md:flex-nowrap">
      {/* Navegação Desktop */}
      <nav className="hidden md:flex md:min-w-[30%]">
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                className={`flex items-center text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                  activeLink === link.href
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
              >
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Brand Logo */}
      <div className="flex items-center">
        <a href="#home">
          <img
            className="w-13 h-13 object-contain transition-transform hover:scale-105 [html[data-theme='light']_&]:invert"
            src={logoImg}
            alt="Logo EA"
          />
        </a>
      </div>

      {/* Botão Alternar Tema */}
      <div className="flex justify-end md:min-w-[30%]">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Alternar tema"
          className="text-primary cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center p-2 bg-transparent border-none"
        >
          {theme === "dark" ? (
            <Sun className="size-6 text-primary" />
          ) : (
            <Moon className="size-6 text-primary" />
          )}
        </button>
      </div>
    </header>
  );
}
