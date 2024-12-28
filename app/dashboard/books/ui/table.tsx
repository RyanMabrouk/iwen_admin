'use client';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import useBooks from '@/hooks/data/books/useBooks';
import { booksQuery } from '@/hooks/data/books/booksQuery';
import { columnDefinitions, columns } from './columns';
import { IBookPopulated } from '@/types';
import { useBooksPagination } from '../context/useBooksPagination';
import { GenericTableData } from '@/components/genericTableData';
import { Separator } from '@/components/ui/separator';
import { SwitchGeneric } from '@/components/switchGeneric';

export default function Table() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const { page, setPage } = useBooksPagination();
  const limit = 8;
  const { data: books, isLoading } = useBooks({
    page,
    limit,
    search: {
      'books.title': [
        {
          operator: 'ilike',
          value: `%${searchQuery}%`
        }
      ]
    }
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (books?.data?.meta?.has_next_page) {
      queryClient.prefetchQuery(
        booksQuery({
          page: page + 1,
          limit,
          search: {
            'books.title': [
              {
                operator: 'ilike',
                value: `%${searchQuery}%`
              }
            ]
          }
        })
      );
    }
  }, [page, books?.data?.meta?.has_next_page, queryClient, searchQuery]);

  const transformedBooksData =
    books?.data?.data?.map((book: IBookPopulated) => {
      return {
        ...book,
        category:
          book.categories.length > 0 ? book.categories[0].name : 'لا توجد فئة',
        subcategory:
          book.subcategories.length > 0
            ? book.subcategories[0].name
            : 'لا توجد فئة فرعية',
        writer_id: book.writer?.name ?? 'لا يوجد مؤلف',
        share_house_id: book.share_house?.name ?? 'لا يوجد دار نشر',
        cover_type_id: book.cover_type?.name ?? 'لا يوجد نوع غلاف',
        discount_type_arabic:
          book.discount_type === 'percentage' ? 'نسبة مئوية' : 'قيمة مالية',
        status_arabic: book.status === 'available' ? 'متوفر' : 'غير متوفر',
        corner_id: book.corner?.name ?? 'لا يوجد قسم'
      };
    }) || [];

  const [columnState, setColumnState] = useState(columnDefinitions);

  const toggleColumnVisibility = (accessorKey: string) => {
    setColumnState((prevState) =>
      prevState.map((col) =>
        col.accessorKey === accessorKey
          ? { ...col, visible: !col.visible }
          : col
      )
    );
  };

  return (
    <div>
      <h1 className="mt-4 text-xl font-semibold">ضبط عرض الجدول</h1>
      <div className="flex flex-wrap gap-4 pb-5 pt-3">
        {columnState.map((col) => (
          <SwitchGeneric
            key={col.accessorKey}
            label={col.header}
            checked={col.visible}
            onChange={() => toggleColumnVisibility(col.accessorKey)}
          />
        ))}
      </div>
      <Separator />

      <GenericTableData
        data={transformedBooksData}
        columns={columns({ selectedIds, setSelectedIds, columnState })}
        setSearchQuery={setSearchQuery}
        page={page}
        setPage={setPage}
        searchQuery={searchQuery}
        total_pages={books?.data?.meta.total_pages ?? 0}
        total_counts={books?.data?.meta.total_count ?? 0}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        isLoading={isLoading}
        tableName='books'
      />
    </div>
  );
}
