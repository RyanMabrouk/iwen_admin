'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import usePublishHouses from '@/hooks/data/books/publish_house/usePublishHouses';
import AddWindow from './addTools/addWindow';
import { useDeletePublishHouse } from '@/hooks/data/books/publish_house/deletePublishHouse';



const url = getEndpoint({  resourse: "publish_houses", action : "createPublishHouse" });

export default function PublishHouse({defaultValue,errors}:{defaultValue: string,errors?:string[]}) {
  const [value, setValue] = useState<string>(defaultValue);
  const deletePublishHouse = useDeletePublishHouse();
  const handleDeleteOption = (id: string) => {
    deletePublishHouse.mutate(id); 
  };

  const {data:publishHouses} = usePublishHouses();
  const Options = publishHouses?.data?.map((item) => ({ label: item.name, value: item.id }));

  return (
    <div>
      <label className="block font-semibold">الناشرون</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options ?? []} placeholder="أدخل الناشر" name="shareHouse"  selectedValue={value} setSelectedValue={setValue} handelDeleteOption={handleDeleteOption}/>
        <AddWindow
          title="إضافة ناشر"
          placeholder="أدخل اسم الناشر"
          resourse="publish_houses"
          url={url()}
        />
      </div>
      {errors?.map((err, index) => (
          <p key={index} className="text-red-500 mt-2">{err}</p>
        ))}
    </div>
  );
}
