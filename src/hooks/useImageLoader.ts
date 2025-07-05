import { useCallback, useState } from 'react';

export function useImageLoader() {
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
}
