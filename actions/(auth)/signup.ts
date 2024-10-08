"use server";
import { createClient } from "@/lib/supabase";
import CRUDData from "@/services/CRUDData";
import getEndpoint from "@/services/getEndpoint";
import { Enums } from "@/types/database.types";
import { headers } from "next/headers";
import { getEndPoints } from "recharts/types/cartesian/ReferenceLine";
import { getUniqPayload } from "recharts/types/util/payload/getUniqPayload";

export default async function signUp({
  email,
  password,
  first_name,
  last_name,
  roles,
}: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  roles?: Enums<"roles_enum">[];
}) {
  if (!email || !password || !first_name || !last_name) {
    return {
      error: { message: "Email, password, first name, and last name are required.", type: "Validation Error" },
      data: null,
    };
  }
  const headersList = headers();
  const header_url = headersList.get("host") || "";
  const proto = headersList.get("x-forwarded-proto") || "http";
  const supabase = createClient();
  const { data, error: signUpErr } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${proto}://${header_url}/auth/callback`,
    },
  });

  if (signUpErr) {
    return {
      error: { message: signUpErr.message, type: "SignUp Error" },
      data: null,
    };
  }

  if (!data?.user || data.user.identities?.length === 0) {
    return {
      error: { message: "You already have an account", type: "SignUp Error" },
      data: null,
    };
  }
  const payload ={
    first_name,
    last_name,
    roles,
  }
  const url = getEndpoint({resourse : "users" , action: "updateUser"})

  const userId = data.user.id;
  const {error :updateError} = await CRUDData({ method: "PATCH", url: url(userId), payload });
  if (updateError) {
    return {
      error: { message: updateError, type: "Update Error" },
      data: null,
    };
  }


  return { data, error: null };
}
