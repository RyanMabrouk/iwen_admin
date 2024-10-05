"use server";
import { booksEndpoints } from '@/endpoints/booksRoutes';
import api from '@/services/axios.config';

export async function removeSubCategoryFromBook(bookId: string, subCategoryId: string): Promise<any> {
    const url = booksEndpoints.removeSubCategory(bookId, subCategoryId);
  
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