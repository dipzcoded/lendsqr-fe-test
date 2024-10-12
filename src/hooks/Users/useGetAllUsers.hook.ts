import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/services/users.service";
export function useGetAllUsers() {
  const {
    isPending: isLoadingUsers,
    error: errorUsers,
    data: users,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return {
    isLoadingUsers,
    errorUsers,
    users,
    refetch,
  };
}
