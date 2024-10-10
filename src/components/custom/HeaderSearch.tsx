import { SearchIcon } from "@/assets";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function HeaderSearch() {
  return (
    <form className="flex justify-center items-center bg-white border border-[#21407d20] max-sm:w-full sm:min-w-[50%] overflow-hidden rounded-xl pl-4 ">
      <Input
        className="flex-1 border-none bg-transparent ring-white outline-none placeholder:text-[#545F7D] text-[#545F7D] font-normal text-sm placeholder:text-sm"
        placeholder="Search for anything"
      />
      <Button
        className="bg-transparent bg-[#39CDCC] p-6 rounded-none"
        type="submit"
      >
        <SearchIcon />
      </Button>
    </form>
  );
}
