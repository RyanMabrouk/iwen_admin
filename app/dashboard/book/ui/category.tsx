'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import useCategories from '@/hooks/data/books/categories/useCategories';
import getEndpoint from '@/services/getEndpoint';
import AddWindow from './addTools/addWindow';

const url = getEndpoint({  resourse: "categories", action : "createCategory" });


export default function Category({category_id,setCategory_id}:{ category_id:string, setCategory_id:(option: string) => void; }) {
  const {data:categories} = useCategories()
  const Options = categories?.data?.map((item) => ({ label: item.name, value: item.id }));
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
        />
        <AddWindow
          title="إضافة فئة"
          placeholder="أدخل اسم الفئة"   
          url={url()}   
          resourse='categories' 
        />
      </div>
    </div>
  );
}
