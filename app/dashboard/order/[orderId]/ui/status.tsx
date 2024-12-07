'use client';
import CRUDData from '@/services/CRUDData';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import getEndpoint from '@/services/getEndpoint';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import CancelReason from './cancelReason';
import ConfirmOrder from './cofirmOrder';

type StatusProps = {
  status: 'pending' | 'paid' | 'canceled';
  onConfirm?: () => void;
  onCancel?: () => void;
};

export default function Status({ status }: StatusProps) {
  let color: 'bg-red-600' | 'bg-yellow-500' | 'bg-color2';
  let icon: React.ReactNode;
  let text: string;

  switch (status) {
    case 'pending':
      color = 'bg-yellow-500';
      icon = <Clock className="h-4 w-4" />;
      text = 'قيد الانتظار';
      break;
    case 'paid':
      color = 'bg-color2';
      icon = <CheckCircle className="h-4 w-4" />;
      text = 'مدفوع';
      break;
    case 'canceled':
      color = 'bg-red-600';
      icon = <XCircle className="h-4 w-4" />;
      text = 'ملغي';
      break;
    default:
      color = 'bg-yellow-500';
      icon = <Clock className="h-4 w-4" />;
      text = status;
  }
  return (
    <>
    {
      status === 'pending' ?(
        <div className='flex items-center gap-2'>
          <CancelReason />
          <ConfirmOrder />

        </div>
      ) :
      <Badge
      
        className={`flex items-center px-2 py-1 text-lg text-gray-50 hover:${color} w-fit gap-1 hover:opacity-50 ${color} `}
      >
        {icon}
        <span className="font-normal">{text}</span>
      </Badge>
    }
      
    </>
  );
}
