import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FBFBFB]">
      <Sidebar />
      <Header />
      <main className="lg:ml-72 grid flex-1 items-start gap-4 p-6 sm:px-6 sm:py-0 md:gap-8">
        <Outlet />
      </main>
    </div>
  );
}
