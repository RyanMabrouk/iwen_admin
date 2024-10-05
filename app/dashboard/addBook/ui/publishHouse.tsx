'use client';
import SelectGeneric from '@/components/selectGeneric';
import React from 'react';
import AddWindow from './addTools/addWindow';
import getEndpoint from '@/services/getEndpoint';
import usePublishHouses from '@/hooks/data/books/publish_house/usePublishHouses';



const url = getEndpoint({  resourse: "publish_houses", action : "createPublishHouse" });

export default function PublishHouse() {
  const {data:publishHouses} = usePublishHouses();
  const Options = publishHouses?.data?.map((item) => ({ label: item.name, value: item.id }));

  return (
    <div>
      <label className="block font-semibold">الناشرون</label>
      <div className="flex items-center gap-2">
        <SelectGeneric options={Options ?? []} placeholder="أدخل الناشر" name="shareHouse" />
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
