"use client";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useBooks from "@/hooks/data/books/useBooks";
import { booksQuery } from "@/hooks/data/books/booksQuery";
import { columns } from "./columns"; // Ensure this includes new column definitions
import { IBookPopulated } from "@/types";
import { useBooksPagination } from "../context/useBooksPagination";
import { GenericTableData } from "@/components/genericTableData";
export default function Table() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { page , setPage} = useBooksPagination();
  const limit = 8;

  const { data: books, isLoading } = useBooks({
    page,
    limit,
    search: 
       {
          'books.title': [
            {
              operator: 'ilike',
              value: `%${searchQuery}%`, // Add wildcards for partial matching
            },
          ],
        }
  });
  
  
  const queryClient = useQueryClient();
  
  useEffect(() => {
    if (books?.data?.meta?.has_next_page) {
      queryClient.prefetchQuery(
        booksQuery({
          page: page + 1,
          limit,
          search: 
          {
             'books.title': [
               {
                 operator: 'ilike',
                 value: `%${searchQuery}%`, // Add wildcards for partial matching
               },
             ],
           }
        })
      );
    }
  }, [page, books?.data?.meta?.has_next_page, queryClient, searchQuery]); // Add searchQuery to the dependency array
  
  const transformedBooksData = books?.data?.data?.map((book: IBookPopulated) => ({
    ...book,
    category: book.categories.length > 0 ? book.categories[0].name : "No Category",
    subcategory: book.subcategories.length > 0 ? book.subcategories[0].name : "No Subcategory",
    writer_id: book.writer?.name ?? "No Writer",
    share_house_id: book.share_house?.name?? "No Share House",
    cover_type_id: book.cover_type?.name ?? "No Cover Type",
  })) || [];  



  return (
    <div>
      <GenericTableData  data={transformedBooksData} columns={columns}  setSearchQuery={setSearchQuery} page={page} setPage={setPage} searchQuery={searchQuery} total_pages={books?.data?.meta.total_pages ?? 0}/>
  
    </div>
  );
  
}
