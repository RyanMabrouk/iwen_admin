"use client";
import { useQuery } from "@tanstack/react-query";
import { eventsQuery } from "./eventsQuery";
export default function useEvents() {
  const query = useQuery(eventsQuery());
  return query;
}
