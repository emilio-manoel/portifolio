import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";

export function RootLayout() {
    return (
        <div className="flex h-dvh w-full flex-col overflow-hidden ">
            <Header />
            <main className="flex flex-1 flex-col min-h-0 overflow-hidden relative">
                <Outlet />
            </main>
        </div>
    )
}