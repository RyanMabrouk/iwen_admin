'use client';
import CRUDData, { CRUDMethod, TableName } from '@/services/CRUDData';
import { useMutation } from '@tanstack/react-query';

export function useCRUDData() {
  return useMutation({
    mutationFn: ({
      method,
      tableName,
      id,
      data
    }: {
      method: CRUDMethod,
      tableName: TableName,
      id?: string,
      data?: Record<string, any>
    }) => {
      return CRUDData(method, tableName, id, data);
    }
  });
}
