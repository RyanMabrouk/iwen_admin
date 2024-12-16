'use client';
import React, { useEffect, useState } from 'react';
import { columns } from './columns';
import { GenericTableData } from '@/components/genericTableData';
import useWriters from '@/hooks/data/books/writers/useWriters';
import { useQueryClient } from '@tanstack/react-query';
import { writersQuery } from '@/hooks/data/books/writers/writersQuery';
export default function Table() {
  const [searchQuery, setSearchQuery] = useState<string>('');


  const [page, setPage] = useState<number>(1);
  const { data: writers, isLoading } = useWriters({
    page,
    limit:8,
    search: {
      'writers.name': [
        {
          operator: 'ilike',
          value: `%${searchQuery}%`
        }
      ]
    }
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (writers?.data?.meta?.has_next_page) {
      queryClient.prefetchQuery(
        writersQuery({
          page: page + 1,
          limit:8,
          search: {
            'writers.name': [
              {
                operator: 'ilike',
                value: `%${searchQuery}%`
              }
            ]
          }
        })
      );
    }
  }, [writers, writers?.data?.meta?.has_next_page, queryClient, searchQuery]);
  return (
    <div>
      <GenericTableData
        data={writers?.data?.data ?? []}
        columns={columns}
        setSearchQuery={setSearchQuery}
        page={page}
        setPage={setPage}
        searchQuery={searchQuery}
        total_pages={writers?.data?.meta.total_pages ?? 0}
        total_counts={writers?.data?.meta.total_count ?? 0}
        isLoading={isLoading}
      />
    </div>
  );
}
