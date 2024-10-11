import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FBFBFB]">
      <Sidebar />
      <Header />
      <main className="lg:ml-72 sm:mt-28 grid flex-1 items-start gap-4 p-6 sm:px-10 sm:py-8 md:gap-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
