"use client";
import { useQuery } from "@tanstack/react-query";
import { InfinityPaginationQueryType } from "@/types";
import { Tables } from "@/types/database.types";
import { bannersQuery } from "./bannersQuery";
export default function useBanners(args:InfinityPaginationQueryType<`banners.${keyof Tables<"banners">}`>) {
  const query = useQuery(bannersQuery(args));
  return query;
}
