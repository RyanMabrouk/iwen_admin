"use server";
import { createClient } from "@/lib/supabase";

export default async function userOrdersCount(user_id: string) {
  const supabase = createClient();

  const { count, error } = await supabase
    .from("orders")
    .select("*", { count: "exact", head: true }) 
    .eq("user_id", user_id);
  if (error) {
    console.error("Error counting orders:", error);
    return null;
  }

  return count;
}
