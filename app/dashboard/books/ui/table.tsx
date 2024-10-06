"use client";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useBooks from "@/hooks/data/books/useBooks";
import { booksQuery } from "@/hooks/data/books/booksQuery";
import { Pagination } from "@mui/material";
import { useBooksPagination } from "../context/useBooksPagination";

export default function Table({ searchQuery }: { searchQuery: string }) {
  const {page, setPage} = useBooksPagination();
  const limit = 8;
  const { data: books, isLoading } = useBooks({
    pagination :{
        page,
        limit
    },
    search: { columns: ["title"], value: searchQuery },
  }); 
  const queryClient = useQueryClient();
  useEffect(() => {
    if (books?.meta?.has_next_page) {
      queryClient.prefetchQuery(
        booksQuery({
            pagination :{
                page,
                limit
            },
            search: { columns: ["title"], value: searchQuery },
          }),
      );
    }
  }, [page, books?.meta?.has_next_page, queryClient]);
  
  if (!books?.data?.length) {
    return <div>No products found</div>;
  }
  return (
    <div>
      <Pagination
        className="flex w-full justify-center mt-5"
        count={books?.meta?.total_pages}
        page={page}
        boundaryCount={3}
        siblingCount={3}
        onChange={(e, value) => setPage(value)}
      />
    </div>
  );
}
