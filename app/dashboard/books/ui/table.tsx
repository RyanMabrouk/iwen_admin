"use client";
import React, { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useBooks from "@/hooks/data/books/useBooks";
import { booksQuery } from "@/hooks/data/books/booksQuery";
import { columns } from "./columns"; // Ensure this includes new column definitions
import { IBookPopulated } from "@/types";
import { useBooksPagination } from "../context/useBooksPagination";
import DataTable from "./dataTable";

export default function Table({ searchQuery }: { searchQuery: string }) {
  const { page, setPage } = useBooksPagination();
  const limit = 8;

  const { data: books, isLoading } = useBooks({
    page,
    limit,
    search: searchQuery
      ? {
          'books.title': [
            {
              operator: 'ilike',
              value: searchQuery,
            },
          ],
        }
      : undefined, 
  });
  
  const queryClient = useQueryClient();
  
  useEffect(() => {
    if (books?.data?.meta?.has_next_page) {
      queryClient.prefetchQuery(
        booksQuery({
          page: page + 1,
          limit,
          search: searchQuery
            ? {
                'books.title': [
                  {
                    operator: 'ilike',
                    value: searchQuery,
                  },
                ],
              }
            : undefined,
        })
      );
    }
  }, [page, books?.data?.meta?.has_next_page, queryClient, searchQuery]); // Add searchQuery to the dependency array
  
  if (books?.data?.meta.total_count === 0) {
    return <div>No products found</div>;
  }

  const transformedBooksData = books?.data?.data?.map((book: IBookPopulated) => ({
    ...book,
    category: book.categories.length > 0 ? book.categories[0].name : "No Category",
    subcategory: book.subcategories.length > 0 ? book.subcategories[0].name : "No Subcategory",
})) || []; // Ensure it defaults to an empty array if undefined

  return (
    <div>
     {/* <DataTable data={transformedBooksData} columns={columns} />*/
    }
    </div>
  );
  
}
