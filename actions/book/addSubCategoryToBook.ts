"use server";
import { booksEndpoints } from '@/endpoints/booksRoutes';
import api from '@/services/axios.config';

export async function addSubCategoryToBook(bookId: string, subCategoryId: string): Promise<any> {
    const url = booksEndpoints.addSubCategory(bookId, subCategoryId);
  
    const options = {
      method: 'POST',
      url: url
    };
  
    try {
      const response = await api.request(options);
      return response.data;
    } catch (error: any) {
      return { error: error.response?.data?.message || error.message };
    }
  }
  