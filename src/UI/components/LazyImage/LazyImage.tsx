import { useImageLoader } from '@hooks/useImageLoader';

export const LazyImage = ({ src }: { src: string }) => {
  const { loading, error, handleLoad, handleError } = useImageLoader();

  return (
    <div className="relative w-full h-[200px] rounded overflow-hidden flex items-center justify-center bg-gray-800">
      {loading && (
        <div
          className="absolute z-10 h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-e-transparent"
          role="status"
        />
      )}

      {error ? (
        <div className="text-white text-center">Ошибка загрузки</div>
      ) : (
        <img
          src={src}
          onLoad={handleLoad}
          onError={handleError}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};
