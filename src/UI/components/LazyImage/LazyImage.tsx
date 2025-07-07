import { useImageLoader } from '@hooks/useImageLoader';

import type { LazyImageProps } from './LazyImage.types';

export const LazyImage = ({ src, fallbackComponent }: LazyImageProps) => {
  const loader = useImageLoader();

  return (
    <figure
      className="relative w-full h-[200px] rounded overflow-hidden bg-gray-800"
      aria-busy={loader.loading}
    >
      {!loader.error && (
        <img
          src={src}
          onLoad={loader.handleLoad}
          onError={loader.handleError}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            loader.loading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {loader.loading && (
        <div
          role="status"
          aria-label="Загрузка изображения"
          className="absolute inset-0 flex items-center justify-center animate-pulse bg-gray-700"
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-300 dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      )}

      {loader.error && fallbackComponent && (
        <figcaption
          role="alert"
          className="absolute inset-0 flex items-center justify-center bg-gray-800 text-center text-red-500 p-2"
        >
          {fallbackComponent}
        </figcaption>
      )}
    </figure>
  );
};
