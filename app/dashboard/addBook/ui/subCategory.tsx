'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import AddWindow from './addTools/addWindow';
import getEndpoint from '@/services/getEndpoint';
import useSubCategories from '@/hooks/data/books/subCategories/useSubCategories';

const url = getEndpoint({  resourse: "subcategories", action : "createSubCategory" });

export default function SubCategory() {
  const {data: subcategories} = useSubCategories();
  const Options = subcategories?.data?.map((item) => ({ label: item.name, value: item.id }));
  return (
    <div>
      <label className="block font-semibold">الفئة الفرعية</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          options={Options ?? []}
          placeholder="أدخل الفئة الفرعية"
          name="subCategory"
        />
        <AddWindow       
          title="إضافة فئة فرعية" 
          placeholder="أدخل اسم الفئة الفرعية" 
          url={url()}  
          resourse='subcategories'
          /> 
      </div>
    </div>
  );
}
