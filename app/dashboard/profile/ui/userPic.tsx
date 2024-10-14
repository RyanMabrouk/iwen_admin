'use client'

import React from 'react'

import Image from "next/image"



export default function UserPic( {picture , setPicture}: { picture: string, setPicture: React.Dispatch<React.SetStateAction<string>> }) {

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPicture(objectUrl);
    }
  };

  return (
    <div
    className="flex h-[12rem] rounded-full mx-auto max-w-[12rem] w-full mt-2 cursor-pointer flex-col justify-center gap-2 bg-color3 "
    onClick={() =>
      document
        .querySelector<HTMLInputElement>('input[name="filepicture"]')
        ?.click()
    }
  >
    <Image
      src={picture}
      width={150}
      height={150}
      alt="user Picture"
      className="m-auto rounded-full"
    />
    <input
      className=""
      name="filepicture"
      type="file"
      accept="image/*"
      style={{ display: "none" }}
      onChange={handleImageChange}
    />

  </div>
  )
}