import type { HTMLProps } from 'react';

export interface ProductCardProps extends Omit<HTMLProps<HTMLElement>, 'id'> {
  id: number;
  title: string;
  origin: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
  imageUrl: string;
}
