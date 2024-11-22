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
import { IBannerPayload, IValidationErrors } from '@/types';

export default function Banner() {
  const [errors, setErrors] = useState<
    IValidationErrors<IBannerPayload> | null | undefined
  >(null);
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const bannerId = searchParams.get('bannerId');
  const { data: banner, isLoading } = useBanner(String(bannerId));
  const [preview, setPreview] = useState(banner?.data?.url ?? '/no-banner.png');
  const queryClient = useQueryClient();
  const toast = useToast();
  const [bookId, setBookId] = useState(banner?.data?.book_id ?? '');
  const [searchQuery, setSearchQuery] = useState('');
  const { data: books } = useBooks({
    search: {
      'books.title': [{ operator: 'ilike', value: `%${searchQuery}%` }]
    },
    page: 1,
    limit: 4
  });
  const [selectedBook, setSelectedBook] = useState<{
    title: string;
    imageUrl: string;
  } | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const book = books?.data?.data.find((book) => book.id === bookId);
    if (book)
      setSelectedBook({ title: book.title, imageUrl: book.images_urls[0] });
  }, [bookId, books]);

  const handleSelectBook = (book: {
    id: string;
    title: string;
    imageUrl: string;
  }) => {
    setBookId(book.id);
    setSelectedBook({ title: book.title, imageUrl: book.imageUrl });
    setSearchQuery(book.title);
    setShowSuggestions(false);
  };

  const updateBannerMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const file = formData.get('filepicture') as File;
      const picurl =
        file.size > 0
          ? await uploadFile({ formData, name: 'filepicture', title: uuidv4() })
          : undefined;
      const payload = { url: picurl, book_id: bookId };
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
        setPreview('/no-banner.png');
        setBookId('');
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
      <BannerPicUpload
        picture={preview}
        setPicture={setPreview}
        errors={errors?.url ?? []}
      />
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
                onMouseDown={() =>
                  handleSelectBook({
                    id: book.id,
                    title: book.title,
                    imageUrl: book.images_urls[0]
                  })
                }
                className="flex cursor-pointer items-center p-2 hover:bg-gray-100"
              >
                <span>{book.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedBook && (
        <div className="mt-4 flex items-center gap-4">
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
