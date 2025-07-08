import { useTranslation } from 'react-i18next';

import { LazyImage } from '@components/LazyImage/LazyImage';

import type { ProductCardProps } from './ProductCard.types';
import { formatPrice } from './ProductCard.utils';
import { FailedImageFallback } from '../FailedImageFallback/FailedImageFallback';

export const ProductCard = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}: ProductCardProps) => {
  const { t } = useTranslation();

  return (
    <article className="gradient-border w-full mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <div className="rounded-lg bg-gray-900 p-6 h-full w-full flex flex-col justify-evenly center">
        <figure className="flex justify-center mb-4">
          <LazyImage
            src={imageUrl}
            fallbackComponent={<FailedImageFallback />}
          />
        </figure>

        <section className="my-4">
          <header>
            <h2 className="text-white text-2xl font-bold pb-2">{title}</h2>
          </header>

          <dl className="text-gray-300">
            <div className="py-1">
              <dt className="inline">{t('country')}:</dt>
              <dd className="inline ml-1">{origin}</dd>
            </div>
            <div className="py-1">
              <dt className="sr-only">Price:</dt>
              <dd>{formatPrice(price, currency)}</dd>
            </div>
          </dl>
        </section>

        <footer className="flex justify-end">
          <button
            className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800 cursor-pointer duration-300 hover:scale-110"
            aria-label={`${title}`}
          >
            {t('product_card.button')}
          </button>
        </footer>
      </div>
    </article>
  );
};
