

export default function Header() {
  return (
    <header className="flex flex-row flex-wrap justify-between items-center w-full py-2 px-4 z-2">
      <nav className="">
        <ul className="flex items-center bg-primary-bg gap-4">
        </ul>
      </nav>
      <div className="w-13 h-13">
        <a href="#home">
          <img className="w-13 h-13" src="" alt="Logo EA" />
        </a>
      </div>
      <div className="flex justify-end">
        <i className="text-2xl text-primary cursor-pointer transition-all duration-400 ease-in-out bi bi-sun"></i>
      </div>
    </header>
  );
}
