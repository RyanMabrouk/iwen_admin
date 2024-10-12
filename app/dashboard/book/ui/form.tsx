'use client';
import React, { useState, useEffect, useRef } from 'react';
import Writer from './writer';
import Status from './status';
import Category from './category';
import SubCategory from './subCategory';
import PictureUploader from './picture_uploader';
import CoverTypes from './coverType';
import PublishHouse from './publishHouse';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';
import CRUDData from '@/services/CRUDData';
import getEndpoint from '@/services/getEndpoint';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import useBook from '@/hooks/data/books/useBook';

import MetaPic from './metaPic';
import Input from '@/components/input';
import Textarea from '@/components/textArea';
import { Player } from '@lottiefiles/react-lottie-player';
import { uploadFile } from '@/api/uploadFile';

export default function Form() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const bookId = searchParams.get('bookId');
  const { data: book, isLoading } = useBook(String(bookId));
  const queryClient = useQueryClient();
  const router = useRouter();
  const [images, setImages] = useState<File[]>([]);
  const [preview, setPreview] = useState<string>(
    book?.data?.meta_image ?? '/add-book.png'
  );

  const toast = useToast();
  const [category_id, setCategory_id] = useState<string>('');
  useEffect(() => {
    setCategory_id(book?.data?.categories[0]?.id || '');
  }, [book]);

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
      const price_dhs = Number(formData.get('priceDollar'));
      const discount = Number(formData.get('discount'));
      const slug = String(formData.get('slug'));
      const meta_title = String(formData.get('meta_title'));
      const meta_description = String(formData.get('meta_description'));
      const canonical = String(formData.get('canonical'));
      const structured_data = formData.get('structured_data');
      const stock = Number(formData.get('stock'));
      const filepicture = formData.get('filepicture') as File;
      const meta_keywords = String(formData.get('meta_keywords'));
      let meta_image = '';
      if (filepicture.size > 0) {
        meta_image = await uploadFile({
          formData,
          name: 'filepicture',
          title: uuidv4()
        });
      }
      let images_urls = book?.data?.images_urls ?? [];

      if (images.length > 0) {
        const uploadedUrls = await Promise.all(
          images.map(async (file) => {
            const formDataImage = new FormData();
            formDataImage.append('file', file);
            return await uploadFile({
              formData: formDataImage,
              name: 'file',
              title: uuidv4()
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
        price_dhs,
        discount,
        stock,
        meta_keywords: [meta_keywords],
        images_urls,
        categories_ids: [category],
        subcategories_ids: [subcategory],
        page_count,
        cover_type_id,
        status,
        discount_type: 'percentage',
        meta_image,
        meta_title,
        meta_description,
        canonical,
        slug,
        structured_data
      };
      console.log("🚀 ~ mutationFn: ~ payload:", payload)
      if (bookId) {
        const urlUpdate = getEndpoint({
          resourse: 'books',
          action: 'updateBook'
        });
        const { error } = await CRUDData({
          method: 'PATCH',
          url: urlUpdate(String(bookId)),
          payload
        });
        if (error) {
          throw new Error(error);
        }
      } else {
        const urlAdd = getEndpoint({ resourse: 'books', action: 'createBook' });
        const { error } = await CRUDData({
          method: 'POST',
          url: urlAdd(),
          payload
        });
        if (error) {
          throw new Error(error);
        }
      }
    },
    onSuccess: () => {
      toast.toast({ description: 'تمت عملية تعديل بنجاح' });
      queryClient.invalidateQueries({ queryKey: ['books'] });
      if (bookId) router.push('/dashboard/books');
      else {
        if (formRef.current) {
          formRef.current.reset();
          setImages([]);
          setPreview('/add-book.png');
        }
      }
    },
    onError: (error) => {
      console.log(error);
      toast.toast({ description: 'حدث خطأ أثناء عملية تعديل' });
    }
  });

  if (isLoading) {
    return (
      <div className="m-auto flex min-h-screen items-center justify-center">
      <Player
        className="m-auto"
        autoplay
        loop
        src="/loading.json"
        style={{ height: "10rem", width: "10rem" }}
      />
    </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-8  rounded-sm  p-3"
      ref={formRef}
      action={updateBookMutation.mutate}
    >
      <h2 className="text-color5 mb-4 text-2xl font-bold">معلومات الكتاب</h2>
      <div className="space-y-4">
        <PictureUploader
          images={images}
          setImages={setImages}
          savedImages={book?.data?.images_urls ?? []}
          bookId={String(bookId)}
        />
        <Input
          label="العنوان"
          name="title"
          defaultValue={book?.data?.title || ''}
          placeholder="أدخل العنوان"
        />
        <Writer defaultValue={book?.data?.writer_id || ''} />
        <PublishHouse defaultValue={book?.data?.share_house_id || ''} />
        <Input
          label="المحقق"
          name="editor"
          defaultValue={book?.data?.editor || ''}
          placeholder="أدخل المحقق"
        />
        <Input
          label="سنة الإصدار"
          name="releaseYear"
          type="number"
          defaultValue={book?.data?.release_year || ''}
          placeholder="أدخل سنة الإصدار"
        />
        <Status defaultValue={book?.data?.status || ''} />
        <Input
          label="الوصف"
          name="description"
          defaultValue={book?.data?.description || ''}
          placeholder="أدخل الوصف"
        />
        <Category category_id={category_id} setCategory_id={setCategory_id} />
        <SubCategory
          defaultValue={book?.data?.subcategories[0]?.id || ''}
          category_id={category_id}
        />
        <CoverTypes defaultValue={book?.data?.cover_type_id || ''} />
        <Input
          label="الوزن"
          name="weight"
          type="number"
          defaultValue={book?.data?.weight || ''}
          placeholder="أدخل الوزن"
        />
        <Input
          label="عدد الصفحات"
          name="pageCount"
          type="number"
          defaultValue={book?.data?.page_count || ''}
          placeholder="أدخل عدد الصفحات"
        />
        <Input
          label="الرقم الدولي الموحد للكتاب"
          name="isbn"
          defaultValue={book?.data?.isbn || ''}
          placeholder="أدخل الرقم الدولي الموحد للكتاب"
        />
        <Input
          label="السعر (بالدينار)"
          name="priceDinar"
          type="number"
          defaultValue={book?.data?.price || ''}
          placeholder="أدخل السعر (بالدينار)"
        />
        <Input
          label="السعر (بالدولار)"
          name="priceDollar"
          type="number"
          defaultValue={book?.data?.price_dhs || ''}
          placeholder="أدخل السعر (بالدولار)"
        />
        <Input
          label="الخصم (%)"
          name="discount"
          type="number"
          defaultValue={book?.data?.discount || ''}
          placeholder="أدخل الخصم (%)"
        />
        <Input
          label="المخزون"
          name="stock"
          type="number"
          defaultValue={book?.data?.stock || ''}
          placeholder="أدخل المخزون"
        />
        <h2 className="text-color5 mb-4 text-2xl font-bold">معلومات SEO</h2>
        <Input
          label="عنوان الميتا"
          name="meta_title"
          placeholder="أدخل عنوان الميتا"
          defaultValue={book?.data?.meta_title || ''}
        />
        <Textarea
          label="وصف الميتا"
          name="meta_description"
          placeholder="أدخل وصف الميتا"
          defaultValue={book?.data?.meta_description || ''}
        />
        <label className="text-color5 block font-semibold">صورة الميتا</label>
        <MetaPic picture={preview} setPicture={setPreview} />
        <Input
          label="الكلمات المفتاحية"
          name="meta_keywords"
          placeholder="أدخل الكلمات المفتاحية مفصولة بفواصل"
          defaultValue={book?.data?.meta_keywords || ''}

        />
        <Input
          label="Canonical Meta "
          name="canonical"
          placeholder="أدخل    Canonical Meta"
          defaultValue={book?.data?.canonical || ''}
        />
        <Textarea
          label="البيانات المنظمة"
          name="structured_data"
          placeholder="أدخل البيانات المنظمة (JSON-LD)"
          defaultValue={book?.data?.structured_data || ''}
        />

        <Input
          label="Slug meta"
          name="slug"
          placeholder="أدخل Slug"
          defaultValue={book?.data?.slug || ''}
          />


      </div>
      <button
        type="submit"
        className="mt-5 w-fit rounded-sm bg-color1 px-4 py-3 text-lg font-semibold text-white shadow-lg transition-opacity hover:opacity-80"
      >
        {bookId ? ' تعديل الكتاب' : 'إضافة كتاب'}{' '}
      </button>
    </form>
  );
}
