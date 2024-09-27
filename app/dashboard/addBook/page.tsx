import React from 'react';
import Form from './ui/form';

export default function Page() {
  return (
    <div 
      dir="rtl"
      className="w-[50rem]  mx-auto   bg-white p-10 border shadow-md mb-10 " // Ensure the form can scroll
    >
      <h1 className="text-2xl font-bold mb-4">نموذج الكتاب</h1>
      <Form />

    </div>
  );
}
