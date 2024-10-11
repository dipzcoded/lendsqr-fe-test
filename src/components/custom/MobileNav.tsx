import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { SquareMenu } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DashBoardIcon,
  BriefCaseIcon,
  ArrowDown2Icon,
  SignoutIcon,
} from "@/assets";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "@/constants/navlinks.constant";
import logo from "@/assets/logo.svg";

export default function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="lg:hidden">
          <SquareMenu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-96 overflow-y-auto">
        <div className="flex flex-col gap-10 py-10 px-5 sm:px-6  h-full">
          {/* <Logo className="scale-75 z-20" /> */}
          <div className="self-start">
            <img src={logo} alt="logo mobile" className="scale-90" />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center gap-2.5">
                <BriefCaseIcon className="opacity-80" />{" "}
                <div className="flex items-center gap-3 cursor-pointer">
                  <span className="font-worksans font-normal text-base text-[#213F7D]">
                    Switch Organization
                  </span>
                  <ArrowDown2Icon className=" text-[#213F7D]" />
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <DashBoardIcon className="opacity-55" />{" "}
                <Link
                  to="/dashboard"
                  className="text-[#213F7D] font-normal font-worksans"
                >
                  Dashboard
                </Link>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {navLinks.map((link) => (
                <AccordionItem value={link.header}>
                  <div className="flex flex-col gap-2" key={link.header}>
                    <AccordionTrigger>
                      <h3 className="font-worksans font-medium text-[#545F7D] text-sm uppercase">
                        {link.header}
                      </h3>
                    </AccordionTrigger>

                    <AccordionContent>
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
                            {pathname
                              .toLowerCase()
                              .includes(navlink.url.toLowerCase()) && (
                              <div className="bg-[#39CDCC] h-full w-1.5 absolute left-0" />
                            )}
                            <navlink.icon />
                            <span className="font-worksans">
                              {navlink.label}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-auto justify-self-end border-t py-5 border-opacity-[10%] border-[#213F7D]">
            <div
              className="flex items-center gap-3 font-worksans text-[#213F7D] cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              <SignoutIcon />
              <span className="text-base font-normal">Logout</span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
