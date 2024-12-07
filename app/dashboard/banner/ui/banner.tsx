'use client';
import useBanner from '@/hooks/data/banners/useBanner';
import useBooks from '@/hooks/data/books/useBooks';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import BannerPicUpload from './bannerPictureUpload';
import { Player } from '@lottiefiles/react-lottie-player';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadFile } from '@/api/uploadFile';
import { v4 as uuidv4 } from 'uuid';
import getEndpoint from '@/services/getEndpoint';
import CRUDData from '@/services/CRUDData';
import { useToast } from '@/components/ui/use-toast';
import { SearchIcon } from 'lucide-react';
import { Tables } from '@/types/database.types';
import { IBannerPayload, IBookPopulated, IValidationErrors } from '@/types';
import BannerPhonePicUpload from './bannerPhonePictureUpload';
import useBook from '@/hooks/data/books/useBook';
import Image from 'next/image';

export default function Banner() {
  const [errors, setErrors] = useState<
    IValidationErrors<IBannerPayload> | null | undefined
  >(null);
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const bannerId = searchParams.get('bannerId');
  const { data: banner, isLoading } = useBanner(String(bannerId));
  const [preview, setPreview] = useState(
    banner?.data?.url ?? '/no-banner-pc.png'
  );
  const [preview2, setPreview2] = useState(
    banner?.data?.phone_url ?? '/no-banner-phone.png'
  );
  const queryClient = useQueryClient();
  const toast = useToast();
  const { data: defaultSelectedBook } = useBook(banner?.data?.book_id ?? '');
  const [selectedBook, setSelectedBook] = useState<IBookPopulated | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const { data: books } = useBooks({
    search: {
      'books.title': [{ operator: 'ilike', value: `%${searchQuery}%` }]
    },
    page: 1,
    limit: 4
  });
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    if (defaultSelectedBook?.data) setSelectedBook(defaultSelectedBook.data);
  }, [defaultSelectedBook?.data]);

  useEffect(() => {
    if (banner?.data) {
      setPreview(banner?.data?.url ?? '/no-banner-pc.png');
      setPreview2(
        (banner?.data?.phone_url == ''
          ? '/no-banner-phone.png'
          : banner?.data?.phone_url) ?? '/no-banner-phone.png'
      );
    }
  }, [banner?.data]);

  const handleSelectBook = (book: IBookPopulated) => {
    setSelectedBook(book);
    setSearchQuery(book.title);
    setShowSuggestions(false);
  };

  const updateBannerMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const file = formData.get('filepicture') as File;
      const pcUrl =
        file.size > 0
          ? await uploadFile({ formData, name: 'filepicture', title: uuidv4() })
          : undefined;
      console.log('🚀 ~ mutationFn: ~ pcUrl:', pcUrl);

      const file2 = formData.get('filepicture2') as File;
      const phoneUrl =
        file2.size > 0
          ? await uploadFile({
              formData,
              name: 'filepicture2',
              title: uuidv4()
            })
          : undefined;
      const payload = {
        url: pcUrl,
        book_id: selectedBook?.id,
        phone_url: phoneUrl
      };
      const url = getEndpoint({
        resourse: 'banners',
        action: bannerId ? 'updateBanner' : 'createBanner'
      });
      const { error, validationErrors } = await CRUDData<
        Tables<'banners'>,
        IBannerPayload
      >({
        method: bannerId ? 'PATCH' : 'POST',
        url: url(String(bannerId)),
        payload
      });
      if (error || validationErrors) {
        setErrors(validationErrors);
        throw new Error(error || '');
      }
    },
    onSuccess: () => {
      toast.toast({
        description: bannerId
          ? 'تمت عملية تعديل بنجاح'
          : 'تمت عملية الإضافة بنجاح'
      });
      if (!bannerId && formRef.current) {
        formRef.current.reset();
        setPreview('/no-banner-pc.png');
        setPreview2('/no-banner-phone.png');
        setSearchQuery('');
        setSelectedBook(null);
      }
      queryClient.invalidateQueries({ queryKey: ['banners'] });
    },
    onError: () =>
      toast.toast({
        description: bannerId
          ? 'حدث خطأ أثناء عملية تعديل'
          : 'حدث خطأ أثناء عملية الإضافة'
      })
  });

  if (isLoading)
    return (
      <div className="m-auto flex min-h-screen items-center justify-center">
        <Player
          autoplay
          loop
          src="/loading.json"
          style={{ height: '10rem', width: '10rem' }}
        />
      </div>
    );

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        updateBannerMutation.mutate(new FormData(formRef.current!));
      }}
    >
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <BannerPicUpload
          picture={preview}
          setPicture={setPreview}
          errors={errors?.url ?? []}
        />
        <BannerPhonePicUpload
          picture2={preview2}
          setPicture2={setPreview2}
          errors={errors?.phone_url ?? []}
        />
      </div>

      <div className="relative">
        <div className="m-2 flex w-full max-w-md flex-row items-center gap-2 rounded-lg border-2 border-gray-300 bg-white shadow-sm">
          <input
            type="text"
            placeholder="بحث ..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setShowSuggestions(false)}
            onFocus={() => setShowSuggestions(true)}
            className="w-full rounded-lg p-2 focus:outline-none"
          />
          <button className="flex h-full cursor-default items-center justify-center rounded-lg p-2 transition-colors">
            <SearchIcon size={15} />
          </button>
        </div>
        {errors?.book_id?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
        {showSuggestions && books?.data?.data && books.data.data.length > 0 && (
          <div className="absolute max-h-60 w-full rounded-md border border-gray-200 bg-white shadow-md">
            {books?.data?.data.map((book) => (
              <div
                key={book.id}
                onMouseDown={() => handleSelectBook(book)}
                className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100"
              >
                <Image
                  src={book?.images_urls?.[0] ?? '/empty-book.svg'}
                  width={50}
                  height={50}
                  alt=""
                />
                <span>{book?.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedBook?.title && (
        <div className="mt-4 flex items-center gap-4">
          <Image
            src={selectedBook?.images_urls?.[0] ?? '/empty-book.svg'}
            width={50}
            height={50}
            alt=""
          />
          <span className="font-semibold">{selectedBook.title}</span>
        </div>
      )}
      <button
        type="submit"
        className="mt-5 w-fit rounded-sm bg-color2 px-4 py-3 text-lg text-white shadow-lg transition-opacity hover:opacity-80"
        disabled={updateBannerMutation.isPending}
      >
        {updateBannerMutation.isPending
          ? 'جاري المعالجة...'
          : bannerId
          ? 'تعديل الإعلان'
          : 'إضافة إعلان'}
      </button>
    </form>
  );
}
