import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";

const booksQuery = () => ({
  queryKey: ["books"],
  queryFn: async () => {
    const url = await getEndpoint({ resourse: "books", action: "getBooks" });
    return await CRUDData({ method: "GET", url: url() });
  },
});

export { booksQuery };
