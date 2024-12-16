"use client";
import { useQuery } from "@tanstack/react-query";
import { offersQuery } from "./offersQuery";

export default function useOffers() {
  const query = useQuery(offersQuery());
  return query;
}
