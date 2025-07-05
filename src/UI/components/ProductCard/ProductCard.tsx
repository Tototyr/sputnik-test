import type { ProductCardProps } from '@/types/ProductCard';
import { formatPrice } from '@/utils/ProductCard.utils';
import React from 'react';
import { LazyImage } from '@components/LazyImage/LazyImage';

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  return (
    <div className="gradient-border w-full mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="rounded-lg bg-gray-900 p-6 h-full w-full flex flex-col justify-evenly center">
        <div className="flex justify-center mb-4">
          <LazyImage src={imageUrl} />
        </div>
        <div className="my-4">
          <h2 className="text-white text-2xl font-bold pb-2">{title}</h2>
          <p className="text-gray-300 py-1">Страна: {origin}</p>
          <p className="text-gray-300 py-1">{formatPrice(price, currency)}</p>
        </div>
        <div className="flex justify-end">
          <button className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800 cursor-pointer duration-300 hover:scale-110">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};
