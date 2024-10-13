"use client";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useBooks from "@/hooks/data/books/useBooks";
import { booksQuery } from "@/hooks/data/books/booksQuery";
import { columns } from "./columns"; // Ensure this includes new column definitions
import { IBookPopulated } from "@/types";
import { useBooksPagination } from "../context/useBooksPagination";
import { GenericTableData } from "@/components/genericTableData";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Table() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIds,setSelectedIds] = useState<string[]>([]);

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
    category: book.categories.length > 0 ? book.categories[0].name : "لا يوجد تصنيف",
    subcategory: book.subcategories.length > 0 ? book.subcategories[0].name : "لا توجد فئة فرعية",
    writer_id: book.writer?.name ?? "لا يوجد كاتب",
    share_house_id: book.share_house?.name ?? "لا يوجد دار نشر",
    cover_type_id: book.cover_type?.name ?? "لا يوجد نوع غلاف",
    discount_type_arabic : book.discount_type == "percentage" ? "نسبة مئوية" : "قيمة مالية",
    status_arabic : book.status == "available" ? "متوفر" : "غير متوفر",
  })) || [];
  



  return (
    <div>
<GenericTableData
  data={transformedBooksData}
  columns={columns({ selectedIds, setSelectedIds })} // Pass as arguments to columns
  setSearchQuery={setSearchQuery}
  page={page}
  setPage={setPage}
  searchQuery={searchQuery}
  total_pages={books?.data?.meta.total_pages ?? 0}
  total_counts={books?.data?.meta.total_count ?? 0}
  selectedIds={selectedIds}
  setSelectedIds={setSelectedIds}
  isLoading={isLoading}
/>
  
    </div>
  );
  
}
