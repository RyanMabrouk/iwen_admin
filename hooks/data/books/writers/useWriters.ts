'use client';
import { useQuery } from '@tanstack/react-query';
import { writersQuery } from './writersQuery';
import { InfinityPaginationQueryType } from '@/types';
import { Tables } from '@/types/database.types';
export default function useWriters(
  args: InfinityPaginationQueryType<`writers.${keyof Tables<'writers'>}`>
) {
  const query = useQuery(writersQuery(args));
  return query;
}
