'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import useCategories from '@/hooks/data/books/categories/useCategories';
import getEndpoint from '@/services/getEndpoint';
import AddWindow from './addTools/addWindow';
import { useDeleteCategory } from '@/hooks/data/books/categories/deleteCategory';

const url = getEndpoint({ resourse: "categories", action: "createCategory" });

export default function Category({ category_id, setCategory_id , errors}: { category_id: string, setCategory_id: (option: string) => void; errors?: string[]}) {
  const { data: categories } = useCategories();
  const deleteCategory = useDeleteCategory(); // Initialize the mutation
  const Options = categories?.data?.map((item) => ({ label: item.name, value: item.id }));

  const handleDeleteOption = (id: string) => {
    deleteCategory.mutate(id); 
  };

  return (
    <div>
      <label className="block font-semibold">الفئة</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          selectedValue={category_id}
          setSelectedValue={setCategory_id}
          options={Options ?? []}
          placeholder="أدخل الفئة"
          name="category"
          handelDeleteOption={handleDeleteOption} // Pass the delete handler
        />
        <AddWindow
          title="إضافة فئة"
          placeholder="أدخل اسم الفئة"
          url={url()}
          resourse='categories'
        />
      </div>
      {errors?.map((err, index) => (
        <p key={index} className="text-red-500 mt-2">{err}</p>
      ))}
    </div>
  );
}
