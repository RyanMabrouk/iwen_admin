import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";
import { IOffer } from "@/types";

const offerQuery = (offerId : string) => ({
  queryKey: ["offers",offerId],
  queryFn: async () => {
    const url = getEndpoint({  resourse: "offers", action: "getOffer" });
    return await CRUDData<IOffer>({ method: "GET", url: url(offerId) });
  },
  enabled : offerId!==null
});
export { offerQuery };
