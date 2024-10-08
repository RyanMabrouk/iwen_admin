'use client';
import React, { useState, useRef } from 'react';
import Writer from './writer';
import Status from './status';
import Category from './category';
import SubCategory from './subCategory';
import PictureUploader from './picture_uploader';
import CoverTypes from './coverType';
import PublishHouse from './publishHouse';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadFile } from '@/app/api/uploadFile';
import { useToast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import { useParams, useRouter } from 'next/navigation';
import useBook from '@/hooks/data/books/useBook';

export default function Form() {
  const { bookId } = useParams();
  const { data:book , isLoading} = useBook(String(bookId));
  const queryClient = useQueryClient();
  const router = useRouter(); 
  const [images, setImages] = useState<File[]>([]);
  const url = getEndpoint({ resourse: 'books', action: 'updateBook' });
  const toast = useToast();
  const updateBookMutation = useMutation({
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

      let images_urls = book?.data?.images_urls ?? [];

      if (images.length > 0) {
        const uploadedUrls = await Promise.all(
          images.map(async (file) => {
            const formDataImage = new FormData();
            formDataImage.append("file", file);
            return await uploadFile({
              formData: formDataImage,
              name: "file",
              title: uuidv4(),
            });
          })
        );
        images_urls = [...images_urls, ...uploadedUrls]; 
      }
      setImages([]);
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
        cover_type_id,
        status,
        discount_type: 'percentage'
      };

      const { error } = await CRUDData({ method: 'PATCH', url: url(String(bookId)), payload });
      if (error) {
        throw new Error(error);
      }
    },
    onSuccess: () => {
      toast.toast({ description: 'تمت عملية تعديل بنجاح' });
      queryClient.invalidateQueries({ queryKey: ["books",bookId] });
      queryClient.invalidateQueries({ queryKey: ["books"] });

      router.push('/dashboard/books'); 
    },
    onError: (error) => {
      console.log(error);
      toast.toast({ description: 'حدث خطأ أثناء عملية تعديل' });
    }
    
  });
  if (isLoading) {
    return     <div className="m-auto flex min-h-screen items-center justify-center">
      loading

  </div>;}
  return (
    <form
      className="flex flex-col gap-4 "
      action={updateBookMutation.mutate}
    > 
      <PictureUploader images={images} setImages={setImages} savedImages={book?.data?.images_urls ?? []} bookId={String(bookId)}/>
      <div>
        <label className="block font-semibold">العنوان</label>
        <input
          type="text"
          name="title"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل العنوان"
          defaultValue={book?.data?.title|| ''}
        />
      </div>
      <Writer defaultValue={book?.data?.writer_id|| ''}  />
      <PublishHouse defaultValue={book?.data?.share_house_id || ""}/>
      <div>
        <label className="block font-semibold">المحقق</label>
        <input
          type="text"
          name="editor"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل المحقق"
          defaultValue={book?.data?.editor|| ''}
        />
      </div>

      <div>
        <label className="block font-semibold">سنة الإصدار</label>
        <input
          type="number"
          name="releaseYear"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل سنة الإصدار"
          defaultValue={book?.data?.release_year|| ''}
        />
      </div>
      <Status defaultValue={book?.data?.status || ""} />
      <div>
        <label className="block font-semibold">الوصف</label>
        <textarea
          name="description"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الوصف"
          defaultValue={book?.data?.description|| ''}
        />
      </div>
      <Category  defaultValue={book?.data?.categories[0].id || ""}/>
      <SubCategory defaultValue={book?.data?.subcategories[0].id || ""} />
      <CoverTypes defaultValue={book?.data?.cover_type_id || ""} />
      <div>
        <label className="block font-semibold">الوزن</label>
        <input
          type="number"
          name="weight"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الوزن"
          defaultValue={book?.data?.weight|| ''}
          
          />
      </div>
      <div>
        <label className="block font-semibold">عدد الصفحات</label>
        <input
          type="number"
          name="pageCount"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل عدد الصفحات"
          defaultValue={book?.data?.page_count|| ''}
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
          defaultValue={book?.data?.isbn|| ''}
        />
      </div>
      <div>
        <label className="block font-semibold">السعر (بالدينار)</label>
        <input
          type="number"
          name="priceDinar"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل السعر (بالدينار)"
          defaultValue={book?.data?.price|| ''}
        />
      </div>
      <div>
        <label className="block font-semibold">السعر (بالدولار)</label>
        <input
          type="number"
          name="priceDollar"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل السعر (بالدولار)"
          defaultValue={book?.data?.price_usd|| ''}
        />
      </div>
      <div>
        <label className="block font-semibold">الخصم (%)</label>
        <input
          type="number"
          name="discount"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل الخصم (%)"
          defaultValue={book?.data?.discount|| ''}
        />
      </div>
      <div>
        <label className="block font-semibold">المخزون</label>
        <input
          type="number"
          name="stock"
          className="mt-2 w-full rounded-sm border border-gray-300 p-2 focus:outline-none"
          placeholder="أدخل المخزون"
          defaultValue={book?.data?.stock|| ''}
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
