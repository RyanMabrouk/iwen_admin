'use client';
import useBooks from '@/hooks/data/books/useBooks';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getEndpoint from '@/services/getEndpoint';
import CRUDData from '@/services/CRUDData';
import { useToast } from '@/components/ui/use-toast';
import { SearchIcon } from 'lucide-react';
import { Tables } from '@/types/database.types';
import { IBookPopulated, IOfferPayload, IValidationErrors } from '@/types';
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';
import useOffer from '@/hooks/data/offers/useOffer';
import OfferPicUpload from './offerPictureUpload';
import { uploadFile } from '@/api/uploadFile';
import { v4 as uuidv4 } from 'uuid';

export default function Offer() {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const offerId = searchParams.get('offerId');
  const { data: offer, isLoading } = useOffer(String(offerId));
  const [preview, setPreview] = useState(
    offer?.data?.image_url ?? '/no-offer.jpg'
  );
  const queryClient = useQueryClient();
  const toast = useToast();
  const [errors, setErrors] = useState<
    IValidationErrors<IOfferPayload> | null | undefined
  >();

  const [selectedBooks, setSelectedBooks] = useState<IBookPopulated[]>(
    offer?.data?.books ?? []
  );
  const [priceBeforeOffer, setPriceBeforeOffer] = useState<number>(0);
  useEffect(() => {
    const totalPrice = selectedBooks.reduce(
      (sum, book) => sum + (book.price || 0),
      0
    );
    setPriceBeforeOffer(totalPrice);
  }, [selectedBooks]);
  useEffect(() => {
    if (offer?.data) {
      setPreview(offer?.data?.image_url ?? '/no-offer.jpg');
    }
  }, [offer?.data]);
  useEffect(() => {
    if (offer?.data?.books) {
      setSelectedBooks(offer.data.books);
    }
  }, [offer?.data]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const { data: books } = useBooks({
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

  const handleSelectBook = (book: IBookPopulated) => {
    if (!selectedBooks.some((selectedBook) => selectedBook.id === book.id)) {
      setSelectedBooks((prev) => [...prev, book]);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleRemoveBook = (bookId: string) => {
    setSelectedBooks((prev) => prev.filter((book) => book.id !== bookId));
  };

  const updateofferMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const title = String(formData.get('title'));
      const description = String(formData.get('description'));
      const price_before_offer = Number(formData.get('price_before_offer'));
      const price_after_offer = Number(formData.get('price_after_offer'));
      const file = formData.get('filepicture') as File;
      const pcUrl =
        file.size > 0
          ? await uploadFile({ formData, name: 'filepicture', title: uuidv4() })
          : undefined;
      const payload = {
        title: title,
        description: description,
        price_before_offer: price_before_offer,
        price_after_offer: price_after_offer,
        image_url: pcUrl,
        book_ids: selectedBooks.map((book) => book.id)
      };
      const url = getEndpoint({
        resourse: 'offers',
        action: offerId ? 'updateOffer' : 'createOffer'
      });
      const method = offerId ? 'PATCH' : 'POST';
      const { error, validationErrors } = await CRUDData<
        Tables<'offers'>,
        IOfferPayload
      >({ method, url: url(String(offerId)), payload });
      if (error || validationErrors) {
        if (validationErrors) {
          setErrors(validationErrors);
        }
        throw new Error(error ?? '');
      }
    },
    onSuccess: () => {
      toast.toast({
        description: offerId
          ? 'تمت عملية تعديل العرض بنجاح'
          : 'تمت عملية إضافة العرض بنجاح'
      });
      if (!offerId && formRef.current) {
        formRef.current.reset();
        setSelectedBooks([]);
        setPreview('/no-offer.jpg');
      }
      queryClient.invalidateQueries({ queryKey: ['offers'] });
    },
    onError: (error) => {
      toast.toast({
        description: offerId
          ? 'حدث خطأ أثناء عملية تعديل'
          : 'حدث خطأ أثناء عملية الإضافة'
      });
    }
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
    <form ref={formRef} action={updateofferMutation.mutate}>
      <div className="mb-4">
        <label className="mb-2 block font-semibold">عنوان العرض</label>
        <input
          name="title"
          type="text"
          defaultValue={offer?.data?.title}
          className="w-full rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-color2"
        />
        {errors?.title?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-semibold">الوصف</label>
        <input
          type="text"
          name="description"
          defaultValue={offer?.data?.description}
          className="w-full rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-color2"
        />
        {errors?.description?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">السعر قبل العرض</label>
        <input
          type="number"
          name="price_before_offer"
          value={priceBeforeOffer}
          onChange={(e) => setPriceBeforeOffer(Number(e.target.value))}
          className="w-full rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-color2"
        />
        {errors?.price_before_offer?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-semibold">السعر بعد العرض</label>
        <input
          type="number"
          name="price_after_offer"
          defaultValue={offer?.data?.price_after_offer}
          className="w-full rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-color2"
        />
        {errors?.price_after_offer?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
      </div>

      <div className="relative mb-4">
        <label className="mb-2 block font-semibold">البحث عن كتب</label>
        <div className="flex items-center gap-2 rounded border border-gray-300 p-2 shadow-sm">
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
            className="w-full rounded-lg focus:outline-none"
          />
          <button type="button" className="p-2">
            <SearchIcon size={15} />
          </button>
        </div>

        {showSuggestions && (books?.data?.data?.length ?? 0) > 0 && (
          <div className="absolute  w-full border bg-white shadow-md">
            {books?.data?.data
              .filter(
                (book) =>
                  !selectedBooks.some(
                    (selectedBook) => selectedBook.id === book.id
                  )
              )
              .map((book) => (
                <div
                  key={book.id}
                  onMouseDown={() => handleSelectBook(book)}
                  className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100"
                >
                  <Image
                    src={book.images_urls[0] ?? '/empty-book.svg'}
                    width={50}
                    height={50}
                    alt=""
                  />
                  <span>{book.title}</span>
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-semibold">الكتب المختارة</label>
        {errors?.books_ids?.map((err, index) => (
          <p key={index} className="mt-2 text-red-500">
            {err}
          </p>
        ))}
        <div className="flex flex-wrap gap-2">
          {selectedBooks.map((book) => (
            <div key={book.id} className="flex items-center gap-2 rounded  p-2">
              <Image
                src={book.images_urls[0] ?? '/empty-book.svg'}
                width={50}
                height={50}
                alt=""
              />
              <span>{book.title}</span>

              <button
                type="button"
                onClick={() => handleRemoveBook(book.id)}
                className="text-2xl font-bold text-red-500"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 md:flex-row">
        <OfferPicUpload
          picture={preview}
          setPicture={setPreview}
          errors={errors?.image_url ?? []}
        />
      </div>

      <button
        type="submit"
        className="rounded bg-color2 px-4 py-3 text-lg text-white shadow-lg transition-opacity hover:opacity-80"
        disabled={updateofferMutation.isPending}
      >
        {updateofferMutation.isPending
          ? 'جاري المعالجة...'
          : offerId
          ? 'تعديل العرض'
          : 'إضافة عرض'}
      </button>
    </form>
  );
}
