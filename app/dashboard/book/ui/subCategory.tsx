'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useEffect, useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import useSubCategories from '@/hooks/data/books/subCategories/useSubCategories';
import AddWindow from './addTools/addWindow';
import { useDeletesubcategory } from '@/hooks/data/books/subCategories/deleteSubcategory';

const url = getEndpoint({ resourse: "subcategories", action: "createSubCategory" });

export default function SubCategory({ defaultValue, category_id ,error}: { defaultValue: string, category_id: string , error?: string[]}) {
  const [value, setValue] = useState<string>(defaultValue);
  const { data: subcategories } = useSubCategories();
  const deleteSubcategory=useDeletesubcategory();
  const handleDeleteOption = (id: string) => {
    deleteSubcategory.mutate(id); 
  };

  const filteredSubcategories = subcategories?.data?.filter((item) => item.category_id === category_id);
  const Options = filteredSubcategories?.map((item) => ({ label: item.name, value: item.id }));

  useEffect(() => {
    // Ensure the default value exists in the options
    const defaultOption = Options?.find(option => option.value === defaultValue);
    if (defaultOption) {
      setValue(defaultOption.value);
    } else {
      setValue(''); // Clear the selection if the default value is invalid
    }
  }, [Options, defaultValue]); // Added dependencies

  return (
    <div>
      <label className="block font-semibold">الفئة الفرعية</label>
      <div className="flex items-center gap-2">
        <SelectGeneric
          options={Options ?? []}
          placeholder="أدخل الفئة الفرعية"
          name="subCategory"
          selectedValue={value} // Set the selected value
          setSelectedValue={setValue}
          handelDeleteOption={handleDeleteOption} // Add the delete option handler to the select component
        />
        <AddWindow
          title="إضافة فئة فرعية"
          placeholder="أدخل اسم الفئة الفرعية"
          url={url()}
          resourse='subcategories'
          category_id={category_id}
        />
      </div>
      {error?.map((err, index) => (
          <p key={index} className="text-red-500 mt-2">{err}</p>
        ))}
    </div>
  );
}
