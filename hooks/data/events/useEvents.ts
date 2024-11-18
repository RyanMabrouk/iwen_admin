"use client";
import { useQuery } from "@tanstack/react-query";
import { InfinityPaginationQueryType } from "@/types";
import { Tables } from "@/types/database.types";
import { eventsQuery } from "./eventsQuery";
export default function useEvents(args:InfinityPaginationQueryType<`events.${keyof Tables<"events">}`>) {
  const query = useQuery(eventsQuery(args));
  return query;
}
