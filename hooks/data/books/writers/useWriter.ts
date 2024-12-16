"use client";
import { useQuery } from "@tanstack/react-query";
import { writerQuery } from "./writerQuery";

export default function useWriter(authorId: string) {
  const query = useQuery((writerQuery(authorId))); 
  return query;
}
