'use client';
import useBooks from '@/hooks/data/books/useBooks';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import getEndpoint from '@/services/getEndpoint';
import CRUDData from '@/services/CRUDData';
import { v4 as uuidv4 } from 'uuid';
import { useToast } from '@/components/ui/use-toast';
import { SearchIcon } from 'lucide-react';
import useEvent from '@/hooks/data/events/useEvent';
import { Tables } from '@/types/database.types';

export default function Event() {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const eventId = searchParams.get('eventId');
  const { data: event, isLoading } = useEvent(String(eventId));
  const queryClient = useQueryClient();
  const toast = useToast();
  
  const [eventName, setEventName] = useState<string>(event?.data?.name ?? '');
  const [selectedBooks, setSelectedBooks] = useState<Tables<'books'>[]>(event?.data?.books ?? []);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

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

  const handleSelectBook = (book: Tables<'books'>) => {
    if (!selectedBooks.some(selectedBook => selectedBook.id === book.id)) {
      setSelectedBooks(prev => [...prev, book]);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleRemoveBook = (bookId: string) => {
    setSelectedBooks(prev => prev.filter(book => book.id !== bookId));
  };

  const updateEventMutation = useMutation({
    mutationFn: async () => {
      if (!eventName) {
        throw new Error('يجب إدخال اسم الفعالية');
      }
      if (selectedBooks.length === 0) {
        throw new Error('يجب اختيار كتاب واحد على الأقل');
      }
      const payload = {
        name: eventName,
        bookIds: selectedBooks.map(book => book.id)
      };
      const url = getEndpoint({
        resourse: 'events',
        action: eventId ? 'updateEvent' : 'createEvent'
      });
      const method = eventId ? 'PATCH' : 'POST';
      const { error } = await CRUDData({ method, url: url(String(eventId)), payload });
      if (error) throw new Error(error);
    },
    onSuccess: () => {
      toast.toast({
        description: eventId
          ? 'تمت عملية تعديل الفعالية بنجاح'
          : 'تمت عملية إضافة الفعالية بنجاح'
      });
      if (!eventId && formRef.current) {
        formRef.current.reset();
        setEventName('');
        setSelectedBooks([]);
      }
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
    onError: (error) => {
      const errorMessage = (error as Error).message;
      console.error(errorMessage);
      toast.toast({
        description: errorMessage || 'حدث خطأ أثناء عملية التحديث'
      });
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        updateEventMutation.mutate();
      }}
    >
      <div className="mb-4">
        <label htmlFor="eventName" className="block mb-2 font-semibold">
          اسم الفعالية
        </label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-color2"
          required
        />
      </div>

      <div className="relative mb-4">
        <label className="block mb-2 font-semibold">البحث عن كتب</label>
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
          <div className="absolute max-h-60 w-full border bg-white shadow-md">
            {books?.data?.data.map((book) => (
              <div
                key={book.id}
                onMouseDown={() => handleSelectBook(book)}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
              >
                <span>{book.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-semibold">الكتب المختارة</label>
        <div className="flex flex-wrap gap-2">
          {selectedBooks.map((book) => (
            <div
              key={book.id}
              className="flex items-center gap-2 p-2 border rounded"
            >
              <span>{book.title}</span>
              <button
                type="button"
                onClick={() => handleRemoveBook(book.id)}
                className="text-red-500"
              >
                إزالة
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-3 text-lg text-white bg-color2 rounded shadow-lg transition-opacity hover:opacity-80"
        disabled={updateEventMutation.isPending}
      >
        {updateEventMutation.isPending
          ? 'جاري المعالجة...'
          : eventId
          ? 'تعديل الفعالية'
          : 'إضافة فعالية'}
      </button>
    </form>
  );
}
