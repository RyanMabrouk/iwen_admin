import { infinityPagination } from "@/helpers/infinityPagination";
import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";

type CRUDDataResponse = {
  data?: {
    count?: number;
    [key: string]: any;
  };
  error?: any;
};
const booksQuery = (args: {
  pagination?:{
    limit: number;
    page: number;
  }
  search?: { columns: string[]; value: string };
}) => ({
  queryKey: ["books"],
  queryFn: async () => {
    const url = await getEndpoint({ resourse: "books", action: "getBooks" });
    const [data, countData] = await Promise.all([
      CRUDData({
        method: "GET",
        url: url(),
        pagination: args.pagination,
      }) as Promise<CRUDDataResponse>,
      CRUDData({
        method: "GET",
        url: url(),
        pagination: args.pagination,
      }).then((res) => ({
        count: (res as CRUDDataResponse).data?.count ?? 0, 
        error: res.error,
      })),
    ]);

    if (args.pagination) {
      return infinityPagination(Array.isArray(data?.data) ? data.data : [], {
        total_count: countData.count ?? 0,
        limit: args.pagination.limit,
        page: args.pagination.page,
      });
    } else {
      return {
        data: data?.data ?? [],
        meta: null,
        error: data.error || countData.error,
        count: countData.count,
      };
    }
  },
});

export { booksQuery };
