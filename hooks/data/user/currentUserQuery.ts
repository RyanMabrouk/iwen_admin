import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";
import { Tables } from "@/types/database.types";
const currentUserQuery = () => ({
  queryKey: ["user"],
  queryFn: async () => {
    const url = await getEndpoint({  resourse: "users", action: "getCurrentUser" });
    return await CRUDData<Tables<"users">>({ method: "GET", url: url() });
  },
});

export { currentUserQuery };
