"use client";
import { useQuery } from "@tanstack/react-query";
import { bookQuery } from "./bookQuery";
export default function useBook(id: string) {
  const query = useQuery(bookQuery(id));
  return query;
}
