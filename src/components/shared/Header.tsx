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
    <header className="w-full z-40 md:fixed md:top-0 md:left-0 md:right-0 md:border-b md:border-primary-border bg-primary-bg/95 md:backdrop-blur-sm">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 py-3 flex flex-row justify-between items-center">
        {/* Navegação Desktop */}
        <nav className="hidden md:flex md:flex-1">
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
        <div className="flex items-center justify-center">
          <a href="#home" aria-label="Voltar para a página inicial">
            <img
              className="w-10 h-10 md:w-11 md:h-11 object-contain transition-transform hover:scale-105 [html[data-theme='light']_&]:invert"
              src={logoImg}
              alt="Logo EA"
            />
          </a>
        </div>

        {/* Botão Alternar Tema */}
        <div className="flex justify-end md:flex-1">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="text-primary cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center p-2 bg-transparent border-none"
          >
            {theme === "dark" ? (
              <Sun className="size-5 text-primary" />
            ) : (
              <Moon className="size-5 text-primary" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
