"use server";
import { booksEndpoints } from '@/endpoints/booksRoutes';
import api from '@/services/axios.config';

export async function removeCategoryFromBook(bookId: string, categoryId: string): Promise<any> {
    const url = booksEndpoints.removeCategory(bookId, categoryId);
  
    const options = {
      method: 'DELETE',
      url: url
    };
  
    try {
      const response = await api.request(options);
      return response.data;
    } catch (error: any) {
      return { error: error.response?.data?.message || error.message };
    }
  }