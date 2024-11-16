import Image from 'next/image';
import { IOrder } from '@/types';
import Status from './status';

export default function OrderProducts({
  order
}: {
  order: IOrder | undefined | null;
}) {
  if (!order) return null;

  const isScrollable = order.products.length >= 3;

  return (
    <div className="max-w-full rounded-md bg-white p-4 shadow-md">
      <div className="flex justify-between py-2">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">
          منتوجات الطلب
        </h2>

        {order && <Status status={order.status} />}
      </div>

      <div
        className={`-mx-4 overflow-x-auto sm:mx-0 ${
          isScrollable ? 'max-h-80 overflow-y-auto' : ''
        }`}
      >
        <table className="w-full">
          <thead className="hidden sm:table-header-group">
            <tr className="border-b">
              <th className="min-w-[150px] px-2 py-2 text-right">المنتج</th>
              <th className="min-w-[100px] px-2 py-2 text-right">السعر</th>
              <th className="min-w-[80px] px-2 py-2 text-right">الكمية</th>
              <th className="min-w-[100px] px-2 py-2 text-right">المجموع</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="px-2 py-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={product.images_urls[0]}
                      alt={product.title}
                      width={60}
                      height={60}
                      className="h-auto min-w-[4rem] rounded-md"
                    />
                    <div className="flex-grow leading-tight">
                      <div
                        className={`tooltip ${
                          index == 0 ? 'tooltip-bottom sm:tooltip-top ' : ''
                        }`}
                        data-tip={product.title}
                      >
                        <div className="line-clamp-1 font-semibold">
                          {product.title}
                        </div>
                      </div>
                      <div className="text-gray-500">{product.isbn}</div>
                      <div className="mt-2 space-y-1 sm:hidden">
                        <div className="flex gap-2">
                          <span className="text-gray-500">السعر:</span>
                          <div className="inline-flex flex-row items-center gap-1">
                            <span className="text-gray-500 line-through">
                              {product.price_before_discount}
                            </span>
                            <span className="font-medium">
                              {product.price_after_discount} د.م
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-gray-500">الكمية:</span>
                          <span>{product.quantity}</span>
                        </div>
                        <div className="flex gap-2 font-medium">
                          <span className="text-gray-500">المجموع:</span>
                          <span>
                            {product.quantity * product.price_after_discount}{' '}
                            د.م
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden px-2 py-4 text-right sm:table-cell">
                  <div className="inline-flex flex-col items-end gap-1 md:flex-row md:items-center">
                    <span className="text-gray-500 line-through">
                      {product.price_before_discount}
                    </span>
                    <span className="font-medium">
                      {product.price_after_discount} د.م
                    </span>
                  </div>
                </td>
                <td className="hidden px-2 py-4 text-right sm:table-cell">
                  {product.quantity}
                </td>
                <td className="hidden px-2 py-4 text-right sm:table-cell">
                  {product.quantity * product.price_after_discount} د.م
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between pt-4 text-lg font-semibold">
        <span>الإجمالي:</span>
        <span>
          {order.products.reduce(
            (sum, product) =>
              sum + product.quantity * product.price_after_discount,
            0
          )}{' '}
          د.م
        </span>
      </div>
    </div>
  );
}
