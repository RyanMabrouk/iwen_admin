'use server';
import axios from 'axios';
import { API_URL } from './constants';
import { cookies } from 'next/headers';
export type CRUDMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';
export default async function CRUDData<T>({
  url,
  method,
  payload
}: {
  url: string;
  method: CRUDMethod;
  payload?: Record<string, any>;
}): Promise<{ data: T | null; error: string | null }> {
  const options = {
    method: method,
    url: url,
    data: payload || {}
  };
  try {
    const token = cookies().get('sb-mqisujmkeqaqwppsnnww-auth-token')?.value.replace('base64-','').replace(' ','');
    const decodedToken = JSON.parse(atob(token ?? ""))  as unknown as  {access_token :string }
    const api = axios.create({
      baseURL: API_URL,
      timeout: 0,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: `Bearer ${decodedToken.access_token}`
      }
    });
    const response = await api.request(options);
    return { data: response.data, error: null };
  } catch (error: any) {
    console.log(error.response.data);
    return {
      
      error: error.response?.data?.message || error.message,
      data: null
    };
  }
}
