"use server"; 

import axios from 'axios';
export default async function addDataToTable(tableName: string, data: Record<string, any>) {
    try {
        const response = await axios.post(`/api/${tableName}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data; 
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            return { error: error.response.data.message || 'Failed to add data to the table' };
        } else {
            return { error: 'An unknown error occurred' };
        }
    }
}
