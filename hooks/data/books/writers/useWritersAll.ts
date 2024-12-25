'use client';
import { useQuery } from '@tanstack/react-query';
import { writersAllQuery } from './writersAllQuery';

export default function useWritersAll() {
  const query = useQuery(writersAllQuery());
  return query;
}
