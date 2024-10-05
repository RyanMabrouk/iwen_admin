"use client";
import { useQuery } from "@tanstack/react-query";
import { booksQuery } from "./booksQuery";
export default function useBooks() {
  const query = useQuery(booksQuery());
  return query;
}
