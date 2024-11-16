"use client "
import { IOrder } from '@/types'
import { Tables } from '@/types/database.types'
import React from 'react'

export default function ShippingAddress({order} : {order:IOrder|undefined|null}) {


  return (
    <div className="flex w-full flex-col gap-5 bg-white p-5 shadow-md">
      <div className="flex w-full justify-between">
        <div className="text-3xl font-semibold tracking-tight">
        عنوان الشحن
        </div>
      </div>
      <div className='flex gap-2 flex-col'>
        {order?.address + " " + order?.postal_code}
        {order?.city}
      </div>
     
    </div>
  )
}
