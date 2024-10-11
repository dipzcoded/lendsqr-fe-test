import { Link, NavLink, useLocation } from "react-router-dom";
import {
  DashBoardIcon,
  BriefCaseIcon,
  ArrowDown2Icon,
  SignoutIcon,
} from "@/assets";
import { navLinks } from "@/constants/navlinks.constant";

export default function Sidebar() {
  const location = useLocation(); // Get the current location
  const { pathname } = location;

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-72 flex-col  bg-white lg:flex shadow-sidebarShadow lg:pt-32 overflow-y-auto">
      <nav className="flex flex-col gap-10  sm:py-5">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2.5 px-8">
            <BriefCaseIcon className="opacity-80" />{" "}
            <div className="flex items-center gap-3 cursor-pointer">
              <span className="font-worksans font-normal text-base text-[#213F7D]">
                Switch Organization
              </span>
              <ArrowDown2Icon className=" text-[#213F7D]" />
            </div>
          </div>
          <div className="flex items-center px-8 py-3.5 gap-2.5 hover:bg-opacity-[6%] opacity-60 hover:bg-[#39CDCC] hover:opacity-100">
            <DashBoardIcon className="" />{" "}
            <Link
              to="/dashboard"
              className="text-[#213F7D] font-normal font-worksans"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <div className="flex flex-col gap-5" key={link.header}>
              <h3 className="pl-6 font-worksans font-medium text-[#545F7D] text-sm uppercase">
                {link.header}
              </h3>
              <div className="flex flex-col gap-2">
                {link.links.map((navlink) => (
                  <NavLink
                    to={navlink.url}
                    key={navlink.label}
                    className={({ isActive }) =>
                      `flex items-center relative p-3.5 font-worksans text-base text-[#213F7D] hover:bg-opacity-[6%] hover:bg-[#39CDCC] hover:opacity-100 transition pl-6 gap-3 ${
                        isActive
                          ? "opacity-100 bg-opacity-[6%] bg-[#39CDCC] "
                          : "opacity-60"
                      }`
                    }
                  >
                    {pathname.toLowerCase().includes(navlink.url.toLowerCase()) && (
                      <div className="bg-[#39CDCC] h-full w-1.5 absolute left-0" />
                    )}
                    <navlink.icon />
                    <span className="font-worksans">{navlink.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto border-t py-5 border-opacity-[10%] border-[#213F7D] ">
          <div className="pl-6 flex items-center gap-3 font-worksans text-[#213F7D] cursor-pointer">
            <SignoutIcon />
            <span className="text-base font-normal">Logout</span>
          </div>
        </div>
      </nav>
    </aside>
  );
}
