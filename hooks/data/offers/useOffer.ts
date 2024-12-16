"use client";
import { useQuery } from "@tanstack/react-query";
import { offerQuery } from "./offerQuery";

export default function useOffer(offerId: string) {
  const query = useQuery(offerQuery(offerId)); 
  return query;
}
