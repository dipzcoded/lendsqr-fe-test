import {
  DottedMenuIcon,
  ActivateUserIcon,
  EyesOpenIcon,
  BlackListUserIcon,
} from "@/assets";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "./column";
import { useNavigate } from "react-router-dom";
type Prop = {
  user: User;
};
export default function ColumnDropdownMenu({ user }: Prop) {
  const navigate = useNavigate();

  function onView() {
    localStorage.setItem("userData", JSON.stringify(user));
    navigate(`/users/${user.id}`);
  }

  return (
    <div className="grid place-content-center">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button className="bg-transparent flex items-center border-none hover:bg-transparent">
            <DottedMenuIcon className="text-[#545F7D]" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-40 rounded-md py-4 px-2 bg-white flex flex-col gap-2.5 shadow-userDataShadow">
          <DropdownMenuItem
            className="font-medium text-[#545F7D] text-sm p-2.5 cursor-pointer rounded-md bg-transparent  flex items-center gap-2"
            onClick={onView}
          >
            
            <EyesOpenIcon /> <span>View Details</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="font-medium text-[#545F7D] text-sm p-2.5 cursor-pointer rounded-md bg-transparent hover:bg-[#F1F2F3] flex items-center gap-2">
            <BlackListUserIcon /> <span>Blacklist User</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="font-medium text-[#545F7D] text-sm p-2.5 cursor-pointer rounded-md bg-transparent flex items-center gap-2">
            <ActivateUserIcon /> <span>Activate User</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
