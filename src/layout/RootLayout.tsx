import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import NavMobile from "../components/shared/NavMobile";

export function RootLayout() {
  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden ">
      <Header className="hidden md:flex"/>
      <NavMobile className="flex md:hidden"/>
      <main className="flex flex-1 flex-col min-h-0 overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
}
