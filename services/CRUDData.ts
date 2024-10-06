'use server';
import axios from 'axios';
import { API_URL } from './constants';
import { cookies } from 'next/headers';

export type CRUDMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export default async function CRUDData<T>({
  pagination,
  url,
  method,
  payload,
  search, // New search parameter
}: {
  pagination?: {
    limit: number;
    page: number;
  };
  url: string;
  method: CRUDMethod;
  payload?: Record<string, any>;
  search?: { columns: string[]; value: string };
}): Promise<{ data: T | null; error: string | null; totalPages?: number }> {
 
  let paginatedUrl = url;

  if (pagination) {
    const { limit, page } = pagination;
    const start = (page - 1) * limit;
    paginatedUrl += `?start=${start}&limit=${limit}`;
  }

  if (search && search.value) {
    const searchParams = search.columns.map((column) => `${column}=ilike.%${search.value}%`).join('&');
    paginatedUrl += (paginatedUrl.includes('?') ? '&' : '?') + searchParams;
  }
  const options = {
    method: method,
    url: paginatedUrl,
    data: payload || {}
  };

  try {
    const token = cookies()
      .get('sb-mqisujmkeqaqwppsnnww-auth-token')
      ?.value.replace('base64-', '')
      .replace(' ', '');
    const decodedToken = JSON.parse(atob(token ?? '')) as unknown as {
      access_token: string;
    };

    const api = axios.create({
      baseURL: API_URL,
      timeout: 0,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${decodedToken.access_token}`,
      },
    });

    const response = await api.request(options);

    const totalItems = response.headers['x-total-count'];
    const totalPages = pagination ? Math.ceil(totalItems / pagination.limit) : 1;

    return { data: response.data, error: null, totalPages };
  } catch (error: any) {
    console.log(error.response?.data);
    return {
      error: error.response?.data?.message || error.message,
      data: null,
    };
  }
}
