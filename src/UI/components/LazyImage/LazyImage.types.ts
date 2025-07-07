import type { ImgHTMLAttributes, ReactNode } from 'react';

export interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackComponent?: ReactNode;
}
