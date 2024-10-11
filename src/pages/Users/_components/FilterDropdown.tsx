import { Button } from "@/components/ui/button";
import { FilterIcon } from "@/assets";

export default function FilterDropdown() {
  return (
    <div className="flex justify-end">
      <Button className="bg-[#39CDCC] hover:bg-[#39CDCC] text-white font-worksans text-sm font-medium flex items-center justify-center gap-2 px-4 py-6 rounded-md">
        <FilterIcon className="text-white" />
        <span>Filter</span>
      </Button>
    </div>
  );
}
