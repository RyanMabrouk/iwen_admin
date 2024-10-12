import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";
import { Tables } from "@/types/database.types";
import YouAreNotAnAdmin from "./youAreNotAnAdmin";

async function AuthGuard({children}:{children:React.ReactNode}) {
    const url =  getEndpoint({  resourse: "users", action: "getCurrentUser" });
    const {data : profile} =await CRUDData<Tables<"users">>({ method: "GET", url: url() });
    const isAdmin = profile?.roles.includes("admin")
   
    return (
    <>{
    isAdmin ? children : <YouAreNotAnAdmin />
    }</>
    )
   }
   
   export default AuthGuard