import type { ProductCardProps } from '@/types/ProductCard';
import { formatPrice } from '@/utils/ProductCard.utils';
import React from 'react';
import { ImageWithLoader } from '@components/LazyImage/LazyImage';

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-card bg-clip-border text-white shadow-md  hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
      <ImageWithLoader src={imageUrl} />
      <div className="p-6 max-md:pb-2 max-md:px-4">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased break-words max-md:text-lg">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased max-md:text-sm ">
          Страна: {origin}
        </p>
      </div>
      <div className="p-6 pt-0 max-md:px-4">{formatPrice(price, currency)}</div>
    </div>
  );
};
