'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function BookPic() {
  const [image, setImage] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImage(objectUrl);
    }
  };

  return (
    <div
      className="mt-auto  flex h-[14rem] w-full max-w-[17rem] cursor-pointer flex-col  gap-2 bg-color3 py-2"
      onClick={() =>
        document
          .querySelector<HTMLInputElement>('input[name="filepicture"]')
          ?.click()
      }
    >
      <Image
        src={image || '/add-book.png'}
        width={160}
        height={160}
        alt="صورة الكتاب"
        className="m-auto"
      />
      <input
        className=""
        name="filepicture"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <div className="flex items-center  justify-center gap-2" >
        <div className="  font-semibold">
          تحميل صورة
        </div>
      </div>
    </div>
  );
}
