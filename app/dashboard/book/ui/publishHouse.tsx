'use client';
import SelectGeneric from '@/components/selectGeneric';
import React, { useState } from 'react';
import getEndpoint from '@/services/getEndpoint';
import usePublishHouses from '@/hooks/data/books/publish_house/usePublishHouses';
import AddWindow from './addTools/addWindow';



const url = getEndpoint({  resourse: "publish_houses", action : "createPublishHouse" });

export default function PublishHouse({defaultValue}:{defaultValue: string}) {
  const [value, setValue] = useState<string>(defaultValue);

  const {data:publishHouses} = usePublishHouses();
  const Options = publishHouses?.data?.map((item) => ({ label: item.name, value: item.id }));

  return (
    <div>
      <label className="block font-semibold">الناشرون</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options ?? []} placeholder="أدخل الناشر" name="shareHouse"  selectedValue={value} setSelectedValue={setValue}/>
        <AddWindow
          title="إضافة ناشر"
          placeholder="أدخل اسم الناشر"
          resourse="publish_houses"
          url={url()}
        />
      </div>
    </div>
  );
}
