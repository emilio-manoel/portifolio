import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import NavMobile from "../components/shared/NavMobile";

export function RootLayout() {
  return (
    <div className="min-h-screen w-full bg-primary-bg text-text flex flex-col">
      <Header />
      <NavMobile />
      <div className="flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
}
