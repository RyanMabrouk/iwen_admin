import React from 'react';
import BookPic from './bookPic';
import Writer from './writer';
import ShareHouse from './shareHouse';
import Status from './status';
import Category from './category';
import SubCategory from './subCategory';
import { Button } from '@/components/ui/button';

export default function Form() {
  return (
    <form className="flex flex-col gap-4 ">
      <BookPic />
      <div>
        <label className="block font-semibold">العنوان</label>
        <input
          type="text"
          name="title"
          className="mt-2 w-full rounded-sm  border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل العنوان"
        />
      </div>
      <Writer />
      <ShareHouse />
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
          type="number"
          name="releaseYear"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل سنة الإصدار"
        />
      </div>
      <Status />
      <div>
        <label className="block font-semibold">الوصف</label>
        <textarea
          name="description"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الوصف"
        />
      </div>
      <Category />
      <SubCategory />

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
          type="number"
          name="weight"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الوزن"
        />
      </div>
      <div>
        <label className="block font-semibold">عدد الصفحات</label>
        <input
          type="number"
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
          type="number"
          name="priceDinar"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل السعر (بالدينار)"
        />
      </div>
      <div>
        <label className="block font-semibold">السعر (بالدولار)</label>
        <input
          type="number"
          name="priceDollar"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل السعر (بالدولار)"
        />
      </div>
      <div>
        <label className="block font-semibold">الخصم (%)</label>
        <input
          type="number"
          name="discount"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الخصم (%)"
        />
      </div>
      <div>
        <label className="block font-semibold">المخزون</label>
        <input
          type="number"
          name="stock"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل المخزون"
        />
      </div>
        <Button className="mt-5 text-lg text-white bg-color2  w-fit">اضافة الكتاب</Button>
    </form>
  );
}
