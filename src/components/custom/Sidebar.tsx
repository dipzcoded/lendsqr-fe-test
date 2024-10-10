import { Package2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { DashBoardIcon, BriefCaseIcon, ArrowDown2Icon } from "@/assets";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-72 flex-col  bg-white lg:flex shadow-sidebarShadow lg:pt-32 overflow-y-auto">
      <nav className="flex flex-col gap-10 px-6 sm:py-5">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <BriefCaseIcon />{" "}
            <div className="flex items-center gap-3">
              <span>Switch Organization</span>
              <ArrowDown2Icon />
            </div>
          </div>
          <div>
            <DashBoardIcon /> <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>

        <div></div>
      </nav>
    </aside>
  );
}
