'use client';
import React, { useState, useRef } from 'react';
import Writer from './writer';
import Status from './status';
import Category from './category';
import SubCategory from './subCategory';
import PictureUploader from './picture_uploader';
import CoverTypes from './coverType';
import PublishHouse from './publishHouse';
import { useMutation } from '@tanstack/react-query';
import { uploadFile } from '@/app/api/uploadFile';
import { useToast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';

export default function Form() {
  const [images, setImages] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null); // Reference to form element
  const url = getEndpoint({ resourse: 'books', action: 'createBook' });
  const toast = useToast();
  const addBookMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const title = String(formData.get('title'));
      const writer_id = String(formData.get('writer'));
      const share_house_id = String(formData.get('shareHouse'));
      const editor = String(formData.get('editor'));
      const release_year = Number(formData.get('releaseYear'));
      const status = String(formData.get('status'));
      const description = String(formData.get('description'));
      const category = String(formData.get('category'));
      const subcategory = String(formData.get('subCategory'));
      const cover_type_id = String(formData.get('cover_type'));
      const weight = Number(formData.get('weight'));
      const page_count = Number(formData.get('pageCount'));
      const isbn = String(formData.get('isbn'));
      const price = Number(formData.get('priceDinar'));
      const price_usd = Number(formData.get('priceDollar'));
      const discount = Number(formData.get('discount'));
      const stock = Number(formData.get('stock'));

      let images_urls: string[] = [];
      if (images.length > 0) {
        images_urls = await Promise.all(
          images.map(async (image) => {
            const formDataImage = new FormData();
            formDataImage.append('file', image);
            return await uploadFile({
              formData: formDataImage,
              name: 'file',
              title: uuidv4()
            });
          })
        );
      }

      const payload = {
        title,
        writer_id,
        share_house_id,
        editor,
        release_year,
        description,
        weight,
        isbn,
        price,
        price_usd,
        discount,
        stock,
        images_urls,
        page_count,
        categories_ids: [category],
        subcategories_ids: [subcategory],
        cover_type_id,
        status,
        discount_type: 'percentage'
      };

      const { error } = await CRUDData({ method: 'POST', url: url(), payload });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.toast({ description: 'تمت عملية الإضافة بنجاح' });

      // Reset the form after a successful submission
      if (formRef.current) {
        formRef.current.reset();
        setImages([]); // Reset the images state
      }
    },
    onError: (error) => {
      console.log(error);
      toast.toast({ description: 'حدث خطأ أثناء عملية الإضافة' });
    }
  });
  return (
    <form
      ref={formRef}
      className="flex flex-col gap-4 "
      action={addBookMutation.mutate}
    >
      <PictureUploader images={images} setImages={setImages} />
      <div>
        <label className="block font-semibold">العنوان</label>
        <input
          type="text"
          name="title"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل العنوان"
        />
      </div>
      <Writer />
      <PublishHouse />
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
      <CoverTypes />
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
      <button
        type="submit" // Change the button to submit type
        className="mt-5 w-fit rounded-sm bg-color2 px-4 py-2 text-lg text-white hover:opacity-50"
      >
        اضافة الكتاب
      </button>
    </form>
  );
}
