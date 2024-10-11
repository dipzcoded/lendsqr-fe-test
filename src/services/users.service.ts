import { User } from "@/types/api.type";
import axios from "axios";

// Get dashboard overview service
export async function getAllUsers() {
  const response = (
    await axios.get<User[]>(
      "https://api.jsonsilo.com/public/be765ece-d0ff-4df1-a498-ba9183037b93"
    )
  ).data;
  return response;
}
