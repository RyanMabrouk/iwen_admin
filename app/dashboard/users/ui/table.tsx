'use client';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { columns } from './columns'; 
import { GenericTableData } from '@/components/genericTableData';
import useUsers from '@/hooks/data/user/useUsers';
import { usersQuery } from '@/hooks/data/user/usersQuery';
import { Tables } from '@/types/database.types';
import { Player } from '@lottiefiles/react-lottie-player';
export default function Table() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [page, setPage] = useState<number>(1); 
  const limit = 8;

  const { data: users, isLoading } = useUsers({
    page,
    limit,
    search: {
      'users.first_name': [
        {
          operator: 'ilike',
          value: `%${searchQuery}%` // Add wildcards for partial matching
        }
      ],
      'users.last_name': [
        {
          operator: 'ilike',
          value: `%${searchQuery}%` // Add wildcards for partial matching
        }
      ]
    }
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    if (users?.data?.meta?.has_next_page) {
      queryClient.prefetchQuery(
        usersQuery({
          page: page + 1,
          limit,
          search: {
            'users.first_name': [
              {
                operator: 'ilike',
                value: `%${searchQuery}%`
              }
            ]
          }
        })
      );
    }
  }, [page, users?.data?.meta?.has_next_page, queryClient, searchQuery]); 

  const transformedUsersData = users?.data?.data?.map((user: Tables<"users">) => ({
    ...user,
    role: user.roles?.includes("admin") ? "مسؤل" : "مستخدم",
  })) || [];
  
  if (isLoading) {
    return (
      <div className="m-auto flex min-h-screen items-center justify-center">
      <Player
        className="m-auto"
        autoplay
        loop
        src="/loading.json"
        style={{ height: "10rem", width: "10rem" }}
      />
    </div>
    );}
  return (
    <div>
      <GenericTableData
        data={transformedUsersData}
        columns={columns} 
        setSearchQuery={setSearchQuery}
        page={page}
        setPage={setPage}
        searchQuery={searchQuery}
        total_pages={users?.data?.meta.total_pages ?? 0}
        total_counts={users?.data?.meta.total_count ?? 0}

      />
    </div>
  );
}
