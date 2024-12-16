import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";
import { Tables } from "@/types/database.types";

const writerQuery = (writerId : string) => ({
  queryKey: ["writers",writerId],
  queryFn: async () => {
    const url =  getEndpoint({  resourse: "writers", action: "getwriter" });
    return await CRUDData<Tables<"writers">>({ method: "GET", url: url(writerId) });
  },
  enabled : writerId!==null
});
export { writerQuery };
