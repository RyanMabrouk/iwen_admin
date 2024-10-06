"use client";
import { useQuery } from "@tanstack/react-query";
import { booksQuery } from "./booksQuery";
export default function useBooks({pagination,search}:{ pagination?:{
  limit: number;
  page: number;
};
search?: { columns: string[]; value: string };

} = {}) {
  const query = useQuery(booksQuery({ pagination, search}));
  return query;
}
