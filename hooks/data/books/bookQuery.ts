import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";

const bookQuery = (id : string) => ({
  queryKey: ["books"],
  queryFn: async () => {
    const url = await getEndpoint({  resourse: "books", action: "getBookId" });
    return await CRUDData({ method: "GET", url: url(id) });
  },
});
export { bookQuery };
