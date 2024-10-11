import { Logo } from "@/assets";
import MobileNav from "./MobileNav";
import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";

export default function Header() {
  return (
    <header className="sticky top-0 z-30  flex h-20 items-center gap-4 border-b border-none bg-white shadow-headerShaodw  px-4 sm:fixed sm:w-full sm:h-auto sm:px-6 sm:py-7 ">
      <MobileNav />
      <div className="relative ml-auto flex-1 flex sm:gap-16 items-center justify-between">
        <Logo className="hidden lg:block" />
        <div className="flex-1 px-2 lg:px-8 sm:px-4 flex justify-between items-center max-sm:justify-end">
          <HeaderSearch />
          <HeaderNotification />
        </div>
      </div>
    </header>
  );
}
