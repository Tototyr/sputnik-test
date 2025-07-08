import type { FC } from 'react';

import type { ProductCardListProps } from './ProductCardList.types';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductCardList: FC<ProductCardListProps> = ({ data }) => {
  return (
    <section aria-label="Список продуктов">
      <ul
        role="list"
        className="grid grid-cols-4 gap-x-6 gap-y-15 max-xl:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 cursor-pointer max-xl:ml-6 max-xl:mr-6"
      >
        {data.map((product) => (
          <li key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              origin={product.origin}
              price={product.price}
              currency={product.currency}
              imageUrl={product.imageUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
