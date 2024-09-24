'use client';
import { SelectGeneric } from '@/components/SelectGeneric';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Form() {
  const [image, setImage] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImage(objectUrl);
    }
  };
  const Options: { label: string; value: string }[] = [
    { label: 'أ', value: '1' },
    { label: 'ب', value: '2' }
  ];

  return (
    <form className="w-[50rem] space-y-4">
      <div
        className="mt-auto  flex h-[14rem] w-full max-w-[17rem] cursor-pointer flex-col  gap-2 bg-gray-200 py-2"
        onClick={() =>
          document
            .querySelector<HTMLInputElement>('input[name="filepicture"]')
            ?.click()
        }
      >
        <Image
          src={image || '/noArticlePic.png'}
          width={160}
          height={160}
          alt="صورة الكتاب"
          className="m-auto"
        />
        <input
          className=""
          name="filepicture"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <p className="mx-auto block text-center font-semibold">تحميل صورة</p>
      </div>
      <div>
        <label className="block font-semibold">العنوان</label>
        <input
          type="text"
          name="title"
          className="mt-2 w-full rounded-sm  border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل العنوان"
        />
      </div>

      <div>
        <label className="block font-semibold">المؤلف</label>
        <SelectGeneric
          className="mt-2"
          inputLabel="اختار المؤلف"
          options={Options}
        />
      </div>
      <div>
        <label className="block font-semibold">الناشرون</label>
        <SelectGeneric
          className="mt-2"
          inputLabel="اختار الناشر"
          options={Options}
        />
      </div>

      <div>
        <label className="block font-semibold">المحقق</label>
        <input
          type="text"
          name="editor"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل المحقق"
        />
      </div>

      <div>
        <label className="block font-semibold">سنة الإصدار</label>
        <input
          type="text"
          name="releaseYear"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل سنة الإصدار"
        />
      </div>
      <div>
        <label className="block font-semibold">الحالة</label>
        <SelectGeneric
          className="mt-2"
          inputLabel="اختار الحالة"
          options={Options}
        />
      </div>
      <div>
        <label className="block font-semibold">الوصف</label>
        <textarea
          name="description"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الوصف"
        />
      </div>
      <div>
        <label className="block font-semibold">الفئة</label>
        <SelectGeneric
          className="mt-2"
          inputLabel="اختار الفئة"
          options={Options}
        />
      </div>
      <div>
        <label className="block font-semibold">الفئة الفرعية</label>
        <SelectGeneric
          className="mt-2"
          inputLabel=" اختار الفئة الفرعية"
          options={Options}
        />
      </div>
      <div>
        <label className="block font-semibold">نوع الغلاف</label>
        <input
          type="text"
          name="coverType"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل نوع الغلاف"
        />
      </div>
      <div>
        <label className="block font-semibold">الوزن</label>
        <input
          type="text"
          name="weight"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الوزن"
        />
      </div>
      <div>
        <label className="block font-semibold">عدد الصفحات</label>
        <input
          type="text"
          name="pageCount"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل عدد الصفحات"
        />
      </div>
      <div>
        <label className="block font-semibold">
          الرقم الدولي الموحد للكتاب
        </label>
        <input
          type="text"
          name="isbn"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الرقم الدولي الموحد للكتاب"
        />
      </div>
      <div>
        <label className="block font-semibold">السعر (بالدينار)</label>
        <input
          type="text"
          name="priceDinar"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل السعر (بالدينار)"
        />
      </div>
      <div>
        <label className="block font-semibold">السعر (بالدولار)</label>
        <input
          type="text"
          name="priceDollar"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل السعر (بالدولار)"
        />
      </div>
      <div>
        <label className="block font-semibold">الخصم (%)</label>
        <input
          type="text"
          name="discount"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الخصم (%)"
        />
      </div>
      <div>
        <label className="block font-semibold">المخزون</label>
        <input
          type="text"
          name="stock"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل المخزون"
        />
      </div>

      <button type="submit" className="mt-4 w-full bg-blue-500 p-2 text-white">
        Submit
      </button>
    </form>
  );
}
