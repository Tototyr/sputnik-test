import { useCallback, useState } from 'react';

import type { ImageLoaderState } from '@shared-types/ImageLoaderState';

export const useImageLoader = (): ImageLoaderState => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
