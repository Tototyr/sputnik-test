import { useImageLoader } from '@hooks/useImageLoader';

export const ImageWithLoader = ({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) => {
  const { loading, error, handleLoad, handleError } = useImageLoader();

  return (
    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-image flex items-center justify-center">
      {loading && (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        />
      )}

      {error ? (
        <div className="error">Ошибка загрузки</div>
      ) : (
        <img src={src} alt={alt} onLoad={handleLoad} onError={handleError} />
      )}
    </div>
  );
};
