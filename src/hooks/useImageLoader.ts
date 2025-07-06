import type { ImageLoader } from '@/types/imageLoader';
import { useCallback, useState } from 'react';

export const useImageLoader = (): ImageLoader => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  const handleLoad = useCallback(() => {
    setLoading(false);
    setError(false);
  }, []);

  const handleError = useCallback(() => {
    setLoading(false);
    setError(true);
  }, []);

  return {
    loading,
    error,
    handleLoad,
    handleError,
  };
};
