'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useEffect, useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import useSubCategories from '@/hooks/data/books/subCategories/useSubCategories';
import AddWindow from './addTools/addWindow';

const url = getEndpoint({ resourse: "subcategories", action: "createSubCategory" });

export default function SubCategory({ defaultValue, category_id }: { defaultValue: string, category_id: string }) {
  const [value, setValue] = useState<string>(defaultValue);
  const { data: subcategories } = useSubCategories();

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
        />
        <AddWindow
          title="إضافة فئة فرعية"
          placeholder="أدخل اسم الفئة الفرعية"
          url={url()}
          resourse='subcategories'
          category_id={category_id}
        />
      </div>
    </div>
  );
}
