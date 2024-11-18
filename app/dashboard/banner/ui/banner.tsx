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
import { useRouter } from 'next/router';
import { useToast } from '@/components/ui/use-toast';
import Image from 'next/image';
import { SearchIcon } from 'lucide-react';
import { Tables } from '@/types/database.types';

export default function Banner() {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const bannerId = searchParams.get('bannerId');
  const { data: banner, isLoading } = useBanner(String(bannerId));
  const [preview, setPreview] = useState<string>(
    banner?.data?.url ?? '/no-banner.png'
  );
  const queryClient = useQueryClient();
  const toast = useToast();
  const [bookId, setBookId] = useState<string>(banner?.data?.book_id ?? '');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { data: books, isLoading: booksLoading } = useBooks({
    search: {
      'books.title': [
        {
          operator: 'ilike',
          value: `%${searchQuery}%`
        }
      ]
    },
    page: 1,
    limit: 4
  });
  const [selectedBook, setSelectedBook] = useState<{
    title: string;
    imageUrl: string;
  } | null>(null);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  useEffect(() => {
    const book = books?.data?.data.find((book) => book.id === bookId);
    if (book) {
      setSelectedBook({
        title: book.title,
        imageUrl: book.images_urls[0]
      });
    }
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
      const filepicture = formData.get('filepicture') as File;
      let picurl = undefined;
      if (filepicture.size > 0) {
        picurl = await uploadFile({
          formData,
          name: 'filepicture',
          title: uuidv4()
        });
      }
      if (picurl === undefined) {
        throw new Error('قم برفع الصورة');
      }
      if (!bookId) {
        throw new Error('قم بإختيار كتاب');
      }
      const payload = {
        url: picurl,
        book_id :bookId
      };
      if (bannerId) {        
        const urlUpdate = getEndpoint({
          resourse: 'banners',
          action: 'updateBanner'
        });
        const { error } = await CRUDData({
          method: 'PATCH',
          url: urlUpdate(String(bannerId)),
          payload
        });
        if (error) {
          throw new Error(error);
        }
      } else {
        const urlAdd = getEndpoint({
          resourse: 'banners',
          action: 'createBanner'
        });
        const { error , valdiationErrors} = await CRUDData<Tables<"banners">>({
          method: 'POST',
          url: urlAdd(),
          payload
        });
        if (error ) {
          throw new Error(error);
        }
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
      }
      queryClient.invalidateQueries({ queryKey: ['books'] });
    },
    onError: (error) => {
      const errorMessage = (error as Error).message; // Ensures the error is treated as a string
      console.error(errorMessage);
      toast.toast({
        description:
          errorMessage ||
          (bannerId
            ? 'حدث خطأ أثناء عملية تعديل'
            : 'حدث خطأ أثناء عملية الإضافة')
      });
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
          style={{ height: '10rem', width: '10rem' }}
        />
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        updateBannerMutation.mutate(new FormData(formRef.current!));
      }}
    >
      <BannerPicUpload picture={preview} setPicture={setPreview} />
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

        {showSuggestions && (books?.data?.data?.length ?? 0) > 0 && (
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
          ? 'تعديل الراية'
          : 'إضافة راية'}
      </button>
    </form>
  );
}
